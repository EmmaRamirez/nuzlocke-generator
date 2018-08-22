
// tslint:disable-next-line:no-empty-interfaces
export interface DeepSet<T> extends Set<T> {}

export function DeepSet<T>(arr: T): void { }

const cheapCompare = (o, i) => {
    return  JSON.stringify(o) === JSON.stringify(i);
};

DeepSet.prototype = Object.create(Set.prototype);
DeepSet.prototype.constructor = DeepSet;
DeepSet.prototype.add = function(o) {
    for (const i of this) {
        if (cheapCompare(o, i)) { throw new Error('already exists'); }
        else { Set.prototype.add.call(this, o); }
    }
};