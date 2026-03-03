import { Routes } from "react-router";
import Header from "./Components/Header/Header";
import ItemContainer from "./Components/ItemContainer/ItemContainer";
import "./index.css";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#219ebc]">
        <Header />
        {/* <Home /> */}
      </div>
    </>
  );
}

export default App;
