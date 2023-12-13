import FoodGroupButtons from "./FoodGroupButtons";
import Menu from "./FoodGroup";
import "./homePage.css"

function Home() {
  return (
    <>
      <div className="max-md:hidden">
        <FoodGroupButtons />
      </div>
      <Menu />
    </>
  );
}

export default Home;
