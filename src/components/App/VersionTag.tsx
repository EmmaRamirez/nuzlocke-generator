import * as React from 'react';

import { Button } from '@blueprintjs/core';

export const VersionTag = ({ version, onClick, darkMode }) => {
    return (
        <Button
            onClick={onClick}
            style={{
                border: '1px solid #ddd',
                color: darkMode ? '#fff' : '#111',
                position: 'absolute',
                top: '2px',
                right: '6px',
            }}
            className='pt-minimal version-tag'>
            {version}
        </Button>
    );
};
