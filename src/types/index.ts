export type onClick = (
    e?: React.SyntheticEvent<MouseEvent> | React.SyntheticEvent<HTMLButtonElement>,
) => void;

export interface Box {
    key: number;
    name: string;
    background?: string;
    inheritFrom?: string;
    collapsed?: boolean;
}

export type Boxes = Box[];
