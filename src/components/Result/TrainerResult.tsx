import * as React from 'react';
import { OrientationType, mapTrainerImage, Game, Styles, getContrastColor, getBadges, isEmpty } from 'utils';
import { connect } from 'react-redux';
import { reducers } from 'reducers';
import { Trainer, Badge } from 'models';

export interface TrainerResultProps {
    orientation: OrientationType;

    trainer: Trainer;
    game: { name: Game };
    style: Styles;
}

const has = (badges: Badge[] | undefined, badge: Badge) => {
    if (badges) {
        return badges.some(b => b.name === badge.name);
    }
    return false;
};

export class TrainerResultBase extends React.Component<TrainerResultProps> {
    private renderBadgesOrTrials() {
        const { name } = this.props.game;

        if (!this.props.style.displayBadges) {
            return null;
        }

        return getBadges(name).map((badge) => {
            return (
                <img
                    className={
                        has(this.props.trainer.badges, badge)
                            ? 'obtained'
                            : 'not-obtained'
                    }
                    key={badge.name}
                    alt={badge.name}
                    src={`./img/checkpoints/${badge.image}.png`}
                />
            );
        });
    }

    public render() {
        const { trainer, game, style } = this.props;
        const bottomTextStyle: any = { fontSize: '1.1rem', fontWeight: 'bold' };
        return (
            <div className='trainer-wrapper'>
                <div
                    style={{
                        color: getContrastColor(style.bgColor),
                        background: style.bgColor,
                        marginRight: '.5rem',
                        width: '100px',
                        borderRadius: '.25rem',
                        textAlign: 'center',
                    }}>
                    {game.name}
                </div>
                {trainer.image ? (
                    <img
                        className='trainer-image'
                        src={mapTrainerImage(trainer.image)}
                        alt='Trainer Image'
                    />
                ) : null}
                {trainer.title ? (
                    <div className='nuzlocke-title'>{this.props.trainer.title}</div>
                ) : (
                    <div className='nuzlocke-title'>{this.props.game.name} Nuzlocke</div>
                )}
                {isEmpty(trainer.name) ? null : (
                    <div className='name column'>
                        <div>name</div>
                        <div style={bottomTextStyle}>{trainer.name}</div>
                    </div>
                )}
                {isEmpty(trainer.money) ? null : (
                    <div className='money column'>
                        <div>money</div>
                        <div style={bottomTextStyle}>{trainer.money}</div>
                    </div>
                )}
                {isEmpty(trainer.time) ? null : (
                    <div className='time column'>
                        <div>time</div>
                        <div style={bottomTextStyle}>{trainer.time}</div>
                    </div>
                )}
                {isEmpty(trainer.id) ? null : (
                    <div className='id column'>
                        <div>ID</div>
                        <div style={bottomTextStyle}>{trainer.id}</div>
                    </div>
                )}
                {isEmpty(trainer.totalTime) ? null : (
                    <div className='time column'>
                        <div>time</div>
                        <div style={bottomTextStyle}>{trainer.totalTime}</div>
                    </div>
                )}
                <div className='badge-wrapper'>{this.renderBadgesOrTrials()}</div>
            </div>
        );
    }
}

export const TrainerResult = connect(
    (state: any) => ({
        style: state.style,
        trainer: state.trainer,
        game: state.game,
    }),
    null
)(TrainerResultBase as any);