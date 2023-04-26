import Home from "./components/Example_Lesson18/Home";
import FormRegister from "./components/FormRegister/FormRegister";
import Restaurant from "./components/Restaurant/Restaurant";
import RestaurantContext from "./components/Restaurant/RestaurantContext";

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <FormRegister /> */}
      <RestaurantContext>
        <Restaurant />
      </RestaurantContext>
    </div>
  );
}

export default App;
