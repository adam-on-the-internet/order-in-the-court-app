export interface Contraption {
  name: string;
  _id: string;
  type: string;
  description: string;
  age: number;
  used: boolean;
}

export interface ContraptionResource {
  contraptions: Contraption[];
}
