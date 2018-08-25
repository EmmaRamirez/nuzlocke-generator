import * as deepEqual from 'deep-equal';
import { noop } from './noop';
// export function DeepSet<T>(arr?: T): void { }


export class DeepSet<T> {
    private set: T[];
    public key: keyof T;

    constructor(arr: T[] = [], key?: keyof T) {
        this.set = arr;
        // @ts-ignore
        this.key = key || 'name';
    }

    public add(item: T, key = this.key) {
        if (this.set.some(i => i[key] === item[key])) {
            noop();
        } else {
            this.set.push(item);
        }
    }

    public delete(item: T, key = this.key) {
        this.set = this.set.filter(i => i[key] !== item[key]);
    }

    public has(item: T, key = this.key) {
        return this.set.some(i => i[key] === item[key]);
    }

    public toArray(): T[] {
        return this.set;
    }

    public static cheapCompare (o, i) {
        return  JSON.stringify(o) === JSON.stringify(i);
    }
}