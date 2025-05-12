import { BoxMappings } from './boxMappings';

export interface ParserOptions {
  boxMappings: BoxMappings;
  isCrystal?: boolean;
  type?: 'nuzlocke' | 'raw';
}
