import * as fs from 'fs';

const targetDir = './src/assets/icons/berry/';

function readFiles (dirname: string, onFileRead?: Function) {
    fs.readdir(dirname, (err, filenames) => {
        if (err) throw err;
        filenames.forEach(filename => {
            const __path__ = dirname + filename;
            fs.readFile(__path__, 'utf-8', (err, _) => {
                if (err) throw err;
                const pathStart = __path__.split('.')[0];
                fs.rename(__path__, `${pathStart}-berry.png`, err => {
                    if (err) throw err;
                    console.log(`Renamed ${__path__} to ${pathStart}-berry.png`);
                });
            });
        });
    });
}

readFiles(targetDir);