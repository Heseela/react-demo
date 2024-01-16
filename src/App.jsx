import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Testtwo from "./testtwo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-white h-screen bg-cover bg-[url(https://preview.colorlib.com/theme/autoroad/images/bg_1.jpg.webp)]">
        <div className=" absolute bg-black opacity-40 h-svh w-full"></div>
        <div className="px-20 py-14 relative z-10">
          <div className="flex justify-between">
            <div className="flex font-bold text-2xl ">
              <div>AUTO</div>
              <div className="text-yellow-500">ROAD</div>
            </div>
            <div className="flex justify-evenly gap-14 text-lg">
              <div className=" hover:text-yellow-500 cursor-pointer">Home</div>
              <div className=" hover:text-yellow-500 cursor-pointer">About</div>
              <div className=" hover:text-yellow-500 cursor-pointer">
                Pricing
              </div>
              <div className=" hover:text-yellow-500 cursor-pointer">
                OurCar
              </div>
              <div className=" hover:text-yellow-500 cursor-pointer">Blog</div>
              <div className=" hover:text-yellow-500 cursor-pointer">
                Contact
              </div>
            </div>
          </div>


    <div className="flex-row">
          <div>
            <div className="text-7xl font-extralight mt-40 w-2/5">
              <div>Now</div>
              <div>It's easy for you rent a car</div>
            </div>

            <div className=" mt-10 text-2xl font-light w-2/4 ">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts
            </div>

            <div className="mt-5 text-xl font-light w-2/4">
              Easy steps for renting a car
            </div>
          </div>
{/* <div className="bg-white text-black h-full">
    <div>Make your trip</div>
    <div>PICK-UP LOCATION</div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
