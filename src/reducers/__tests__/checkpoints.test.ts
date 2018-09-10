import { checkpoints } from '../checkpoints';
import { Badge } from 'models';
import { DeepSet } from 'utils';
import { addCustomCheckpoint, deleteCheckpoint, editCheckpoint } from 'actions';

describe.skip('checkpoints', () => {
    const genState = () => [
        { name: 'TestBadge', image: 'badge' }
    ];

    it('works with add', () => {
        const state1 = genState();
        checkpoints(state1, addCustomCheckpoint({ name: 'TestBadge2', image: 'neat' }));
        expect(state1.length).toBe(2);
    });

    it('works with delete', () => {
        const state2 = genState();
        checkpoints(state2, deleteCheckpoint('TestBadge'));
        expect(state2.length).toBe(0);
    });

    it('works with edit', () => {
        const state3 = genState();
        checkpoints(state3, editCheckpoint({ image: 'test' }, 'TestBadge'));
        expect(state3[0].image).toBe('test');
    });
});