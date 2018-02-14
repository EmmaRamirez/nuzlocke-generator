import * as React from 'react';
import { connect } from 'react-redux';

import { getBadges } from 'utils';
import { TrainerInfoEditField } from './TrainerInfoEditField';
import { editTrainer } from 'actions';
import { Trainer } from 'models';

import { Popover, Menu, Button, Position, Checkbox } from '@blueprintjs/core';

export interface BadgeInputProps {
    trainer: Trainer;
    game: any;
    editTrainer: any;
}

const handleDeletion = (badges, badge) => {
    badges.delete(badge);
    return badges;
};

export class BadgeInputBase extends React.Component<BadgeInputProps, { badges: Set<string> }> {
    constructor(props) {
        super(props);
        this.state = {
            badges: new Set([]),
        };
    }
    public componentWillMount() {
        this.setState({ badges: new Set(this.props.trainer.badges)  });
    }
    public render() {
        return (
            <TrainerInfoEditField
                label='Checkpoints (Badges)'
                name='badges'
                placeholder='...'
                value={null}
                onChange={null}
                element={inputProps => (
                    <Popover
                        minimal={true}
                        content={
                            <Menu>
                                {getBadges(this.props.game.name).map(badge => (
                                    <Checkbox
                                        onChange={(e: any) => {
                                            this.setState(
                                                {
                                                    badges: this.state.badges.has(badge)
                                                        ? handleDeletion(this.state.badges, badge)
                                                        : this.state.badges.add(badge),
                                                },
                                                () => {
                                                    this.props.editTrainer({
                                                        badges: Array.from(this.state.badges),
                                                    });
                                                },
                                            );
                                        }}
                                        checked={
                                            this.props.trainer &&
                                            this.props.trainer.badges &&
                                            this.props.trainer.badges.includes(badge)
                                        }
                                        key={badge}
                                        label={badge}
                                    />
                                ))}
                            </Menu>
                        }
                        position={Position.BOTTOM}>
                        <Button>Select Checkpoints</Button>
                    </Popover>
                )}
            />
        );
    }
}

export const BadgeInput = connect(
    (state: any) => ({
        trainer: state.trainer,
        game: state.game,
    }),
    {
        editTrainer,
    },
)(BadgeInputBase);
