import head from 'lodash/head';
import tail from 'lodash/tail';
import express from 'express';
import path, { dirname } from 'node:path';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import compression from 'compression';
import cors from 'cors';
import pino from 'pino';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const logger = pino({});

// '☰nuz: {levelLabel} - {pid} - url:{request.url}'

const isLocal = process.env.NODE_ENV === 'local';

let middleware, compiler;

const GH_URL = 'https://api.github.com/repos/EmmaRamirez/nuzlocke-generator';
const GH_ACCESS_TOKEN = process.env.GH_ACCESS_TOKEN;
const productionFlag = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(compression());
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
        .then((res) => {
            if (Array.isArray(res)) {
                return res.map((rel) => ({
                    id: rel.id,
                    url: rel.html_url,
                    version: rel.tag_name,
                    note: rel.body,
                    timestamp: rel.published_at,
                }));
            } else {
                return [];
            }
        });

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
