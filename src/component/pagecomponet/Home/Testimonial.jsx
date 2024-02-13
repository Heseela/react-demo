import React from 'react'

function Testimonial() {
const data=[
    {
        desc:` Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia, there live the blind texts.`,
        name:"Roger Scott",
        faculty:"UI Designer",
       image:`https://preview.colorlib.com/theme/autoroad/images/person_1.jpg.webp`
    },
    {
        desc:` Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia, there live the blind texts.`,
        name:"Roger Scott",
        faculty:"Marketing Manager",
        image:`https://preview.colorlib.com/theme/autoroad/images/person_3.jpg.webp`
    },
    {
        desc:` Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia, there live the blind texts.`,
        name:"Roger Scott",
        faculty:"Interface Designer",
        image:`https://preview.colorlib.com/theme/autoroad/images/person_2.jpg.webp`

    },

]




  return (
    <div>
        <div className="p-24 text-black">
          <div className="text-orange-500 font-semibold text-sm text-center">
            TESTIMONIAL
          </div>
          <div className="text-center text-5xl font-bold pt-5">
            Happy Clients
          </div>
        </div>
        <div className="h-11/12 grid grid-cols-3 gap-10 px-16 ">
{
    data.map((val,i)=>{
        return(
        <div className="  w-full shadow-xl  text-center p-16">
            <div className={` h-28 rounded-full w-28 bg-orange-400 mx-auto bg-cover bg-[url(${val.image})]`}></div>
            <div className="text-gray-500 text-xl mt-12">
              {val.desc}
            </div>
            <div className="text-orange-400 text-2xl mt-8">{val.name}</div>
            <div className="text-gray-400 ">{val.faculty}</div>
          </div>
        )
    })
}
           
          

        </div>

    </div>
  )
}

export default Testimonial