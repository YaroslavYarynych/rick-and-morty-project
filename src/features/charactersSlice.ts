import { createSlice } from "@reduxjs/toolkit";
import { ICharacters } from "../utils/types";

const initialState: ICharacters = {
  characters: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacters: (state, { payload }) => {
      state.characters = payload;
    },
  },
});

export const { addCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
