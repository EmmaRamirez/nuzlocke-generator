import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TrainerInfoEditField } from 'components/TrainerEditor/TrainerInfoEditField';
import { editTrainer } from 'actions';

import { Popover, Menu, Button, Position, Checkbox, Dialog, Classes } from '@blueprintjs/core';
import { CheckpointsEditor } from './CheckpointsEditor';
import { cx } from 'emotion';
import { State } from 'state';
import { Checkpoints } from 'reducers/checkpoints';

export interface BadgeInputProps {
    checkpointsCleared?: Checkpoints;
    onChange?: (checkpoint: Checkpoints) => void;
}

export function BadgeInput ({
    onChange,
    checkpointsCleared,
}: BadgeInputProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const checkpoints = useSelector<State, State['checkpoints']>(state => state.checkpoints);
    const trainer = useSelector<State, State['trainer']>(state => state.trainer);
    const style = useSelector<State, State['style']>(state => state.style);
    const onChangeInternal = (badges: Checkpoints) => dispatch(editTrainer({ badges }));
    const onChangeUseable = onChange ?? onChangeInternal;
    const dispatch = useDispatch();

    const toggle = () => setIsOpen(!isOpen);

    const checkpointsObtained = checkpointsCleared ?? trainer.badges ?? [];
    return (
        <>
            <Dialog
                isOpen={isOpen}
                onClose={toggle}
                className={cx(Classes.DIALOG, {
                    [Classes.DARK]: style.editorDarkMode,
                })}
                canOutsideClickClose={false}
                title="Checkpoints Editor"
                icon="badge"
                style={{ width: '46rem' }}>
                <div className={Classes.DIALOG_BODY}>
                    <CheckpointsEditor checkpoints={checkpoints} />
                </div>
            </Dialog>
            <TrainerInfoEditField
                data-testid='badge-input'
                label="Checkpoints"
                name="badges"
                placeholder="..."
                value={''}
                onChange={null}
                element={(inputProps) => (
                    <div>
                        <Popover
                            minimal={true}
                            content={
                                <Menu>
                                    {checkpoints.map((badge) => (
                                        <Checkbox
                                            onChange={(e: any) => {
                                                if (
                                                    !e.target.checked ||
                                                    checkpointsObtained.some((b) => b.name === badge.name)
                                                ) {
                                                    const badges = checkpointsObtained.filter(
                                                        (b) => b.name !== badge.name,
                                                    );
                                                    onChangeUseable(badges);
                                                } else {
                                                    const badges = [...checkpointsObtained, badge];
                                                    onChangeUseable(badges);
                                                }
                                            }}
                                            checked={checkpointsObtained.some(
                                                (b) => b.name === badge.name,
                                            )}
                                            key={badge.name}
                                            label={badge.name}
                                        />
                                    ))}
                                    <Button onClick={toggle} minimal>
                                        Customize Checkpoints
                                    </Button>
                                </Menu>
                            }
                            position={Position.BOTTOM}>
                            <Button
                                fill
                                style={{
                                    borderRadius: 0,
                                }}>
                                Select Checkpoints
                            </Button>
                        </Popover>
                        <Button onClick={() => {}} icon={'lock'} />
                    </div>
                )}
            />
        </>
    );
}
