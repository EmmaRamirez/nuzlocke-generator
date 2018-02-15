import { Pokemon, Trainer } from 'models';

export interface NuzlockeSave {
    /** uuid */
    id: string;
    data: {
        pokemon?: Pokemon[];
        trainer?: Trainer;
        style?: any;
        game?: any;
        box?: any;
        rules?: any;
    };
}

export interface Nuzlocke {
    saves: NuzlockeSave[];
}
