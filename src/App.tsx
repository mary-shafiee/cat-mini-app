import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import img from "./assets/image/alvan-nee-ZCHj_2lJP00-unsplash.jpg";
import { useEffect } from "react";
import CatCard from "./components/CatCard";
import Cats from "./components/Cats";

function App() {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  //  useEffect(() => {
  //     if (location.pathname === "/") navigate("/app/dashboard");
  //   });

  return (
    <div style={{ height: "auto" }}>
      
      <Cats/>
    </div>
  );
}

export default App;
