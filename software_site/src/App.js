import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Aboutus from "./Component/Aboutus";
import Contactus from "./Component/Contactus";
import Navbar from "./Component/Navbar";
import Services from "./Component/Services";
import Gallery from "./Component/Gallery"
import "./App.css"

const App = () => (
  <BrowserRouter>
   <Navbar />
    <Routes>
      <Route   path="/"  exact element ={<Home />}/>
      <Route   path="/aboutus" exact element= {<Aboutus />}/>
      <Route   path="/services"  exact element ={<Services />}/>
      <Route   path="/gallery" exact element = {<Gallery />}/>
      <Route   path="/contactus" exact element = {<Contactus />}/>
    </Routes>
  </BrowserRouter>

);


export default App;
