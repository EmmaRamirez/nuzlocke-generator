import { TeamImagesType } from 'utils';

export interface Box {
    key: number;
    name: string;
    background?: string;
    inheritFrom?: string;
    collapsed?: boolean;
    imageTypes?: TeamImagesType;
}

export type Boxes = Box[];
