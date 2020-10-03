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
    game: { name: Game; customName: string };
    style: Styles;
    rules: string[];
}

export interface TrainerColumnItemProps {
    trainer: Trainer;
    prop: string;
    orientation: OrientationType;
}

export const TrainerColumnItem = ({ trainer, prop, orientation }: TrainerColumnItemProps) => {
    const isVertical = orientation === 'vertical';
    const bottomTextStyle: React.CSSProperties = {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        padding: '2px',
    };
    const baseDivStyle = isVertical ? { padding: '2px' } : { padding: '.25rem' };

    return !isEmpty(trainer[prop]) ? (
        <div style={baseDivStyle} className={`${prop} column`}>
            <div style={baseDivStyle}>{prop}</div>
            <div style={bottomTextStyle}>{trainer[prop]}</div>
        </div>
    ) : null;
};

export class TrainerResultBase extends React.Component<TrainerResultProps> {
    private isSWSH() {
        const { name } = this.props.game;
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
            { bottom: 0, right: 0 },
            { right: '-9px', top: '2px', height: '24px' },
            { bottom: '11px', left: '20px' },
            { bottom: '2px', left: '9px' },
            { bottom: '3px', left: '28.5px', height: '33px' },
            { top: '-3px', left: '23px' },
            { left: '14px', top: '5px', height: '25px' },
            { left: '3px', top: '2px', height: '32px' },
        ];

        return checkpoints.map((badge, index) => {
            return (
                <React.Fragment key={badge.name}>
                    <img
                        className={
                            trainerBadges.some((b) => b.name === badge.name)
                                ? 'obtained'
                                : 'not-obtained'
                        }
                        style={
                            this.isSWSH() && !trainer.hasEditedCheckpoints
                                ? { position: 'absolute', ...swshPositions[index] }
                                : { height: '1rem' }
                        }
                        key={badge.name}
                        alt={badge.name}
                        src={
                            badge.image.startsWith('http')
                                ? badge.image
                                : `./img/checkpoints/${badge.image}.png`
                        }
                    />
                    {badge.name === 'Rising Badge' ? <br /> : null}
                </React.Fragment>
            );
        });
    }

    private getBadgeWrapperStyles(orientation) {
        const { trainer } = this.props;
        let style = {};
        if (this.isSWSH() && !trainer.hasEditedCheckpoints) {
            style = { height: '3rem', width: '3rem', position: 'relative', padding: '.25rem' };
        }
        if (orientation === 'vertical') {
            style = { ...style, margin: '0', padding: '.25rem' };
        }
        if (!this.isSWSH() && orientation === 'vertical') {
            style = { ...style, width: '100%' };
        }
        return style;
    }

    public render() {
        const { trainer, game, style, orientation } = this.props;
        const isVertical = orientation === 'vertical';
        const baseDivStyle = isVertical ? { padding: '2px' } : { padding: '.25rem' };
        const tciProps = { trainer, orientation };

        return (
            <div
                className="trainer-wrapper"
                style={
                    orientation === 'vertical'
                        ? {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                        }
                        : {}
                }>
                <div
                    className="trainer-game-badge"
                    style={{
                        color: getContrastColor(style.bgColor),
                        background: style.bgColor,
                        margin: isVertical ? '4px' : '0',
                        marginRight: isVertical ? '0' : '.5rem',
                        marginLeft: isVertical ? '0' : '.5rem',
                        minWidth: '100px',
                        borderRadius: '.25rem',
                        textAlign: 'center',
                        padding: '2px',
                    }}>
                    {game.customName || game.name}
                </div>
                {trainer.image ? (
                    <img
                        className="trainer-image"
                        src={mapTrainerImage(trainer.image)}
                        alt="Trainer Image"
                    />
                ) : null}
                {trainer.title ? (
                    <div style={baseDivStyle} className="nuzlocke-title">
                        {this.props.trainer.title}
                    </div>
                ) : (
                    <div style={baseDivStyle} className="nuzlocke-title">
                        {this.props.game.name} Nuzlocke
                    </div>
                )}
                {['name', 'money', 'time', 'id', 'totalTime'].map(item => (<TrainerColumnItem key={item} prop={item} {...tciProps} />))}
                <div className="badge-wrapper" style={this.getBadgeWrapperStyles(orientation)}>
                    {this.renderBadgesOrTrials()}
                </div>
                {style.displayRules && style.displayRulesLocation === 'inside trainer section' ? (
                    <div style={{ marginTop: '1rem' }} className="rules-container">
                        <h3>Rules</h3>
                        <ol style={{ paddingLeft: '20px', textAlign: 'left' }}>
                            {this.props.rules.map((rule, index) => {
                                return <li key={index}>{rule}</li>;
                            })}
                        </ol>
                    </div>
                ) : null}
            </div>
        );
    }
}

export const TrainerResult = connect((state: Pick<State, keyof State>) => ({
    checkpoints: state.checkpoints,
    style: state.style,
    trainer: state.trainer,
    game: state.game,
    rules: state.rules,
}))(TrainerResultBase);
