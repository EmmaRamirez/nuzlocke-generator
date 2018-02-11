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

const handleDeletion = (badges, e) => {
    badges.delete(e.target.label);
    return badges;
};

export class BadgeInputBase extends React.Component<BadgeInputProps, { badges: Set<string> }> {
    constructor(props) {
        super(props);
        this.state = {
            badges: new Set([])
        };
    }
    public render() {
        return <TrainerInfoEditField
            label='Checkpoints (Badges)'
            name='badges'
            placeholder='...'
            value={null}
            onChange={null}
            element={inputProps =>
                <Popover content={<Menu>
                    {
                        getBadges(this.props.game.name)
                            .map(badge => <Checkbox onChange={(e:any) => {
                                this.setState({
                                    badges: this.state.badges.has(e.target.label) ? handleDeletion(this.state.badges, e) : this.state.badges.add(e.target.label)
                                }, () => {
                                    this.props.editTrainer({ badges: Array.from(this.state.badges) });
                                });
                            }} checked={this.props.trainer && this.props.trainer.badges && this.props.trainer.badges.includes(badge)} key={badge} label={badge} />)
                    }
                </Menu>} position={Position.BOTTOM}>
                    <Button>Select Badges</Button>
                </Popover>
            }
        />;
    }
}

export const BadgeInput = connect(
    (state:any) => ({
        trainer: state.trainer,
        game: state.game
    }),
    {
        editTrainer
    }
)(BadgeInputBase);