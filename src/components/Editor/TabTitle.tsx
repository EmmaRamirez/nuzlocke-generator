import * as React from 'react';

export const TabTitle = ({ title, onChange }: { title: string; onChange?: Function }) => (
    <div
        contentEditable
        suppressContentEditableWarning={true}
        onChange={e => (onChange != null ? onChange(e) : null)}
        className='tab-title'
        style={{ height: '42px', padding: '.5rem', textAlign: 'center', fontWeight: 'bold' }}>
        {title}
    </div>
);
