import React, { useState } from 'react'
import axios, { Axios } from 'axios'

function Table() {

  const [countries, setCountries] = useState([])

const getcountries=()=>{
try{
axios.get("https://hubmainback.hubit.com.np/courses").then(res=>{
  console.log(res.data)
  setCountries([...res.data.data])
}).catch(error=>{
  console.log(error)
})

}


catch(error){
  console.log(error)
}
}

getcountries();
  return (
    <div>
{
  console.log(countries)
}
<table className='w-9/12 mx-auto border'>
  <thead>
    <tr className='border bg-blue-500 py-4'>
      <th className='py-4 px-3 capitalize text-white'>S no</th>
      <th className='py-4 px-3 capitalize text-white'>Country name</th>
      <th className='py-4 px-3 capitalize text-white'>official name</th>

    </tr>

  </thead>
  <tbody>
  {
  countries.map((val,i)=>{
    return(
      <tr className={`${(i%2)!=0?'bg-gray-200':'bg-white'}`}>
        <td align='center' className='py-4 px-4'>{i+1}</td>
        <td align='center' className='py-4 px-4'>{val?.title}</td>
        <td align='center' className='py-4 px-4'>{val?.name?.official}</td>

      </tr>
    )
  })
}



  </tbody>

</table>
<div className='grid grid-cols-3 gap-10 w-10/12 mx-auto mt-24'>
  {
    countries.map((val,i)=>{
      let image=`https://hubmainback.hubit.com.np/public/${val.image}`
      return(
        <div className={`border border-gray-400 relative`}>
        <div  className='py-4 px-4'>
          <img src={image}  className='h-44 w-full'/>
        </div>
        <div className='bg-red-400  absolute top-[152px] left-4 max-w-44 w-fit line-clamp-1 break-all whitespace-pre-wrap text-white p-2 capitalize'>{val.category.name}</div>
        <div  className='py-2 px-4 text-xl font-semibold'>{val.title}</div>
        <div dangerouslySetInnerHTML={{__html:val.description}} className='line-clamp-4 px-4 mb-14'/>
      <div className='border-t absolute bottom-0 grid grid-cols-2 gap-3 w-full border-gray-500 px-2 py-3 mt-3'>
      <div  className=' border-r px-3 border-gray-400'>{val.duration}</div>
      <div  className=''>{val.instructor[0]?.name}</div>

      </div>
      

      </div>
      )
    })
  }
</div>


    </div>
  )
}

export default Table