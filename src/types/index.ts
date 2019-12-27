export type onClick = (
    e?: React.SyntheticEvent<MouseEvent> | React.SyntheticEvent<HTMLButtonElement>,
) => void;

export type Boxes = { key: number; name: string, background?: string, inheritFrom?: string }[];
