import * as React from 'react';

export const TabTitle = ({ title, onInput }: { title: string; onInput?: Function }) => (
    <div
        contentEditable
        suppressContentEditableWarning={true}
        onInput={e => (onInput != null ? onInput(e) : null)}
        className='tab-title'
        style={{ height: '42px', padding: '.5rem', textAlign: 'center', fontWeight: 'bold' }}>
        {title}
    </div>
);
