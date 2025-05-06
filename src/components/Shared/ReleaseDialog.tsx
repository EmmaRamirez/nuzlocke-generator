/// <reference types="vite/client" />
import * as React from 'react';
import { Dialog, Classes, Button, DialogProps } from '@blueprintjs/core';
import { css, cx } from 'emotion';
import * as styles from 'components/Result/styles';
import { Styles, classWithDarkTheme, getPatchlessVersion } from 'utils';
import ReactMarkdown from 'react-markdown';
import useSwr from 'swr';

const calyrex = './assets/icons/pokemon/regular/calyrex.png';
const croagunk = './assets/img/croagunk.gif';
const dugtrio = './assets/icons/pokemon/regular/dugtrio.png';
const kubfu = './assets/icons/pokemon/regular/kubfu.png';
const lapras = './assets/icons/pokemon/regular/lapras.png';
const magneton = './assets/icons/pokemon/regular/magneton.png';
const mew = './assets/icons/pokemon/regular/mew.png';
const noctowl = './assets/icons/pokemon/regular/noctowl.png';
const porygon = './assets/icons/pokemon/regular/porygon.png';
const porygon2 = './assets/icons/pokemon/regular/porygon2.png';
const togepi = './assets/icons/pokemon/regular/togepi.png';
const arceus = './assets/icons/pokemon/regular/arceus.png';
const sprigatito = './assets/icons/pokemon/regular/sprigatito.png';
const fuecoco = './assets/icons/pokemon/regular/fuecoco.png';
const quaxly = './assets/icons/pokemon/regular/quaxly.png';
const miraidon = './assets/icons/pokemon/regular/miraidon.png';
const koraidon = './assets/icons/pokemon/regular/koraidon.png';
const terapagos = './assets/icons/pokemon/regular/terapagos.png';

export const getMascot = v => {
    switch (v) {
        case '1.16':
            return terapagos;
        case '1.15':
            return koraidon;
        case '1.14':
            return miraidon;
        case '1.13':
            return quaxly;
        case '1.12':
            return fuecoco;
        case '1.11':
            return sprigatito;
        case '1.10':
            return arceus;
        case '1.9':
            return togepi;
        case '1.8':
            return porygon2;
        case '1.7':
            return lapras;
        case '1.6':
            return magneton;
        case '1.5':
            return noctowl;
        case '1.4':
            return calyrex;
        case '1.3':
            return dugtrio;
        case '1.2':
            return kubfu;
        case '1.1':
            return porygon;
        case '1.0':
            return mew;
        default:
            return croagunk;
    };
};

const mascot = css`
    display: inline-block;
`;

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json());

export interface ReleaseDialogProps {
    onClose: (e?: React.SyntheticEvent) => void;
    style: Styles;
}

export interface ReleaseNote {
    id: number;
    version: string;
    note: string;
}

export function ReleaseDialog (props: DialogProps & ReleaseDialogProps) {
    const [seePrevious, setSeePrevious] = React.useState(false);
    const { data, error } = useSwr('/release/latest', fetcher);
    const { data: allNotesData, error: allNotesError } = useSwr('/release/all', fetcher);

    React.useEffect(() => console.log(data), [data]);

    // @TODO: figure out these states
    if (error || allNotesError) return null;
    if (!data || !allNotesData) return null;

    const note = data.payload.notes[0];
    const { version } = note;

    const allNotes = allNotesData.payload.notes;


    return (
        <Dialog
            isOpen={props.isOpen}
            onClose={props.onClose}
            icon="document"
            title={`Release Notes ${version}`}
            className={`release-dialog ${
                props.style.editorDarkMode ? Classes.DARK : ''
            }`}>
            <div className={Classes.DIALOG_BODY}>
                <div className="release-notes-wrapper">
                    <h3
                        className={cx(
                            classWithDarkTheme(
                                styles,
                                'heading',
                                props.style.editorDarkMode,
                            ),
                        )}>
                        {version}{' '}
                        <img className={mascot} alt="mascot" src={getMascot(getPatchlessVersion(version))} />
                    </h3>
                    {data && <ReactMarkdown
                        className="release-notes"
                     
                    >{note.note}</ReactMarkdown>}
                    {error && <div>There was an error retrieving release notes.</div>}
                    <Button
                        onClick={() => setSeePrevious(!seePrevious)}
                        icon={seePrevious ? 'symbol-triangle-up' : 'symbol-triangle-down'}>
                        Previous Release Notes
                    </Button>
                    {seePrevious &&
                        allNotes.map((note) => {
                            const source = `#### ![${mascot}](${getMascot(getPatchlessVersion(note.version))}) ${note.version}\n${note.note}\n\n_Uploaded on ${new Date(note.timestamp).toLocaleString()}_`;
                            return (
                                <ReactMarkdown
                                    key={note.id}
                                    className="release-notes"
                                >{source}</ReactMarkdown>
                            );
                        })}
                </div>
            </div>
        </Dialog>
    );
}
