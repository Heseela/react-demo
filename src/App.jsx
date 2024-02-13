import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Navigation/Footer";
import Toolbar from "./component/Navigation/Toolbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Pricing from "./component/pages/Pricing";
import OurCar from "./component/pages/OurCar";
import Blog from "./component/pages/Blog";
import Contact from "./component/pages/Contact";
import Table from "./component/pages/Table_Data"


function App() {

  return (
    <>
    {/* <Toolbar /> */}
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/pricing" element={<Pricing />} />
      <Route  path="/ourcar" element={<OurCar />} />
      <Route  path="/blog" element={<Blog />} />
      <Route  path="/contact" element={<Contact />} />

      <Route path="/table" element={<Table/>}/>

    </Routes>
    {/* <Home /> */}
 

      <Footer />
    </>
  );
}

export default App;
