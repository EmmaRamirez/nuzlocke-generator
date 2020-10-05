import * as React from 'react';
import { connect } from 'react-redux';
import { cx } from 'emotion';
import { reducers } from 'reducers';

import * as css from './styles';
import { Pokemon } from 'models';
import { Styles, generateEmptyPokemon, listOfThemes, classWithDarkTheme, Forme } from 'utils';
import { Button, ITreeNode, Tree, Classes, Menu, MenuItem, Icon, Switch, TextArea, Intent } from '@blueprintjs/core';
import { BoxedPokemon } from '../BoxedPokemon';
import { ColorEdit, ThemeSelect } from 'components/Shared';
import { ChampsPokemon, PokemonIcon, ErrorBoundary } from 'components';
import {} from 'themes';
import { DeadPokemon, DeadPokemonBase } from 'components/DeadPokemon';
import { State } from 'state';
import { CSSUnitInput } from './CSSUnitInput';
import { ChampsPokemonCollection } from 'components/ChampsPokemon/ChampsPokemonCollection';
import * as Loadable from 'react-loadable';
import { LayoutDisplay, LayoutDirection, LayoutAlignment, LayoutSpacing } from 'components/Layout';
import { TeamPokemon } from 'components/TeamPokemon';


const modelPokemon: Pokemon = {
    ...generateEmptyPokemon(),
    species: 'Pikachu',
    nickname: 'Pika Pika',
    gender: 'm',
    level: 50,
    metLevel: 5,
    met: 'Viridian Forest',
    gameOfOrigin: 'Red',
    causeOfDeath: 'Earthquake from Giovanni\'s Rhyhorn',
};

const modelPokemonB: Pokemon = {
    ...generateEmptyPokemon(),
    species: 'Dragonite',
    nickname: 'Dragini',
    gender: 'f',
    level: 78,
    metLevel: 30,
    met: 'Safari Zone',
    gameOfOrigin: 'LeafGreen',
};

const modelPokemonC: Pokemon = {
    ...generateEmptyPokemon(),
    species: 'Darmanitan',
    // forme: 'Galarian' as any,
    nickname: 'Frosty',
    gender: 'm',
    level: 100,
    met: 'Hatched on Route 8',
    metLevel: 1,
    gameOfOrigin: 'Sword',
    moves: ['Icicle Crash', 'Flare Blitz', 'U-turn', 'Earthquake']
};

const modelPokemonD: Pokemon = {
    ...generateEmptyPokemon(),
    species: 'Scizor',
    nickname: 'Stainless',
    level: 45,
    gender: 'm',
    gameOfOrigin: 'HeartGold',
};

const modelPokemonE: Pokemon = {
    ...generateEmptyPokemon(),
    species: 'Jellicent',
    nickname: 'Pringles',
    level: 50,
    gender: 'm',
    gameOfOrigin: 'X',
};

const modelPokemonF: Pokemon = {
    ...generateEmptyPokemon(),
    species: 'Rayquaza',
    shiny: true,
    level: 90,
    gameOfOrigin: 'Emerald',
    moves: ['Dragon Ascent', 'Fire Blast', 'Dragon Dance', 'Outrage']
};

const team: Pokemon[] = [
    modelPokemon,
    modelPokemonB,
    modelPokemonC,
    modelPokemonD,
    modelPokemonE,
    modelPokemonF,
];


type ComponentNode = ITreeNode & {
    component: any,
    import?: string,
    options?: { props: any, baseProps?: any },
    childNodes?: ComponentNode[]
};

const componentTree: ComponentNode[] = [

    {
        id: 8,
        icon: 'style',
        isExpanded: true,
        label: 'Team Pokemon',
        component: TeamPokemon,
        options: {
            props: {

            },
            baseProps: {
                pokemon: modelPokemon,
            }
        },
        childNodes: [
        ]
    },
    {
        id: 91,
        icon: 'style',
        isExpanded: true,
        label: 'Boxed Pokemon',
        component: BoxedPokemon,
        options: {
            props: {

            },
            baseProps: {
                pokemon: modelPokemon,
            }
        }
    },
    {
        id: 10,
        icon: 'style',
        isExpanded: true,
        label: 'Dead Pokemon',
        component: DeadPokemon,
        options: {
            props: {
                minimal: false,
            },
            baseProps: {
                ...modelPokemon,
            }
        },
        childNodes: [
        ],
    },
    {
        id: 9,
        icon: 'style',
        isExpanded: true,
        label: 'Champs Pokemon Collection',
        component: ChampsPokemonCollection,
        options: {
            props: {
                display: LayoutDisplay.Block,
                direction: LayoutDirection.Row,
                alignment: LayoutAlignment.Start,
                spacing: LayoutSpacing.Start,
            },
            baseProps: {
                pokemon: team,
            }
        },
        childNodes: [
            {
                id: 12,
                isExpanded: true,
                label: 'Champs Pokemon',
                component: ChampsPokemon,
                options: {
                    props: {
                        showGender: false,
                        showLevel: false,
                        showNickname: false,
                        useSprites: true,
                        padding: '4px',
                        margin: '0px',
                        customCSS: '',
                    },
                    baseProps: {
                        ...modelPokemon,
                    }
                },
            },
        ]
    },
];

export interface ThemeEditorProps {
    style: Styles;
}

export interface ThemEditorState {
    componentTree: ITreeNode[];
}

export const NumericValue = ({ name, value, onChange }) => (
    <div className={cx(css.componentOption)}>
        <label className={Classes.LABEL}>{name}</label>
        <input className={Classes.INPUT} name={name} onChange={onChange} type='number' value={value} />
    </div>
);

export const TextInput = ({ name, value, onChange }) => (
    <div className={cx(css.componentOption)}>
        <label className={Classes.LABEL}>{name}</label>
        <input
            className={Classes.INPUT}
            type='text'
            value={value}
            name={name}
            onChange={onChange}
        />
    </div>
);

export const WrapWithLabel = ({name, children}) => (
    <div className={cx(css.componentOption)}>
        <label className={Classes.LABEL}>{name}</label>
        {children}
    </div>
);


export class ThemeEditorBase extends React.Component<ThemeEditorProps, ThemEditorState> {
    public state = { componentTree: [] };

    // eslint-disable-next-line camelcase
    public UNSAFE_componentWillMount() {
        // TODO: Refactor out as props
        this.setState({ componentTree: componentTree });
    }

    private getCurrentNode() {
        let currentNode;
        const selectedNodes = this.forEachNode(this.state.componentTree, (node) => {
            if (node.isSelected) currentNode = node;
        });
        return currentNode;
    }

    private onNodeClick = (
        node: ITreeNode,
        _nodePath: number[],
        e: React.MouseEvent<HTMLElement>,
    ) => {
        const originallySelected = node.isSelected;
        if (!e.shiftKey) {
            this.forEachNode(this.state.componentTree, (n) => (n.isSelected = false));
        }
        node.isSelected = originallySelected == null ? true : !originallySelected;
        this.setState(this.state);
    };

    private onNodeCollapse = (node: ITreeNode) => {
        node.isExpanded = false;
        this.setState(this.state);
    };

    private onNodeExpand = (node: ITreeNode) => {
        node.isExpanded = true;
        this.setState(this.state);
    };

    private getComponent = (id, currentNode) => {
        console.log(currentNode);
        return <currentNode.component {...currentNode.options.baseProps} {...currentNode.options.props} />;
        // }

        // if (id === 9) {
        //     return <ChampsPokemonCollection pokemon={team} />;
        // }

        // if (id === 12) {
        //     return (
        //         <ChampsPokemon
        //             {...currentNode.options.props}
        //             {...modelPokemon}
        //         />
        //     );
        // }

        // if (id === 11) {
        //     return <PokemonIcon {...currentNode.options.props} {...modelPokemon} />;
        // }

        // return <Icon icon="square" />;
    };

    private forEachNode(nodes: ITreeNode[], callback: (node: ITreeNode) => void) {
        if (nodes == null) {
            return;
        }
        for (const node of nodes) {
            callback(node);
            this.forEachNode(node.childNodes!, callback);
        }
    }

    public render() {
        const currentNode: ComponentNode =
            this.getCurrentNode() == null ? null : this.getCurrentNode();
        if (currentNode) {
            const { label } = currentNode;
        }

        const modify = (key, value) => currentNode!.options!.props[key] = value;

        return <>
            <div
                className={cx(
                    classWithDarkTheme(css, 'header', this.props.style.editorDarkMode),
                )}>
                <div>
                    <strong>Current Theme:</strong>{' '}
                    <ThemeSelect theme={this.props.style.template} />
                </div>
                <div>
                    <Button
                        style={{margin: '4px'}}
                        icon='download'
                        intent={Intent.SUCCESS}
                    >Export To theme.json</Button>
                    <Button
                        style={{margin: '4px'}}
                        icon='upload'
                    >Import from theme.json</Button>
                </div>
            </div>
            <div className={cx(css.main)}>
                <div className={cx(css.sidebar)}>
                    <label style={{ display: 'flex' }} className={Classes.LABEL}>
                        <input
                            style={{ margin: '4px', width: 'calc(80% - 8px)' }}
                            className={Classes.INPUT}
                            type="text"
                            placeholder="Filter..."
                        />
                        <Button
                            style={{ width: '20%' }}
                            icon="search"
                            className={Classes.MINIMAL}
                        />
                    </label>
                    <Tree
                        contents={componentTree}
                        onNodeClick={this.onNodeClick}
                        onNodeCollapse={this.onNodeCollapse}
                        onNodeExpand={this.onNodeExpand}
                    />
                </div>
                <div className={cx(css.componentView)}>
                    <ErrorBoundary errorMessage={
                        JSON.stringify(currentNode)
                    }>
                        <div
                            className={cx(
                                this.props.style.template.toLowerCase().replace(/\s/g, '-'),
                                classWithDarkTheme(
                                    css,
                                    'componentResult',
                                    this.props.style.editorDarkMode,
                                ),
                            )}>
                            {currentNode &&
                                currentNode.options &&
                                this.getComponent(currentNode.id, currentNode)}
                            {!currentNode && <Icon icon="grid" />}
                        </div>
                    </ErrorBoundary>
                    <div className={cx(css.componentOptions)}>
                        <strong className={css.componentOptionsLabel}>
                            {this.getCurrentNode() == null ? '' : this.getCurrentNode().label}{' '}
                            Options
                        </strong>

                        <Menu>
                            {currentNode &&
                                currentNode.options &&
                                Object.keys(currentNode.options.props).map((propKey, idx) => {
                                    if (!currentNode.options) {
                                        return null;
                                    }
                                    const type = typeof currentNode.options.props[propKey];
                                    const value = currentNode.options.props[propKey];

                                    if (propKey === 'customCSS') {
                                        return <WrapWithLabel name={propKey}>
                                            <TextArea
                                                value={value}
                                                name={propKey}
                                                onChange={e => {
                                                    modify(propKey, e.target.value);
                                                    this.setState(this.state);
                                                }}
                                            />
                                        </WrapWithLabel>;
                                    }

                                    if (propKey === 'padding' || propKey === 'margin') {
                                        return <CSSUnitInput
                                            name={propKey}
                                            value={value}
                                            onChange={e => {
                                                modify(propKey, e.target.value);
                                                this.setState(this.state);
                                            }}
                                        />;
                                    }

                                    if (type === 'boolean') {
                                        return (
                                            <WrapWithLabel name={propKey}>
                                                <Switch onChange={(e: any) => {
                                                    modify(propKey, e.target.checked);
                                                    this.setState(this.state);
                                                }} key={idx} checked={value} />
                                            </WrapWithLabel>
                                        );
                                    }
                                    if (type === 'number') {
                                        return <NumericValue
                                            name={propKey}
                                            value={value}
                                            onChange={e => {
                                                modify(propKey, e.target.value);
                                                this.setState(this.state);
                                            }}
                                        />;
                                    }
                                    if (type === 'string') {
                                        return <TextInput
                                            value={value}
                                            name={propKey}
                                            onChange={e => {
                                                modify(propKey, e.target.value);
                                                this.setState(this.state);
                                            }}
                                        />;
                                    }
                                    return JSON.stringify({type, value});
                                })}
                        </Menu>
                    </div>
                </div>
            </div>
        </>;
    }
}

export const ThemeEditor = connect(
    (state: State) => ({
        style: state.style,
    }),
    null,
    //@ts-ignore: React-Redux
)(ThemeEditorBase);
