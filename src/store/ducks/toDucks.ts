// store/ducks/todo.ts

import { ToDucksAction, ToDucks, PayloadAction } from "../../@types/types";

// Action Types

export const Types = {
  ADD_DUCK_TASK: "ADD_DUCK_TASK",
  DEL_DUCK_TASK: "DEL_DUCK_TASK",
  EDT_DUCK_TASK: "EDT_DUCK_TASK",
};

// Reducer

const initialState: ToDucks[] = [];

export default function toDucks(state = initialState, action: ToDucksAction) {
  switch (action.type) {
    case Types.ADD_DUCK_TASK:
      return [...state, action.payload];

    case Types.DEL_DUCK_TASK:
      return state.filter(
        (toDucks: ToDucks) => toDucks.id !== action.payload.id
      );

    case Types.EDT_DUCK_TASK:
      return state.map((duckTask: ToDucks) => {
        if (duckTask.id === action.payload.id) {
          return {
            id: action.payload.id,
            name: action.payload.name,
            file: action.payload.file,
            desc: action.payload.desc,
          };
        }
        return duckTask;
      });
    default:
      return state;
  }
}

// Action Creators

export function addDuckTask(payload: PayloadAction) {
  return {
    type: Types.ADD_DUCK_TASK,
    payload: {
      id: payload.id,
      name: payload.name,
      desc: payload.desc,
      file: payload.file,
    },
  };
}

export function removeDuckTask(payload: PayloadAction) {
  return {
    type: Types.DEL_DUCK_TASK,
    payload,
  };
}

export function editDuckTask(payload: PayloadAction) {
  return {
    type: Types.EDT_DUCK_TASK,
    payload,
  };
}
