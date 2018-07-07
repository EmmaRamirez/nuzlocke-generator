export interface Trainer {
    name?: string;
    id?: string | number;
    time?: string;
    money?: number;
    badges?: string[];
    expShareStatus?: string;
    image?: string;
    title?: string;
    notes?: string;
    totalTime?: string;
}

export const TrainerKeys: Trainer = {
    name: 'Red',
    id: '00123',
    time: '04:33',
    money: 1244,
    badges: ['boulder-badge'],
    expShareStatus: 'ON',
    image: 'http://placeholder.com',
    title: 'Trainer Title',
    notes: 'None yet.',
    totalTime: '190:33',
};