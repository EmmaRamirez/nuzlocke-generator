export interface Pokemon {
  _id: string;
  species: string;
  nickname: string;
  status: string;
  level: number;
  gender: string;
  met: string;
  metLevel: number;
  nature: string;
  ability: string;
  moves: string[];
  causeOfDeath: string;
  forme: string;
  item: string;
  customImage: string;
  customSprite: string;
  customTypes: string[];
  shiny: boolean;
  champion: boolean;
  num: string;
}