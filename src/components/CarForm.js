import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCarName, changeCarValue } from "../store/slices/formSlice";
import { addCar } from "../store/slices/carSlice";

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => state.form);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && cost !== 0) {
      dispatch(addCar({ name, cost }));
    } else {
      return;
    }
  };
  const onCarNameChangeHandler = (e) => {
    dispatch(changeCarName(e.target.value));
  };
  const onCarCostChangeHandler = (e) => {
    const val = parseInt(e.target.value || 0);
    dispatch(changeCarValue(val));
  };
  return (
    <div className="car-form">
      <form onSubmit={onHandleSubmit}>
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Car Name"
            value={name}
            onChange={onCarNameChangeHandler}
          />
          <input
            type="number"
            placeholder="Car Cost"
            value={cost || ""}
            onChange={onCarCostChangeHandler}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CarForm;
