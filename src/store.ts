import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemsSliceState } from "./Interfaces";

const initialState: ItemsSliceState = {
  items: [
    { item: "Andrey", id: 1, finished: false },
    { item: "Antonis", id: 2, finished: false },
    { item: "Bashar", id: 3, finished: false },
    { item: "Belal", id: 4, finished: false },
    { item: "Ben", id: 5, finished: false },
    { item: "Benraiss", id: 6, finished: false },
    { item: "Eko", id: 7, finished: false },
    { item: "Fabian", id: 8, finished: false },
    { item: "Grzegorz", id: 9, finished: false },
    { item: "Hamid", id: 10, finished: false },
    { item: "Michelle", id: 11, finished: false },
    { item: "Naomi", id: 12, finished: false },
    { item: "Nour", id: 13, finished: false },
    { item: "Ramazan", id: 14, finished: false },
    { item: "Stani", id: 15, finished: false },
    { item: "Wadim", id: 16, finished: false },
  ],
  target: 0,
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItemAction: (state, action: PayloadAction<string>) => {
      state.items = [
        ...state.items,
        { item: action.payload, id: Math.random(), finished: false },
      ];
    },
    removeItemAction: (state, action: PayloadAction<number>) => {
      // state.items = state.items.filter((el) => el.id !== action.payload);
      state.items = state.items.map((el) => {
        if (el.id === action.payload) {
          el.finished = true;
        }
        return el;
      });
    },
    setTargetAction: (state, action: PayloadAction<number>) => {
      state.target = action.payload;
    },
    clearItemsAction: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItemAction,
  removeItemAction,
  setTargetAction,
  clearItemsAction,
} = itemSlice.actions;

export const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectItems = (state: RootState) => state.items.items;
export const selectTarget = (state: RootState) => state.items.target;
