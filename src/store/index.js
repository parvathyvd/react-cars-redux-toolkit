import { configureStore } from "@reduxjs/toolkit";
import { carRedcuer, changeSearch, addCar, removeCar } from "./slices/carSlice";

import { changeCarName, changeCarValue, formReducer } from "./slices/formSlice";

export const store = configureStore({
  reducer: {
    cars: carRedcuer,
    form: formReducer,
  },
});

export { changeCarName, changeCarValue, changeSearch, addCar, removeCar };
