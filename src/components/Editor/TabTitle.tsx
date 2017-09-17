import * as React from 'react';

export const TabTitle = ({ title, onInput }: { title: string }) => <div contentEditable suppressContentEditableWarning={true} onInput={(e) => onInput(e) } className='tab-title' style={{ height: '48px', padding: '.5rem', textAlign: 'center', fontWeight: 'bold' }}>{title}</div>;