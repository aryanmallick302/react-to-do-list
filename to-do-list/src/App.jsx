import { Routes, Route } from "react-router";
import Header from "./Components/Header/Header";
import "./index.css";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Home /> */}
      </div>
    </>
  );
}

export default App;
