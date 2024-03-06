import Card from "./components/Card/Card";
import Hero from "./components/hero/hero";
import Signin from "./components/Login/Signin";
import Login from "./components/Login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Signin" element={<Signin />} />
           <Route path="/home" element={ <Home />} />
            

   
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
