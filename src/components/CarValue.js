import React from "react";
import { useSelector } from "react-redux";

const CarValue = () => {
  const { carList, searchTerm } = useSelector((state) => state.cars);
  const getTotalCarValue = () => {
    const filteredCars = carList.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    let carVal = 0;
    carVal = filteredCars.reduce((acc, cur) => {
      return cur.cost + acc;
    }, 0);
    return carVal;
  };
  return (
    <div className="car-value">
      <h3>Total: {getTotalCarValue()}</h3>
    </div>
  );
};

export default CarValue;
