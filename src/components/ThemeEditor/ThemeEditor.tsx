import * as React from 'react';
import { connect } from 'react-redux';
import { cx } from 'emotion';
import { reducers } from 'reducers';

import * as css from './styles';
import { Pokemon } from 'models';
import { Styles, generateEmptyPokemon, listOfThemes, classWithDarkTheme } from 'utils';
import { Button, ITreeNode, Tree, Classes, Menu, MenuItem, Icon, Switch } from '@blueprintjs/core';
import { BoxedPokemon } from '../BoxedPokemon';
import { ColorEdit, ThemeSelect } from 'components/Shared';
import { ChampsPokemon } from 'components';
import {} from 'themes';
import { DeadPokemon } from 'components/DeadPokemon';
import { State } from 'state';

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

type ComponentNode = ITreeNode & { options?: { props: any } };

const componentTree: (ITreeNode & { options?: { props: any } })[] = [
    // {
    //     id: 0,
    //     hasCaret: false,
    //     label: 'Body',
    // },
    // {
    //     id: 1,
    //     icon: 'style',
    //     isExpanded: true,
    //     label: 'Header',
    //     childNodes: [
    //         {
    //             id: 2,
    //             label: 'Title',
    //         },
    //         {
    //             id: 3,
    //             label: 'Trainer Picture',
    //         },
    //     ],
    // },
    // {
    //     id: 4,
    //     icon: 'style',
    //     isExpanded: true,
    //     label: 'Team Pokemon',
    //     childNodes: [
    //         {
    //             id: 5,
    //             label: 'Info',
    //             childNodes: [
    //                 {
    //                     id: 6,
    //                     label: 'Moves',
    //                 },
    //                 {
    //                     id: 7,
    //                     label: 'Nickname Text',
    //                 },
    //             ],
    //         },
    //     ],
    // },
    // {
    //     id: 8,
    //     icon: 'style',
    //     isExpanded: true,
    //     label: 'Boxed Pokemon',
    //     options: {
    //         props: {

    //         }
    //     },
    //     childNodes: [
    //         {
    //             id: 9,
    //             label: 'Info',
    //         },
    //     ],
    // },
    {
        id: 10,
        icon: 'style',
        isExpanded: true,
        label: 'Dead Pokemon',
        options: {
            props: {},
        },
        childNodes: [
            {
                id: 11,
                label: 'Info',
            },
        ],
    },
    {
        id: 12,
        icon: 'style',
        isExpanded: true,
        label: 'Champs Pokemon',
        options: {
            props: {
                showGender: false,
                showLevel: false,
                showNickname: false,
                useSprites: true,
                level: 10,
            },
        },
        childNodes: [
            {
                id: 11,
                label: 'PokemonIcon',
            },
        ],
    },
];

export interface ThemeEditorProps {
    style: Styles;
}

export interface ThemEditorState {
    componentTree: ITreeNode[];
}

export const NumericValue = ({ name, value, onInput }) => (
    <div className={cx(css.componentOption)}>
        <label className={Classes.LABEL}>{name}</label>
        <input name={name} onInput={onInput} type="text" value={value} />
    </div>
);

export class ThemeEditorBase extends React.Component<ThemeEditorProps, ThemEditorState> {
    public state = { componentTree: [] };

    public componentWillMount() {
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
        if (id === 10) {
            return <DeadPokemon {...modelPokemon} />;
        }

        if (id === 12) {
            return (
                <ChampsPokemon
                    showGender={currentNode.options.props.showGender}
                    showNickname={currentNode.options.props.showNickname}
                    showLevel={currentNode.options.props.showLevel}
                    useSprites={currentNode.options.props.useSprites}
                    {...modelPokemon}
                />
            );
        }

        return <Icon icon="square" />;
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

        return (
            <>
                <div
                    className={cx(
                        classWithDarkTheme(css, 'header', this.props.style.editorDarkMode),
                    )}
                >
                    <strong>Current Theme:</strong>{' '}
                    <ThemeSelect theme={this.props.style.template} />
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
                        <div
                            className={cx(
                                this.props.style.template.toLowerCase(),
                                classWithDarkTheme(
                                    css,
                                    'componentResult',
                                    this.props.style.editorDarkMode,
                                ),
                            )}
                        >
                            {currentNode &&
                                currentNode.options &&
                                this.getComponent(currentNode.id, currentNode)}
                            {!currentNode && <Icon icon="grid" />}
                        </div>
                        <div className={cx(css.componentOptions)}>
                            <strong>
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
                                        if (type === 'boolean') {
                                            return (
                                                <Switch key={idx} label={propKey} value={value} />
                                            );
                                        }
                                        if (type === 'number') {
                                            <NumericValue
                                                name={propKey}
                                                value={value}
                                                onInput={null}
                                            />;
                                        }
                                        return null;
                                    })}

                                {/* <>
                                //     <div className={cx(css.componentOption)}>
                                //         <label className={Classes.LABEL}>Background Color</label>
                                //         <ColorEdit
                                //             value='#222222'
                                //             name='BoxedPokemon'
                                //             onChange={null}
                                //         />
                                //     </div>

                                //     <div className={cx(css.componentOption)}>
                                //         <label className={Classes.LABEL}>Text Color</label>
                                //         <ColorEdit
                                //             value='#EEEEEE'
                                //             name='BoxedPokemon'
                                //             onChange={null}
                                //         />
                                //     </div>

                                //     <NumericValue
                                //         name={'Border Radius'}
                                //         value={'4px'}
                                //         onInput={null}
                                //     />

                                //     <NumericValue name={'Padding'} value={'0px'} onInput={null} />

                                //     <NumericValue name={'Margin'} value={'0px'} onInput={null} />
                                // </> */}
                            </Menu>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export const ThemeEditor = connect(
    (state: State) => ({
        style: state.style,
    }),
    null,
    //@ts-ignore: React-Redux
)(ThemeEditorBase);
