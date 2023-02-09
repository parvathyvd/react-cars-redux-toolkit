import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearch } from "../store/slices/carSlice";

const CarSearch = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.cars);

  const onCarSearchHandler = (e) => {
    dispatch(changeSearch(e.target.value));
  };

  return (
    <div className="car-search">
      <h3>Car Search</h3>
      <input
        type="text"
        placeholder="Search Car"
        onChange={onCarSearchHandler}
        value={searchTerm}
      />
    </div>
  );
};

export default CarSearch;
