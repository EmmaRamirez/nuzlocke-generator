import * as fs from "fs";
import * as process from "process";

console.log(`
        This function is for interal use only.
        Don't use it if you don't know what you're doing!
        Press Ctrl + C to exit.
`);

const onFileReadFunction = (filepath): string => {
    return `${filepath}-scarf.png`;
};

const targetDir = process.argv[2]
    ? process.argv[2]
    : "./src/assets/icons/scarf/";
const __onFileRead__ = process.argv[3] ? process.argv[3] : onFileReadFunction;

function readFiles(dirname: string, onFileRead: any = __onFileRead__) {
    fs.readdir(dirname, (err, filenames) => {
        if (err) throw err;
        filenames.forEach((filename) => {
            const __path__ = dirname + filename;
            fs.readFile(__path__, "utf-8", (err, _) => {
                if (err) throw err;
                const pathStart = filename.split(".")[0];
                if (pathStart === "") throw err;
                fs.rename(
                    __path__,
                    onFileReadFunction(dirname + pathStart),
                    (err) => {
                        if (err) throw err;
                        console.log(
                            `Renamed ${filename} to ${onFileReadFunction(dirname + pathStart)}`,
                        );
                    },
                );
            });
        });
    });
}

setTimeout(() => readFiles(targetDir), 3000);
