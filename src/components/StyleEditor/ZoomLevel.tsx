import * as React from 'react';
import { Button, ButtonGroup, Slider } from '@blueprintjs/core';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'state';
import { editStyle } from 'actions';

export interface ZoomLevelProps {
}

export function ZoomLevel ({}: ZoomLevelProps) {
    const style = useSelector<State, State['style']>(state => state.style);
    const dispatch = useDispatch();

    const setZoomLevel = (zoomLevel: number) => dispatch(editStyle({ zoomLevel }));

    return (
        <div className="style-edit">
            <ButtonGroup>
                <Button
                    icon="zoom-out"
                    onClick={() => {
                        const newZoomLevel =
                            style.zoomLevel - 0.1 <= 0 ? 0 : style.zoomLevel - 0.1;
                        setZoomLevel(newZoomLevel);
                    }}
                />
                {' '}
                <Button style={{ padding: '0 1.25rem' }}>
                    <Slider
                        onRelease={(value) =>
                            setZoomLevel(value)
                        }
                        onChange={(value) =>
                            setZoomLevel(value)
                        }
                        value={style.zoomLevel}
                        min={0.2}
                        max={2}
                        stepSize={0.1}
                    />
                </Button>
                <Button
                    icon="zoom-in"
                    onClick={() => {
                        const newZoomLevel =
                            style.zoomLevel + 0.1 >= 2 ? 2 : style.zoomLevel + 0.1;
                        setZoomLevel(newZoomLevel);
                    }}
                />
            </ButtonGroup>
        </div>
    );
}
