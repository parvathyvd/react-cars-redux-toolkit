import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeCarName(state, action) {
      state.name = action.payload;
    },
    changeCarValue(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeCarName, changeCarValue } = formSlice.actions;
export const formReducer = formSlice.reducer;
