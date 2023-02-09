import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/slices/carSlice";
import { AiOutlineDelete } from "react-icons/ai";

const CarList = () => {
  const carList = useSelector((state) =>
    state.cars.carList.filter((car) =>
      car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase())
    )
  );

  const { name } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const onCarDeleteHandler = (id) => {
    dispatch(removeCar(id));
  };

  return (
    <div className="car-list">
      <ul className="lists unstyled">
        {carList.map((car) => {
          const bold =
            name && car.name.toLowerCase().includes(name.toLowerCase());
          return (
            <li key={car.id} className={`list-item ${bold} && "bold"`}>
              <span>{car.name}</span>
              <span>{car.cost}</span>
              <span
                className="delete"
                onClick={() => onCarDeleteHandler(car.id)}
              >
                <AiOutlineDelete />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CarList;
