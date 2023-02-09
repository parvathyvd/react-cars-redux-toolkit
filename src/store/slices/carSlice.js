import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    carList: [],
  },
  reducers: {
    changeSearch(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.carList.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updated = state.carList.filter((car) => car.id !== action.payload);
      state.carList = updated;
    },
  },
});

export const { changeSearch, addCar, removeCar } = carSlice.actions;
export const carRedcuer = carSlice.reducer;
