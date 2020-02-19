export interface Doodad {
  name: string;
  _id: string;
  type: string;
  description: string;
  age: number;
  used: boolean;
}

export interface DoodadResource {
  doodads: Doodad[];
}
