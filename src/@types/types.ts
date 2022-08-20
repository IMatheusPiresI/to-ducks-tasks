export type ToDucks = {
  id: number;
  name: string;
  desc: string;
  file: string;
};

export type ReducerState = {
  toDucks: ToDucks[];
};

export type PayloadAction = {
  id: number;
  name?: string;
  desc?: string;
  file?: string;
};

export type ToDucksAction = {
  type: string;
  payload: {
    id: number;
    name?: string;
    desc?: string;
    file?: string;
  };
};
