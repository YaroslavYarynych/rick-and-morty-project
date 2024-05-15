import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "../features/charactersSlice";
import sortSlice from "../features/sortSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    charactersStore: charactersSlice,
    sortStore: sortSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
