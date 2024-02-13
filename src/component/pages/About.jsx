import React, { useEffect, useState } from 'react'

function About() {
const [fg, setfg] = useState(0)

const hello=[
  {
    image:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww"
  },
  {
    image:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww"
  },
  {
    image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww"
  },
  {
    image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww"
  }
]

const  next=()=>{

  if(hello.length-1===fg){
    setfg(0)

  }else{
    setfg(fg+1)

  }

}

const  prev=()=>{
  if(fg===0){
    setfg(hello.length-1)

  }else{
    setfg(fg-1)

  }

  
}

// useEffect(() => {
//   let interval= setTimeout(() => {
//     next()
//   }, 2000);

//   return () => {
//     clearTimeout(interval)
//   }
// }, [fg])


  return (
    <div className='mt-44 flex'>
      <button  onClick={()=>{
        prev()
      }} className='bg-green-600 text-white h-16 w-48 text-center flex justify-center font-bold items-center text-xl mr-5'>
          PREV
      </button>
      {/* {fg} */}
{/* {fg &&  <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww"/>
} */}

<div className='h-80 w-80 relative overflow-hidden'>

{
hello.map((val,i)=>{
  // if(i===fg){
    return(
      <img src={val.image} className={`${fg===i?"translate-x-0":"translate-x-full"} absolute top-0 left-0 transition-all ease-in-out duration-700 delay-300`}/>
    )
  // }
})}
</div>


     <button onClick={()=>{
       next()
      }} className='bg-green-600 text-white h-16 w-48 text-center flex justify-center font-bold items-center text-xl ml-5'>
         NEXT
      </button>

    </div>
  )
}

export default About