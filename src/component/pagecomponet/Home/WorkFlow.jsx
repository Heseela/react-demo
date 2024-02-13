import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaRegHandPointer } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { MdCarRental } from 'react-icons/md';

function WorkFlow() {
    const data=[
        {
            icon:<CiLocationOn />,
            name:"Pick Destination",
            description:`A small river named Duden flows by their place and supplies it
            with you`

        },
        {
            icon:<FaRegHandPointer />,
            name:"Select Term",
            description:`A small river named Duden flows by their place and supplies it
            with you`

        },
        {
            icon:<CiLocationOn />,
            name:"Choose A Car",
            description:`A small river named Duden flows by their place and supplies it
            with you`

        },
        {
            icon:<CiLocationOn />,
            name:"Enjoy The Ride",
            description:`A small river named Duden flows by their place and supplies it
            with you`

        },
       
    ]
  return (
    <div className=" mt-16 relative bg-cover h-5/6 bg-[url(https://preview.colorlib.com/theme/autoroad/images/bg_2.jpg.webp)]">
    <div className=" absolute bg-black opacity-70 h-full w-full"></div>

    <div className="  h-5/6 w-11/12 mx-auto  items-center relative z-50">
      <div className=" text-white p-16">
        <div className=" font-semibold text-sm text-center">
          WORK FLOW
        </div>
        <div className="text-center text-5xl font-bold pt-5">
          How it works
        </div>
      </div>

      <div className="grid grid-cols-4 h-[450px] gap-6 text-white px-16 py-10">
        {
            data.map((val,i)=>{
                return(
                    <div className=" w-64 text-center ">
                    <div className="mx-auto h-24 w-24 rounded-full flex items-center border-orange-400 justify-center border-2">
                      <div  className='text-4xl'>
                        {val.icon}
                      </div>
                    </div>
                    <div className="pt-10 font-semibold text-2xl">
                      {val.name}
                    </div>
                    <div className="text-gray-300 pt-5 text-xl font-normal">
                      {val.description}
                    </div>
                  </div>
                )
            })
        }
       
        {/* <div className=" w-64 text-center ">
          <div className="mx-auto h-24 w-24 rounded-full flex items-center border-orange-400 justify-center border-2">
            <FaRegHandPointer className="text-3xl " />
          </div>
          <div className="pt-10 font-semibold text-2xl">Select Term</div>
          <div className="text-gray-300 pt-5 text-xl font-normal">
            A small river named Duden flows by their place and supplies it
            with you
          </div>
        </div>

        <div className=" w-64 text-center ">
          <div className="mx-auto h-24 w-24 rounded-full flex items-center border-orange-400 justify-center border-2">
            <MdCarRental className="text-4xl" />
          </div>
          <div className="pt-10 font-semibold text-2xl">Choose a car</div>
          <div className="text-gray-300 pt-5 text-xl font-normal">
            A small river named Duden flows by their place and supplies it
            with you
          </div>
        </div>

        <div className=" w-64 text-center ">
          <div className="mx-auto h-24 w-24 rounded-full flex items-center border-orange-400 justify-center border-2">
            <FaCarSide className="text-3xl" />
          </div>
          <div className="pt-10 font-semibold text-2xl">
            Enjoy the ride
          </div>
          <div className="text-gray-300 pt-5 text-xl font-normal">
            A small river named Duden flows by their place and supplies it
            with you
          </div>
        </div> */}
      </div>
    </div>
  </div>

  )
}

export default WorkFlow