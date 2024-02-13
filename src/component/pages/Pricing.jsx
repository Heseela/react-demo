import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

function Pricing() {
  const [value,setValue]=useState('')

  const array=[
    {type:"text", name:"fname" ,placeholder:"First Name"},
    {type:"email", name:"email", placeholder:"Your Email"},
    {type:"text", name:"lname" ,placeholder:"Last Name"},
    {type:"text" ,name:"number", placeholder:"Your Phone"},
    {type:"password", name:"password", placeholder:"Password"},

    { type:"select", name:"select",options:[
      {title:'Please select your security question'}
    ]},
    {type:"password", name:"confirm", placeholder:"Confirm Password"},
    {type:"text", name:"answer", placeholder:"Enter your answer"}
    
  ]
  

  return (
    <div className="bg-primary h-[600px] w-11/12 mx-auto mt-16">
      <div className="  w-1/5 h-full absolute p-5 text-center ml-16 pt-36 items-center">
        <div >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 animate-bounce"  viewBox="0 0 24 24"><path fill="currentColor" d="M4 22v-5.925q0-.5.238-.95T4.9 14.4l1.1-.725q.175 2.1.55 3.575t1.175 3.275zm5.225-2q-.875-1.65-1.3-3.5T7.5 12.675q0-3.125 1.238-5.887T12 2.6q2.025 1.425 3.263 4.188t1.237 5.887q0 1.95-.425 3.788T14.775 20zM12 13q.825 0 1.413-.587T14 11q0-.825-.587-1.412T12 9q-.825 0-1.412.588T10 11q0 .825.588 1.413T12 13m8 9l-3.725-1.475q.8-1.8 1.175-3.275t.55-3.575l1.1.725q.425.275.663.725t.237.95z"/></svg>
        </div>
        <div className="text-white font-medium text-4xl">Welcome</div>
        <div className="text-white pt-5 font-thin text-xl">
          You are 30 seconds away from earning your own money!
        </div>
        <button className="text-black text-lg font-semibold rounded-full mt-28 bg-white w-36 h-10">
          Login
        </button>
      </div>
      <div className="relative bg-gray-100 h-[500px] w-2/3 left-96 rounded-l-[100px] top-12">
        <div className="text-black font-medium w-full text-center text-4xl pt-12">
          Apply as a Employee
        </div>

        <Formik
          initialValues={{
            fname: "",
            email: "",
            lname: "",
            number: "",
            password: "",
            confirm: "",
            answer: "",
            gender:"male"
          }}
        >
          {({ handleSubmit, values, setFieldValue }) => {
            return (
              <Form className="grid h-52 grid-cols-2 gap-5 mt-10 bg-red-300 mx-20 outline-none">
                {array.map((val, i) => {
                 if(val.type==='select'){
                  return (
                    <Field
                      as={val.type}
                      name={val.name}

                    >
                      {
                        val.options && val.options.map((item,ind)=>{
                          return(
                            <option>{item.title}</option>
                          )
                        })
                      }
                    </Field>
                  );
                 }else{
                  return (
                    <Field
                      type={val.type}
                      name={val.name}
                      placeholder={val.placeholder}
                      className="py-3 px-2"
                    />
                  );
                 }
                })}
                    <div className="px-20 text-lg flex gap-2 pt-7">
          <input onChange={(e)=>{
            setFieldValue('gender','male')
          }} checked={values.gender==='male'?true:false} type="radio" name="male" />
          Male 
          <input onChange={(e)=>{
            setFieldValue('gender','female')
          }} checked={values.gender==='female'?true:false} type="radio" name="female" />
          Female
        </div>
              </Form>
            );
          }}
        </Formik>

        {/* <div className='grid h-52 grid-cols-2 gap-5 mt-10 mx-20'>
        <input type="text" name="fname" placeholder="First Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <input type="text" name="lname" placeholder="Last Name" required/>
        <input type="text" name="number" placeholder="Your Phone" required/>
        <input type="password" name="password" placeholder="Password" required/>
        <select name="option">
          <option disabled="disabled">Please select your security question</option>
          <option>What is your birthdate?</option>
          <option>What is your old phone number?</option>
          <option>What is your pet name?</option>
        </select>
        <input type="password" name="confirm" placeholder="Confirm Password" required/>
        <input type="text" name="answer" placeholder="Enter your answer" required/>
      </div> */}

    
        <div className="flex justify-end mr-20 ">
          <button className="text-white bg-primary text-lg font-semibold rounded-full w-40 h-10">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
