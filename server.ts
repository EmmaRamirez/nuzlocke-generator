const { head, tail } = require("lodash");

const express = require('express');
// @ts-ignore false redeclare warning
const path = require('path');
const app = express();
require('dotenv').config()
// @ts-ignore false redeclare warning
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const compression = require('compression');
const cors = require('cors');
const logger = require('pino')({
  // prettyPrint: true,
  messageFormat: '☰nuz: {levelLabel} - {pid} - url:{request.url}'
});

// const { Client, Pool } = require('pg');
// const pool = new Pool();

// async function getStuff (limit, offset = 0) {
//   const res = await pool.query('SELECT * FROM release_notes ORDER BY version DESC LIMIT $1 OFFSET $2', [limit, offset]);
//   console.log(res);
//   //await pool.end();
//   return res.rows;
// }

const isLocal = process.env.NODE_ENV === 'local';

let middleware, compiler;

if (isLocal) {
    const Webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const webpackConfig = require('./webpack.config');

    compiler = Webpack(webpackConfig);
    middleware = require('webpack-dev-middleware');
}

const GH_URL = 'https://api.github.com/repos/EmmaRamirez/nuzlocke-generator';
const GH_ACCESS_TOKEN = process.env.GH_ACCESS_TOKEN;
const productionFlag = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(compression);
if (isLocal && middleware && compiler) {
    logger.info(`Running server in development mode.`);
    app.use(middleware(compiler, {}));
} else {
    logger.info(`Running server in production mode.`);
}

interface ReportArgs {
    title?: string;
    report?: string;
    data?: string;
}

const PORT = process.env.PORT || 8080;

app.get('/', async (req, res, next) => {
    app.use(express.static(path.join(__dirname, 'dist')));
    next();
});

app.post('/report', async (req, res, next) => {
    const { report, title, data } = req.body as ReportArgs;
    logger.info(report, title, data);

    if (!title) next(new Error('Missing report title.'));
    const githubCall = await fetch(`${GH_URL}/issues`, {
        method: 'POST',
        headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `Token ${process.env.GH_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        },
        // mode: 'cors',
        body: JSON.stringify({
            title: title,
            body: `${report}
 
\`\`\`json
${data ? data : 'User chose not to attach nuzlocke.json'}
\`\`\`
        `,
            assigness: ['EmmaRamirez'],
            labels: ['User Submitted', 'Type: Bug'],
        }),
    });
    if (githubCall?.status?.toString()[0] === '2') {
        logger.info(`Successfully called Github`);
    }
    res.send({ status: githubCall.status });
    next();
});

app.get('/release/:type', async (req, res, next) => {
    const type = req.params.type; /* latest, all, or version tags */

    const releases = await fetch(`${GH_URL}/releases`, {
        method: 'GET',
        headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `Token ${process.env.GH_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        },
        // mode: 'cors',
    })
        .then((res) => res.json())
        .then((res) =>
            (res as any)?.map((rel) => ({
                id: rel.id,
                url: rel.html_url,
                version: rel.tag_name,
                note: rel.body,
                timestamp: rel.published_at,
            })),
        );

    if (type === 'latest') {
        const notes = head(releases);
        res.send({ status: 200, payload: { notes: [notes] } });
    } else if (type === 'all') {
        const notes = tail(releases);
        res.send({ status: 200, payload: { notes } });
    } else {
        logger.error(`Invalid release type param`);

        res.send({ status: 400, error: `Invalid release type param` });
    }
    next();
});

app.get('/nuzlocke/:id', async (req, res, next) => {
    logger.info('Retrieving nuzlocke ', req.params.id);
    res.send({ status: 200 });
    next();
});

app.post('/nuzlocke', async (req, res, next) => {});

app.get('/nuzlockes', async (req, res, next) => {});

app.listen(PORT, () => {
    logger.info(`Current environment: ${process.env.NODE_ENV}`);
    logger.info(`Running server on http://localhost:${PORT} 🚀`);
});
