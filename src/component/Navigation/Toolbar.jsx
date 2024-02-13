import React from 'react'
import { Link } from 'react-router-dom'

function Toolbar() {
const data=[
    {
        nav:"Home",
        link:"/"
    },
    {
        nav:"About",
        link:"/about"
    },
    {
        nav:"Pricing",
        link:"/pricing"
    },
    {
        nav:"OurCar",
        link:"/ourcar"
    },
    {
        nav:"Blog",
        link:"/blog"
    },
    {
        nav:"Contact",
        link:"/contact"
    },
]




  return (
    <div className="flex absolute left-0 right-0 z-40  py-10 px-16 text-white justify-between">
    <div className="flex font-bold text-2xl ">
      <div>AUTO</div>
      <div className="text-yellow-500">ROAD</div>
    </div>
    <div className="flex justify-evenly gap-14 text-lg">

{
    data.map((val,i)=>{
        return (
           <div>
            <Link to={val.link} className=" hover:text-yellow-500 cursor-pointer">{val.nav}</Link>
{/* <Link to={'/about'} className=" hover:text-yellow-500 cursor-pointer">
{val.nav}
</Link>
<Link to={'/pricing'}  className=" hover:text-yellow-500 cursor-pointer">
{val.nav}
</Link>
<Link to={'/ourcar'} className=" hover:text-yellow-500 cursor-pointer">
{val.nav}
</Link>
<Link to={'/blog'} className=" hover:text-yellow-500 cursor-pointer">
{val.nav}
  </Link>
<Link to={'/contact'} className=" hover:text-yellow-500 cursor-pointer">
{val.nav}
</Link> */}
           </div> 
        )
    })
}
        
      
    </div>
  </div>
  )
}

export default Toolbar