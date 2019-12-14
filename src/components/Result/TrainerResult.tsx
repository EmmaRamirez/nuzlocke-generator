import * as React from 'react';
import {
    OrientationType,
    mapTrainerImage,
    Game,
    Styles,
    getContrastColor,
    getBadges,
    isEmpty,
} from 'utils';
import { connect } from 'react-redux';
import { Trainer, Badge } from 'models';
import { State } from 'state';
import { Checkpoints } from 'reducers/checkpoints';

export interface TrainerResultProps {
    orientation: OrientationType;

    checkpoints: Checkpoints;
    trainer: Trainer;
    game: { name: Game };
    style: Styles;
}

export class TrainerResultBase extends React.Component<TrainerResultProps> {

    private isSWSH() {
        const {name} = this.props.game;
        return name === 'Sword' || name === 'Shield';
    }

    private renderBadgesOrTrials() {
        const { checkpoints, style, trainer } = this.props;
        const { name } = this.props.game;
        const trainerBadges = trainer.badges ? trainer.badges : [];

        if (!style.displayBadges) {
            return null;
        }

        const swshPositions = [
            {bottom: 0, right: 0},
            {right: '-9px', top: '2px', height: '24px'},
            {bottom: '11px', left: '20px'},
            {bottom: '2px', left: '9px'},
            {bottom: '3px', left: '28.5px', height: '33px'},
            {top: '-3px', left: '23px'},
            {left: '14px', top: '5px', height: '25px'},
            {left: '3px', top: '2px', height: '32px'},
        ];

        return checkpoints.map((badge, index) => {
            return (
                <img
                    className={trainerBadges.some(b => b.name === badge.name) ? 'obtained' : 'not-obtained'}
                    style={this.isSWSH() && !trainer.hasEditedCheckpoints ? {position: 'absolute', ...swshPositions[index]} : {}}
                    key={badge.name}
                    alt={badge.name}
                    src={`./img/checkpoints/${badge.image}.png`}
                />
            );
        });
    }

    private getBadgeWrapperStyles(orientation) {
        const {trainer} = this.props;
        let style = {};
        if (this.isSWSH() && !trainer.hasEditedCheckpoints) {
            style = {height: '3rem', width: '3rem', position: 'relative', padding: '.25rem'};
        }
        if (orientation === 'vertical') {
            style = {...style, margin: '0', padding: '.25rem'};
        }
        return style;
    }

    public render() {
        const { trainer, game, style, orientation } = this.props;
        const isVertical = orientation === 'vertical';
        const bottomTextStyle: React.CSSProperties = { fontSize: '1.1rem', fontWeight: 'bold', padding: '2px', };
        const baseDivStyle = isVertical ? {padding: '2px'} : {padding: '.25rem'};
        return (
            <div className='trainer-wrapper' style={orientation === 'vertical' ? {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            } : {}}>
                <div
                    style={{
                        color: getContrastColor(style.bgColor),
                        background: style.bgColor,
                        margin: isVertical ? '4px' : '0',
                        marginRight: isVertical ? '0' : '.5rem',
                        width: '100px',
                        borderRadius: '.25rem',
                        textAlign: 'center',
                        padding: '2px',
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
                    <div style={baseDivStyle} className='nuzlocke-title'>{this.props.trainer.title}</div>
                ) : (
                    <div style={baseDivStyle} className='nuzlocke-title'>{this.props.game.name} Nuzlocke</div>
                )}
                {isEmpty(trainer.name) ? null : (
                    <div style={baseDivStyle} className='name column'>
                        <div style={baseDivStyle}>name</div>
                        <div style={bottomTextStyle}>{trainer.name}</div>
                    </div>
                )}
                {isEmpty(trainer.money) ? null : (
                    <div style={baseDivStyle} className='money column'>
                        <div style={baseDivStyle}>money</div>
                        <div style={bottomTextStyle}>{trainer.money}</div>
                    </div>
                )}
                {isEmpty(trainer.time) ? null : (
                    <div style={baseDivStyle} className='time column'>
                        <div style={baseDivStyle}>time</div>
                        <div style={bottomTextStyle}>{trainer.time}</div>
                    </div>
                )}
                {isEmpty(trainer.id) ? null : (
                    <div style={baseDivStyle} className='id column'>
                        <div style={baseDivStyle}>ID</div>
                        <div style={bottomTextStyle}>{trainer.id}</div>
                    </div>
                )}
                {isEmpty(trainer.totalTime) ? null : (
                    <div style={baseDivStyle} className='time column'>
                        <div style={baseDivStyle}>time</div>
                        <div style={bottomTextStyle}>{trainer.totalTime}</div>
                    </div>
                )}
                <div className='badge-wrapper' style={this.getBadgeWrapperStyles(orientation)}>{this.renderBadgesOrTrials()}</div>
            </div>
        );
    }
}

export const TrainerResult = connect((state: Pick<State, keyof State>) => ({
    checkpoints: state.checkpoints,
    style: state.style,
    trainer: state.trainer,
    game: state.game,
}))(TrainerResultBase);
