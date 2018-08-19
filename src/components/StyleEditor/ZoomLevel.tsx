import * as React from 'react';
import { Button, ButtonGroup, Slider } from '@blueprintjs/core';

export interface ZoomLevelProps {
    style: any;
    editEvent: Function;
}

export class ZoomLevel extends React.Component<ZoomLevelProps> {
    public render () {
        const { style, editEvent } = this.props;
        return (
            <div className='style-edit'>
                <label className='pt-label pt-inline'>Zoom Level</label>
                <div>
                    <ButtonGroup>
                        <Button
                            icon='zoom-out'
                            onClick={e => {
                                const newZoomLevel =
                                    style.zoomLevel - 0.1 <= 0
                                        ? 0
                                        : style.zoomLevel - 0.1;
                                editEvent({ target: { value: newZoomLevel } }, null, 'zoomLevel');
                            }}
                        />
=                        <Button style={{ padding: '0 1.25rem' }}>
                            <Slider
                                onChange={value =>
                                    editEvent({ target: { value } }, null, 'zoomLevel')
                                }
                                value={style.zoomLevel}
                                min={0.2}
                                max={2}
                                stepSize={0.1}
                            />
                        </Button>
                        <Button
                            icon='zoom-in'
                            onClick={e => {
                                const newZoomLevel =
                                    style.zoomLevel + 0.1 >= 2
                                        ? 2
                                        : style.zoomLevel + 0.1;
                                editEvent({ target: { value: newZoomLevel } }, null, 'zoomLevel');
                            }}
                        />
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}