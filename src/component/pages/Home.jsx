import React from 'react'
import { FaPlay } from "react-icons/fa";
function Home() {
  return (
    <div className='relative'>
             <div className="text-white h-screen bg-cover bg-[url(https://preview.colorlib.com/theme/autoroad/images/bg_1.jpg.webp)]">
        <div className=" absolute bg-black opacity-40 h-svh w-full"></div>
        <div className="  h-full w-11/12 mx-auto flex justify-center items-center relative z-10">
      


    <div className="flex h-fit ">
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

            <div className="mt-5 text-xl font-light w-2/4 flex items-center gap-2">
                <div className='h-12 w-12 rounded-full flex items-center justify-center bg-orange-400'>
                <FaPlay  className='text-sm'/>

                </div>
                <div className='h-[2px] w-14 bg-white'></div>
              Easy steps for renting a car
            </div>
          </div>
<div className="bg-white text-black h-full">
    <div>Make your trip</div>
    <div>PICK-UP LOCATION</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home