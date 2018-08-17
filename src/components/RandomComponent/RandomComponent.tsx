import * as React from 'react';
import { connect } from 'react-redux';
import { css, cx } from 'emotion';
import { Action } from 'actions';

import {
    modifyDeletionConfirmation
} from 'actions';
import { reducers } from 'reducers';

export const RandomComponentStyles = {
    counter: css`
        background: white;
        color: red;
        display: flex;
        padding: .25rem;
    `,
    counterNumber: css`
        font-size: 1.25rem;
    `,
    footer: css`
        background: lightblue;
        color: #222;
        padding: .5rem;
    `,
    modifier: css`
        background: white;
        color: red;
    `
};


export interface RandomComponentProps {
    onClick(e?: React.MouseEvent<HTMLElement>): void;
    modifyDeletionConfirmation: modifyDeletionConfirmation;
    confirmation: typeof reducers.confirmation;
}

export interface RandomComponentState {
    count: number;
}

export class RandomComponentBase extends React.Component<RandomComponentProps, RandomComponentState> {
    public state = {
        count: 0,
    };

    public componentWillMount() {
        console.log(`Ran componentWillMount`);
    }

    public componentDidMount() {
        console.log(`Ran componentDidMount`);
        this.props.modifyDeletionConfirmation(false);
    }

    private onMinusClick = e => this.setState({ count: this.state.count - 1});

    private onPlusClick = e => this.setState({ count: this.state.count + 1});

    public render() {
        const { modifyDeletionConfirmation, onClick } = this.props;
        return (
            <div className={cx(RandomComponentStyles.counter)}>
                <div id='b1' role='button' onClick={this.onMinusClick}>-1</div>
                <div className={cx('clicks', RandomComponentStyles.counterNumber)}>
                    { this.state.count }
                </div>
                <div id='b2' role='button' onClick={this.onPlusClick}>+1</div>
                <div className={cx(RandomComponentStyles.footer)}>
                    <button id='click-this' onClick={onClick}>Click This</button>
                    <div id='modifier' role='button'>Modify</div>
                    { this.props.children ? this.props.children : <div>No Children Provided</div> }
                </div>
            </div>
        );
    }
}

export const RandomComponent = connect(
    (state: Partial<typeof reducers>) => ({
        confirmation: state.confirmation,
    }),
    {
        modifyDeletionConfirmation
    }
)(RandomComponentBase);