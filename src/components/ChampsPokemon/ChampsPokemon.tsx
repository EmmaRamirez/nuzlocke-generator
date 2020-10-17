import * as React from 'react';

import { PokemonIcon } from 'components/PokemonIcon';
import { gameOfOriginToColor, Game, getPokemonImage } from 'utils';
import { Pokemon } from 'models';
import { GenderElement } from '../Shared';
import { css, cx } from 'emotion';

export const champsPokemon = (options: any) => css`
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

export type ChampsPokemonProps = { [P in keyof Pokemon]?: any } & {
    showNickname?: boolean;
    showGender?: boolean;
    showLevel?: boolean;
    useSprites?: boolean;
    margin?: string;
    padding?: string;
    background?: string;
    customCSS?: string;
};

export class ChampsPokemon extends React.Component<ChampsPokemonProps> {
    private static defaultProps = {
        showNickname: false,
        showGender: false,
        showLevel: false,
    };

    private getWidth = () => {
        const base = 48;
        return (
            base +
            (this.props.showGender ? 24 : 0) +
            (this.props.showNickname ? 128 : 0) +
            (this.props.showLevel ? 24 : 0)
        );
    };

    private getPokemonImage() {
        return (
            <div
                style={{
                    backgroundImage: getPokemonImage({
                        customImage: this.props.customImage,
                        forme: this.props.forme,
                        species: this.props.species,
                        name: this.props.gameOfOrigin,
                        shiny: this.props.shiny,
                        gender: this.props.gender,
                        style: {
                            spritesMode: true,
                            teamImages: null,
                        } as any,
                    }),
                    backgroundPosition: 'center center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    height: '48px',
                    width: '48px',
                }}
            />
        );
    }

    public render() {
        const { margin, padding, customCSS } = this.props;
        const className = champsPokemon({
            background: gameOfOriginToColor(this.props.gameOfOrigin),
            height: '48px',
            width: `${this.getWidth()}px`,
            margin,
            padding,
        });

        return (
            <>
                <div className={cx(className)}>
                    {this.props.useSprites ? (
                        this.getPokemonImage()
                    ) : (
                        <PokemonIcon {...(this.props as any)} />
                    )}
                    {this.props.showNickname && this.props.nickname}
                    {this.props.showGender && GenderElement(this.props.gender)}
                    {this.props.showLevel && ` Lv ${this.props.level}`}
                </div>
                <style>
                    {`.${className} {
                        ${customCSS}
                    }`}
                </style>
            </>
        );
    }
}
