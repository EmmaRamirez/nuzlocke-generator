const express = require('express');
// @ts-ignore false redeclare warning
const path = require('path');
const app = express();
require('dotenv').config()
// @ts-ignore false redeclare warning
const fetch = require('node-fetch');
const compression = require('compression');
const logger = require('pino')({
  prettyPrint: true,
  messageFormat: '☰nuz: {levelLabel} - {pid} - url:{request.url}'
});
const cors = require('cors');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const compiler = Webpack(webpackConfig);
const middleware = require('webpack-dev-middleware');

const GH_URL = 'https://api.github.com/repos/EmmaRamirez/nuzlocke-generator/issues';
const GH_ACCESS_TOKEN = process.env.GH_ACCESS_TOKEN;
const productionFlag = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(compression());
if (!productionFlag) {
  logger.info(`Running server in development mode.`);
  app.use(
    middleware(compiler, {})
  );
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
  app.use(express.static(path.join(__dirname, 'dist')))
  next();
});


app.post('/report', async (req, res, next) => {
  const { report, title, data } = req.body as ReportArgs;
  logger.info(report, title, data);

  if (!title) next(new Error('Missing report title.'));
  const githubCall = await fetch(GH_URL, {
    method: 'POST',
    headers: {
        Accept: 'application/vnd.github.cloak-preview',
        Authorization: `Token ${process.env.GH_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify({
        title: title,
        body: `${report}
 
\`\`\`json
${data ? JSON.stringify(data) : 'User chose not to attach nuzlocke.json'}
\`\`\`
        `,
        assigness: ['EmmaRamirez'],
        labels: ['User Submitted', 'Type: Bug'],
    })
  });
  if (githubCall.status.toString()[0] === '2') {
    logger.info(`Successfully called Github`);
  }
  res.send({ status: githubCall.status });
  next();
});

app.get('/nuzlocke/:id', async (req, res, next) => {
  logger.info('Retrieving nuzlocke ', req.params.id);
  res.send({ status: 200 });
});

app.post('/nuzlocke', async (req, res, next) => {

});

app.get('/nuzlockes', async (req, res, next) => {

});


app.listen(PORT, () => {
  logger.info(`Running server on http://localhost:${PORT} 🚀`);
});