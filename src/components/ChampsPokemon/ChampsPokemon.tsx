import * as React from 'react';

import { PokemonIcon } from 'components/PokemonIcon';
import { gameOfOriginToColor, Game } from 'utils';
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
    padding: .25rem;
    cursor: pointer;
`;

export type ChampsPokemonProps = {
    [P in keyof Pokemon]?: any;
} & {
    showNickname?: boolean;
    showGender?: boolean;
    showLevel?: boolean;
};

export class ChampsPokemon extends React.Component<ChampsPokemonProps> {
    constructor(props) {
        super(props);
    }

    private static defaultProps = {
        showNickname: true,
        showGender: true,
        showLevel: true,
    };

    private getWidth = () => {
        const base = 48;
        return base +
            (this.props.showGender ? 24 : 0) +
            (this.props.showNickname ? 128 : 0) +
            (this.props.showLevel ? 24 : 0);
    }

    public render() {
        return (
            <div
                className={cx(
                    champsPokemon({
                        background: gameOfOriginToColor(this.props.gameOfOrigin),
                        height: '48px',
                        width: this.getWidth(),
                        margin: '4px',
                    })
                )}>
                <PokemonIcon {...this.props as any} />
                { this.props.showNickname && this.props.nickname }
                { this.props.showGender && GenderElement(this.props.gender) }
                { this.props.showLevel && ` Lv ${this.props.level}` }
            </div>
        );
    }
}
