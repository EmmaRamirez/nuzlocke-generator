const request = require('request');

const auth = { user: 'user-id', pass: 'api-key' };

function getImage(html, css) {
    const data = { html: html, css: css };
    request.post(
        { url: 'https://hcti.io/v1/image', form: data, auth: auth },
        (err, httpResponse, body) => {
            return body;
        },
    );
}
