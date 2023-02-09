import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

function App() {
  return (
    <main>
      <h1>Car App - Redux</h1>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </main>
  );
}

export default App;
