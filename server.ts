const express = require('express');
const app = express();
require('dotenv').config()
// @ts-expect-error
const fetch = require('node-fetch');
const GH_URL = 'https://api.github.com/repos/EmmaRamirez/nuzlocke-generator/issues';
const GH_ACCESS_TOKEN = process.env.GH_ACCESS_TOKEN;

const cors = require('cors');

app.use(express.json({ limit: '50mb' }));
app.use(cors());
interface ReportArgs {
  title?: string;
  report?: string;
  data?: string;
}

const PORT = 3000;

app.get('/', async (req, res, next) => {
  res.send('Hemlo :]');
  next();
  //app.use(express.static(path.join(__dirname, 'dist')))
});


app.post('/report', async (req, res, next) => {
  console.log(req.body);
  const { report, title, data } = req.body as ReportArgs;
  console.log(report, title, data);

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
    console.info(`[/report] Successfully called at ${new Date().toUTCString()}`);
  }
  res.send({ status: githubCall.status });
  next();
});

app.get('/nuzlocke/:id', async (req, res, next) => {

});

app.post('/nuzlocke', async (req, res, next) => {

});

app.get('/nuzlockes', async (req, res, next) => {

});


app.listen(PORT, () => {
  console.log(`
    🚀 Running server on http://localhost:${PORT} 🚀
  `);
})