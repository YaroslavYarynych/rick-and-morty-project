import { createSlice } from "@reduxjs/toolkit";
import { ISort } from "../utils/types";

const initialState: ISort = {
  sortOption: "Position",
  order: "ASC",
};

export const sortSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeOrder(state) {
      state.order === "ASC" ? (state.order = "DESC") : (state.order = "ASC");
    },
    resetOrder(state) {
      state.order = "ASC";
    },
    setSortOption(state, { payload }) {
      state.sortOption = payload;
    },
  },
});

export const { changeOrder, resetOrder, setSortOption } = sortSlice.actions;

export default sortSlice.reducer;
