import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { incrementAsync } from '../';
import { expect } from 'chai';

describe('incrementAsync()', () => {
  const gen = incrementAsync();

  it('calls delay(1000)', () => {
    expect(gen.next().value).to.equal(call(delay, 1000));
  });

  it('dispatcheds an increment action', () => {
    expect(gen.next().value).to.equal(put({ type: 'INCREMENT' }));
  });

  it('must be done', () => {
    expect(gen.next()).to.equal({ done: true, value: undefined });
  });

});