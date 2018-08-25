// tslint:disable-next-line:no-empty-interfaces
export interface DeepSet<T> {}

// export function DeepSet<T>(arr?: T): void { }


export class DeepSet<T> implements DeepSet<T> {
    private set: T[];

    constructor(arr?: T[]) {
        this.set = arr || [];
    }

    public add(item: T) {
        for (const i of this.set!) {
            if (DeepSet.cheapCompare(item, i)) {

            } else {
                this.set.push(item);
            }
        }
    }

    public delete(item: T) {
        this.set.filter(i => DeepSet.cheapCompare(i, item));
    }

    public has(item: T) {
        return this.set.some(i => DeepSet.cheapCompare(i, item));
    }

    public toArray(): T[] {
        return this.set;
    }

    private static cheapCompare (o, i) {
        return  JSON.stringify(o) === JSON.stringify(i);
    }

    private static deepCompare (o, i) {

    }
}