import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Meals />
      </main>
    </>
  );
};

export default App;
