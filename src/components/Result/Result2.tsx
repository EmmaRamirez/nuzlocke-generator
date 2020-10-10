import * as React from 'react';
import { TeamPokemon } from 'components/TeamPokemon';
import { css } from 'emotion';
import { Box } from 'models';

const getAllByStatus = (boxes: Box[], status: string) => {
    return boxes.filter(box => {
        return box.name.toLowerCase() === status.toLowerCase() ||
            box?.inheritFrom?.toLowerCase() === status.toLowerCase();
    });
};

export enum DownloadStatus {
    dormant = 'dormant',
    active = 'active',
    error = 'error',
    done = 'done',
}

export function DownloadableWrapper() {

}

export function Result() {
    const [downloadStatus, setDownloadStatus] = React.useState(DownloadStatus.dormant);
    const [scale, setScale] = React.useState(1);
    const [srollY, setScrollY] = React.useState(0);

    const scrollToScale = (event) => {
        console.log(
            scrollY - window.scrollY
        );
        setScrollY(window.scrollY);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', scrollToScale);
        return window.removeEventListener('scroll', scrollToScale);
    });

    return <div style={{
        padding: '2rem',
        background: '#000',
        color: '#eee',
        maxHeight: '10rem',
        minWidth: '10rem',
    }}>
        {downloadStatus}
    </div>;
}
