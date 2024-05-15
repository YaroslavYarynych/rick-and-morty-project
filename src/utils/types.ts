export interface ICharacterOrigin {
  name: string;
  url: string;
}

export interface ICharacterType {
  id: number;
  name: string;
  gender: string;
  image: string;
  type: string;
  species: string;
  url: string;
  status: string;
  created: string;
  episode: string[];
  location: ICharacterOrigin;
  origin: ICharacterOrigin;
}

export interface ICharacters {
  characters: ICharacterType[];
}

export interface ISort {
  sortOption: string;
  order: string;
}

export interface IInfo {
  count: number;
  next: string;
  prev: string;
  pages: number;
}
