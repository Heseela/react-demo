import React from 'react'

function Toolbar() {
  return (
    <div className="flex absolute left-0 right-0 z-40 px-10 py-6 text-white justify-between">
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
  )
}

export default Toolbar