import * as React from 'react';
import { Dialog, Classes, Button, DialogProps } from '@blueprintjs/core';
import { css, cx } from 'emotion';
import * as styles from 'components/Result/styles';
import { Styles, classWithDarkTheme, getPatchlessVersion } from 'utils';
import ReactMarkdown from 'react-markdown';
import useSwr from 'swr';

// import calyrex from 'src/assets/icons/pokemon/regular/calyrex.png';
// import croagunk from 'src/assets/img/croagunk.gif';
// import dugtrio from 'src/assets/icons/pokemon/regular/dugtrio.png';
// import kubfu from 'src/assets/icons/pokemon/regular/kubfu.png';
// import lapras from 'src/assets/icons/pokemon/regular/lapras.png';
// import magneton from 'src/assets/icons/pokemon/regular/magneton.png';
// import mew from 'src/assets/icons/pokemon/regular/mew.png';
// import noctowl from 'src/assets/icons/pokemon/regular/noctowl.png';
// import porygon from 'src/assets/icons/pokemon/regular/porygon.png';
// import porygon2 from 'src/assets/icons/pokemon/regular/porygon2.png';
// import togepi from 'src/assets/icons/pokemon/regular/togepi.png';
// import arceus from 'src/assets/icons/pokemon/regular/arceus.png';
// import sprigatito from 'src/assets/icons/pokemon/regular/sprigatito.png';
// import fuecoco from 'src/assets/icons/pokemon/regular/fuecoco.png';
// import quaxly from 'src/assets/icons/pokemon/regular/quaxly.png';
// import miraidon from 'src/assets/icons/pokemon/regular/miraidon.png';
// import koraidon from 'src/assets/icons/pokemon/regular/koraidon.png';
// import terapagos from 'src/assets/icons/pokemon/regular/terapagos.png';

const calyrex = { default: 'src/assets/icons/pokemon/regular/calyrex.png' };
const croagunk = { default: 'src/assets/img/croagunk.gif' };
const dugtrio = { default: 'src/assets/icons/pokemon/regular/dugtrio.png' };
const kubfu = { default: 'src/assets/icons/pokemon/regular/kubfu.png' };
const lapras = { default: 'src/assets/icons/pokemon/regular/lapras.png' };
const magneton = { default: 'src/assets/icons/pokemon/regular/magneton.png' };
const mew = { default: 'src/assets/icons/pokemon/regular/mew.png' };
const noctowl = { default: 'src/assets/icons/pokemon/regular/noctowl.png' };
const porygon = { default: 'src/assets/icons/pokemon/regular/porygon.png' };
const porygon2 = { default: 'src/assets/icons/pokemon/regular/porygon2.png' };
const togepi = { default: 'src/assets/icons/pokemon/regular/togepi.png' };
const arceus = { default: 'src/assets/icons/pokemon/regular/arceus.png' };
const sprigatito = { default: 'src/assets/icons/pokemon/regular/sprigatito.png' };
const fuecoco = { default: 'src/assets/icons/pokemon/regular/fuecoco.png' };
const quaxly = { default: 'src/assets/icons/pokemon/regular/quaxly.png' };
const miraidon = { default: 'src/assets/icons/pokemon/regular/miraidon.png' };
const koraidon = { default: 'src/assets/icons/pokemon/regular/koraidon.png' };
const terapagos = { default: 'src/assets/icons/pokemon/regular/terapagos.png' };


export const getMascot = v => {
    switch (v) {
        case '1.16':
            return terapagos.default;
        case '1.15':
            return koraidon.default;
        case '1.14':
            return miraidon.default;
        case '1.13':
            return quaxly.default;
        case '1.12':
            return fuecoco.default;
        case '1.11':
            return sprigatito.default;
        case '1.10':
            return arceus.default;
        case '1.9':
            return togepi.default;
        case '1.8':
            return porygon2.default;
        case '1.7':
            return lapras.default;
        case '1.6':
            return magneton.default;
        case '1.5':
            return noctowl.default;
        case '1.4':
            return calyrex.default;
        case '1.3':
            return dugtrio.default;
        case '1.2':
            return kubfu.default;
        case '1.1':
            return porygon.default;
        case '1.0':
            return mew.default;
        default:
            return croagunk.default;
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
                        source={note.note}
                    />}
                    {error && <div>There was an error retrieving release notes.</div>}
                    <Button
                        onClick={() => setSeePrevious(!seePrevious)}
                        icon={seePrevious ? 'symbol-triangle-up' : 'symbol-triangle-down'}>
                        Previous Relase Notes
                    </Button>
                    {seePrevious &&
                        allNotes.map((note) => {
                            return (
                                <ReactMarkdown
                                    key={note.id}
                                    className="release-notes"
                                    source={`#### ![${mascot}](${getMascot(getPatchlessVersion(note.version))}) ${note.version}\n${note.note}\n\n_Uploaded on ${new Date(note.timestamp).toLocaleString()}_`}
                                />
                            );
                        })}
                </div>
            </div>
        </Dialog>
    );
}
