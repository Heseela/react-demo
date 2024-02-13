import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { RiReservedFill } from "react-icons/ri";
import { MdCarRental } from "react-icons/md";

import { LiaCommentSolid } from "react-icons/lia";
import WorkFlow from "../pagecomponet/Home/WorkFlow";
import Testimonial from "../pagecomponet/Home/Testimonial";
import Offer from "../pagecomponet/Home/Offer";


function Home() {
  return (
    <div className="relative h-fit">
      <div className="text-white h-screen bg-cover bg-[url(https://preview.colorlib.com/theme/autoroad/images/bg_1.jpg.webp)]">
        <div className=" absolute bg-black opacity-40 h-svh w-full"></div>
        <div className="  h-full w-11/12 mx-auto flex justify-center items-center relative z-10">
          <div className="flex   ">
            <div>
              <div className="text-7xl font-extralight mt-40 w-3/5">
                <div>Now</div>
                <div>It's easy for you rent a car</div>
              </div>

              <div className=" mt-10 text-2xl font-light w-2/4 ">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts
              </div>

              <div className="mt-5 text-xl font-light w-2/4 flex items-center gap-2">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-orange-400">
                  <FaPlay className="text-sm" />
                </div>
                <div className="h-[2px] w-14 bg-white"></div>
                Easy steps for renting a car
              </div>
            </div>
            <div className="bg-white rounded-md text-black my-24 w-6/12 h-5/6 p-5">
              <div className="pt-3 text-2xl font-bold">Make your trip</div>
              <div>
                <div className="text-sm font-semibold pt-4">
                  PICK-UP LOCATION
                </div>
                <div className="text-gray-500 text-sm h-10 w-full p-3 mt-2 flex items-center justify-between border-2">
                  City, Airport, Station, etc
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold pt-5">
                  DROP-OFF LOCATION
                </div>
                <div className="text-gray-500 text-sm h-10 w-full p-3 mt-2 flex items-center justify-between border-2">
                  City, Airport, Station, etc
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-sm font-semibold pt-5">PICK-UP DATE</div>
                  <div className="text-gray-500 text-sm h-10 w-full p-3 mt-2 flex items-center justify-between border-2">
                    Date
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold pt-5">
                    DROP-OFF DATE
                  </div>
                  <div className="text-gray-500 text-sm h-10 w-full p-3 mt-2 flex items-center justify-between border-2">
                    Date
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold pt-5">PICK-UP TIME</div>
                <div className="text-gray-500 text-sm h-10 w-full p-3 mt-2 flex items-center justify-between border-2">
                  Time
                </div>
              </div>

              <div className="text-white font-medium bg-orange-400 h-12 w-full pt-3 mt-6 text-center text-base">
                Search
              </div>
            </div>
          </div>
        </div>
    </div>

        <div className="flex p-16 justify-between text-black">
          <div>
            <div className="font-bold text-lg ">Select Model</div>
            <div className="text-gray-500 text-base h-14 w-52 p-3 mt-2 flex items-center justify-between border-2">
              Select Model
              <div className="text-orange-400 text-xl">
                <MdExpandMore />{" "}
              </div>
            </div>
          </div>

          <div>
            <div className="font-bold text-lg ">Select Brand</div>
            <div className="text-gray-500 text-base h-14 w-52 p-3 mt-2 flex items-center justify-between border-2">
              Select Brand
              <div className="text-orange-400 text-xl">
                <MdExpandMore />{" "}
              </div>
            </div>
          </div>

          <div>
            <div className="font-bold text-lg ">Year Model</div>
            <div className="text-gray-500 text-base h-14 w-52 p-3 mt-2 flex items-center justify-between border-2">
              Year Model
              <div className="text-orange-400 text-xl">
                <MdExpandMore />{" "}
              </div>
            </div>
          </div>

          <div>
            <div className="font-bold text-lg ">Price Limit</div>
            <div className="text-gray-500 text-base h-14 w-52 p-3 mt-2 flex items-center justify-between border-2">
              $1
              <div className="text-orange-400 text-xl">
                <MdExpandMore />{" "}
              </div>
            </div>
          </div>

          <div className="text-white font-bold bg-orange-400 h-14 w-52 p-3 mt-9 text-center text-lg">
            Search
          </div>
        </div>

        <div className="p-16 text-black">
          <div className="text-orange-500 font-semibold text-sm text-center">
            OUR SERVICES
          </div>
          <div className="text-center text-5xl font-bold pt-5">
            Our Services
          </div>
        </div>

        <div className="h-60 px-16 flex justify-between">
          <div className="  h-60 w-60 ">
            <div className="text-black font-semibold text-xl flex gap-5">
              <div className="text-orange-500 text-3xl">
                <FaTools />
              </div>
              24/7 Car Support
            </div>
            <div className="text-gray-600 pt-5 text-xl font-normal">
              A small river named Duden flows by their place and supplies it
              with you
            </div>
          </div>

          <div className="  h-60 w-60 ">
            <div className="text-black font-semibold text-xl flex gap-5">
              <div className="text-orange-500 text-3xl">
                <MdLocationOn />
              </div>
              Lots of Location
            </div>
            <div className="text-gray-600 pt-5 text-xl font-normal">
              A small river named Duden flows by their place and supplies it
              with you
            </div>
          </div>

          <div className="  h-60 w-64 ">
            <div className="text-black font-semibold text-xl flex gap-5">
              <div className="text-orange-500 text-3xl">
                <RiReservedFill />
              </div>
              Reservation
            </div>
            <div className="text-gray-600 pt-5 text-xl font-normal">
              A small river named Duden flows by their place and supplies it
              with you
            </div>
          </div>

          <div className="  h-60 w-60 ">
            <div className="text-black font-semibold text-xl flex gap-5">
              <div className="text-orange-500 text-3xl">
                <MdCarRental />
              </div>
              Rental Cars
            </div>
            <div className="text-gray-600 pt-5 text-xl font-normal">
              A small river named Duden flows by their place and supplies it
              with you
            </div>
          </div>
        </div>

        {/* what we offer */}
        <Offer />

{/* work   flow */}
<WorkFlow/>
      
        <Testimonial/>

        <div className=" h-[700px] m-16 pt-16 grid grid-cols-2">
          <div className="bg-cover h-full w-full bg-[url(https://preview.colorlib.com/theme/autoroad/images/about.jpg.webp)]">
           
          </div>
          <div className="pl-16 pt-12">
            <div className=" text-black">
              <div className="text-orange-500 font-semibold text-sm ">
                ABOUT US
              </div>
              <div className=" text-5xl font-bold pt-5">
                Choose A Perfect Car
              </div>
            </div>
            <div className="text-gray-500 pt-12 text-lg">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </div>

            <div className="text-gray-500 pt-3 text-lg">
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country. But nothing the copy said could convince
              her and so it didn’t take long until a few insidious Copy Writers
              ambushed her, made her drunk with Longe and Parole and dragged her
              into their agency, where they abused her for their.
            </div>
            <div className="text-white cursor-pointer bg-orange-400 w-4/12 text-center mt-6 p-3 text-lg rounded-lg">
              Search Vehicle
            </div>
          </div>
        </div>

        <div className="p-16 text-black">
          <div className="text-orange-500 font-semibold text-sm text-center">
            BLOG
          </div>
          <div className="text-center text-5xl font-bold py-5">Recent Blog</div>
        </div>

<div className="grid grid-cols-3 gap-10 h-5/6 px-16">

    <div className=" w-4/4">
    <div className= "h-[300px] bg-cover  bg-[url(https://preview.colorlib.com/theme/autoroad/images/image_1.jpg.webp)]"></div>
    <div className="flex gap-4 text-gray-500 py-6 text-sm font-semibold">
        <div>JULY.24, 2019</div>
        <div>ADMIN</div>
        <div className="flex">
            <LiaCommentSolid className=" text-lg "/>3
        </div>

        </div>

    <div className="text-xl text-black  cursor-pointer hover:text-orange-400">Why Lead Generation is Key for Business Growth</div>
    <div className="text-lg text-gray-500 pt-6">A small river named Duden flows by their place and supplies it with the necessary regelialia in this scenario.</div>
    </div>

    <div className=" w-4/4">
    <div className= "h-[300px] bg-cover bg-center bg-[url(https://preview.colorlib.com/theme/autoroad/images/image_2.jpg.webp)]"></div>
    <div className="flex gap-4 text-gray-500 py-6 text-sm font-semibold">
        <div>JULY.24, 2019</div>
        <div>ADMIN</div>
        <div className="flex">
            <LiaCommentSolid className=" text-lg "/>3
        </div>

        </div>

    <div className="text-xl text-black  cursor-pointer hover:text-orange-400">Why Lead Generation is Key for Business Growth</div>
    <div className="text-lg text-gray-500 pt-6">A small river named Duden flows by their place and supplies it with the necessary regelialia in this scenario.</div>
    </div>

    <div className=" w-4/4">
    <div className= "h-[300px] bg-cover bg-[url(https://preview.colorlib.com/theme/autoroad/images/image_3.jpg.webp)]"></div>
    <div className="flex gap-4 text-gray-500 py-6 text-sm font-semibold">
        <div>JULY.24, 2019</div>
        <div>ADMIN</div>
        <div className="flex">
            <LiaCommentSolid className=" text-lg "/>3
        </div>

        </div>

    <div className="text-xl text-black  cursor-pointer hover:text-orange-400">Why Lead Generation is Key for Business Growth</div>
    <div className="text-lg text-gray-500 pt-6">A small river named Duden flows by their place and supplies it with the necessary regelialia in this scenario.</div>
    </div>
</div>


{/* footer */}

/



    </div>
  );
}

export default Home;
