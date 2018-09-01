import * as React from 'react';

import { PokemonIcon } from 'components/PokemonIcon';
import { gameOfOriginToColor, Game, getPokemonImage, Styles } from 'utils';
import { Pokemon } from 'models';
import { GenderElement, GenderElementProps } from '../Shared';
import { css, cx } from 'emotion';

export const champsPokemon = (options) => css`
    height: ${options.height};
    width: ${options.width};
    margin: ${options.margin};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${options.background};
    padding: ${options.padding};
    cursor: pointer;
`;

export type ChampsPokemonProps = {
    [P in keyof Pokemon]?: any;
} & {
    showNickname?: boolean;
    showGender?: boolean;
    showLevel?: boolean;
    useSprites?: boolean;
};

export class ChampsPokemon extends React.Component<ChampsPokemonProps> {
    constructor(props) {
        super(props);
    }

    private static defaultProps = {
        showNickname: false,
        showGender: false,
        showLevel: false,
    };

    private getWidth = () => {
        const base = 48;
        return base +
            (this.props.showGender ? 24 : 0) +
            (this.props.showNickname ? 128 : 0) +
            (this.props.showLevel ? 24 : 0);
    }

    private getPokemonImage() {
        return <div style={{
            backgroundImage: getPokemonImage({
                customImage: this.props.customImage,
                forme: this.props.forme,
                species: this.props.species,
                name: this.props.gameOfOrigin,
                shiny: this.props.shiny,
                style: {
                    spritesMode: true,
                    teamImages: null
                } as any
            }),
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
            height: this.getWidth(),
            width: this.getWidth(),
        }} />;
    }

    public render() {
        return (
            <div
                className={cx(
                    champsPokemon({
                        background: gameOfOriginToColor(this.props.gameOfOrigin),
                        height: '48px',
                        width: this.getWidth(),
                        margin: 0,
                        padding: 0,
                    })
                )}>
                { this.props.useSprites ? this.getPokemonImage() : <PokemonIcon {...this.props as any} /> }
                { this.props.showNickname && this.props.nickname }
                { this.props.showGender && GenderElement(this.props.gender) }
                { this.props.showLevel && ` Lv ${this.props.level}` }
            </div>
        );
    }
}
