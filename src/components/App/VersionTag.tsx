import * as React from 'react';

import { Button } from '@blueprintjs/core';

export const VersionTag = ({ version }) => {
    return <Button style={{
        border: '1px solid #ddd',
        position: 'absolute',
        top: '2px',
        right: '6px'
    }} className='pt-minimal version-tag'>{ version }</Button>;
};