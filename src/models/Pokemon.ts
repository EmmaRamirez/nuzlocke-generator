export interface Pokemon {
  id: string;
  species?: string;
  nickname?: string;
  status?: string;
  level?: number;
  gender?: string;
  met?: string;
  metLevel?: number;
  nature?: string;
  ability?: string;
  moves?: string[];
  causeOfDeath?: string;
  forme?: string;
  item?: string;
  types?: string[];
  customImage?: string;
  customSprite?: string;
  customTypes?: string[];
  shiny?: boolean;
  champion?: boolean;
  badges?: string[];
  num?: string;
}