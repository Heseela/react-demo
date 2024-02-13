import React from 'react'

function Offer() {

    const data=[
{
    image:`https://preview.colorlib.com/theme/autoroad/images/car-7.jpg.webp`,
    name:"Mercedes Grand Sedan",
    brand:"AUDI",
    book:"Book Now",
    details:"Details"
},
{
    image:`https://preview.colorlib.com/theme/autoroad/images/car-2.jpg.webp`,
    name:"Mercedes Grand Sedan",
    brand:"FORD",
    book:"Book Now",
    details:"Details"
},
{
    image:`https://preview.colorlib.com/theme/autoroad/images/car-3.jpg.webp`,
    name:"Mercedes Grand Sedan",
    brand:"CHEVEROLET",
    book:"Book Now",
    details:"Details"
},
{
    image:`https://preview.colorlib.com/theme/autoroad/images/car-4.jpg.webp`,
    name:"Mercedes Grand Sedan",
    brand:"MERCEDES",
    book:"Book Now",
    details:"Details"
},
{
    image:`https://preview.colorlib.com/theme/autoroad/images/car-5.jpg.webp`,
    name:"Mercedes Grand Sedan",
    brand:"AUDI",
    book:"Book Now",
    details:"Details"
},
{
    image:`https://preview.colorlib.com/theme/autoroad/images/car-6.jpg.webp`,
    name:"Mercedes Grand Sedan",
    brand:"FORD",
    book:"Book Now",
    details:"Details"
},
{
    image:`https://preview.colorlib.com/theme/autoroad/images/car-7.jpg.webp`,
    name:"Mercedes Grand Sedan",
    brand:"CHEVEROLET",
    book:"Book Now",
    details:"Details"
},
{
    image:`https://preview.colorlib.com/theme/autoroad/images/car-8.jpg.webp`,
    name:"Mercedes Grand Sedan",
    brand:"MERCEDES",
    book:"Book Now",
    details:"Details"
},
    ]
  return (
    <div>
        <div className="p-10 text-black">
          <div className="text-orange-500 font-semibold text-sm text-center">
            WHAT WE OFFER
          </div>
          <div className="text-center text-5xl font-bold py-5">
            Choose Your Car
          </div>
        </div>

        <div className="grid grid-cols-4 h-fit gap-6 px-16">
       {
        data.map((val,i)=>{
            return(
                <div>
                <div className={`h-56 w-[300px] bg-center bg-cover bg-[url(${val.image})]`}></div>
                <div className=" h-[160px] w-[300px] border-2">
                  <div className="text-xl text-black text-center pt-5 ">
                   {val.name}
                  </div>
                  <div className="text-center text-sm font-medium text-gray-500">
                    {val.brand}
                  </div>
                  <div className="text-black flex justify-evenly pt-5">
                    <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                      {val.book}
                    </div>
                    <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                      {val.details}
                    </div>
                  </div>
                </div>
              </div>
            )
        })
       }

          {/* <div>
            <div className="h-56 w-[300px] bg-center bg-cover bg-[url(https://preview.colorlib.com/theme/autoroad/images/car-2.jpg.webp)]"></div>
            <div className=" h-[160px] w-[300px] border-2">
              <div className="text-xl text-black text-center pt-5 ">
                Mercedes Grand Sedan
              </div>
              <div className="text-center text-sm font-medium text-gray-500">
                FORD
              </div>
              <div className="text-black flex justify-evenly pt-5">
                <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                  Book Now
                </div>
                <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                  Details
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-56 w-[300px] bg-center bg-cover bg-[url(https://preview.colorlib.com/theme/autoroad/images/car-3.jpg.webp)]"></div>
            <div className=" h-[160px] w-[300px] border-2">
              <div className="text-xl text-black text-center pt-5 ">
                Mercedes Grand Sedan
              </div>
              <div className="text-center text-sm font-medium text-gray-500">
                CHEVEROLET
              </div>
              <div className="text-black flex justify-evenly pt-5">
                <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                  Book Now
                </div>
                <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                  Details
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-56 w-[300px] bg-center bg-cover bg-[url(https://preview.colorlib.com/theme/autoroad/images/car-4.jpg.webp)]"></div>
            <div className=" h-[160px] w-[300px] border-2">
              <div className="text-xl text-black text-center pt-5 ">
                Mercedes Grand Sedan
              </div>
              <div className="text-center text-sm font-medium text-gray-500">
                MERCEDES
              </div>
              <div className="text-black flex justify-evenly pt-5">
                <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                  Book Now
                </div>
                <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                  Details
                </div>
              </div>
            </div>
          </div>
      */}
          {/* <div>
            <div className="h-56 w-[300px] bg-center bg-cover bg-[url(https://preview.colorlib.com/theme/autoroad/images/car-5.jpg.webp)]"></div>
            <div className=" h-[160px] w-[300px] border-2">
              <div className="text-xl text-black text-center pt-5 ">
                Mercedes Grand Sedan
              </div>
              <div className="text-center text-sm font-medium text-gray-500">
                AUDI
              </div>
              <div className="text-black flex justify-evenly pt-5">
                <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                  Book Now
                </div>
                <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                  Details
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-56 w-[300px] bg-center bg-cover bg-[url(https://preview.colorlib.com/theme/autoroad/images/car-6.jpg.webp)]"></div>
            <div className=" h-[160px] w-[300px] border-2">
              <div className="text-xl text-black text-center pt-5 ">
                Mercedes Grand Sedan
              </div>
              <div className="text-center text-sm font-medium text-gray-500">
                FORD
              </div>
              <div className="text-black flex justify-evenly pt-5">
                <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                  Book Now
                </div>
                <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                  Details
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-56 w-[300px] bg-center bg-cover bg-[url(https://preview.colorlib.com/theme/autoroad/images/car-7.jpg.webp)]"></div>
            <div className=" h-[160px] w-[300px] border-2">
              <div className="text-xl text-black text-center pt-5 ">
                Mercedes Grand Sedan
              </div>
              <div className="text-center text-sm font-medium text-gray-500">
                CHEVEROLET
              </div>
              <div className="text-black flex justify-evenly pt-5">
                <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                  Book Now
                </div>
                <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                  Details
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-56 w-[300px] bg-center bg-cover bg-[url(https://preview.colorlib.com/theme/autoroad/images/car-8.jpg.webp)]"></div>
            <div className=" h-[160px] w-[300px] border-2">
              <div className="text-xl text-black text-center pt-5 ">
                Mercedes Grand Sedan
              </div>
              <div className="text-center text-sm font-medium text-gray-500">
                MERCEDES
              </div>
              <div className="text-black flex justify-evenly pt-5">
                <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                  Book Now
                </div>
                <div className="border-2 h-9 w-32 text-center pt-1 rounded-md hover:text-white hover:bg-orange-400 hover:border-none cursor-pointer">
                  Details
                </div>
              </div>
            </div>
          </div> */}
        </div>
    </div>
  )
}

export default Offer