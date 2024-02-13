import { ErrorMessage, Field, Form, Formik } from "formik";
import React,{ useState } from "react";
import * as yup from 'yup'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { MdCloudUpload } from "react-icons/md";
const schema=yup.object().shape({
  fname:yup.string().required('first name is required'),
  lname:yup.string().required('last name is required'),
  address:yup.string().required('address is required'),
  email:yup.string().required('email is required'),
  number:yup.string().required('number is required'),
  upload:yup.string().required('upload is required')


})

function Contact() {
  const [value, setValue] = useState('');
  return (
    <div className="p-12 h-full w-2/4 shadow-2xl mx-auto mt-10 ">
      <div className="text-5xl text-center text-red-400 font-medium pb-12">
        Registration form
      </div>
      <Formik

      initialValues={{
        fname:'',
        lname:'',
        address:'',
        email:'',
        number:'',
        upload:''
      }}
      validationSchema={schema}
      onSubmit={(values,{resetForm})=>{
        console.log(values)
        resetForm()
      }}
      >
        {({handleSubmit,setFieldValue,values})=>{
          return(
            <Form onSubmit={handleSubmit}>
              <div className="flex items-center w-auto px-10 justify-between">
        <div className="text-xl">First Name:</div>
      <div className="grid">
      <Field
        name='fname'
          type="text"
          id="text"
          placeholder="Enter your first name"
          className="p-2 outline-none bg-gray-200 w-96"
        />
        <ErrorMessage className="text-red-600" name="fname" component={'p'} />
      </div>

      </div>
<textarea rows={10} className="w-full resize-none" placeholder="hffh"></textarea>

      <div className="flex  items-center w-auto px-10 justify-between my-7">
        <div className="text-xl">Last Name:</div>
        <div className="grid">
        <Field
        name='lname'
          type="text"
          id="text"
          placeholder="Enter your last name"
          className="p-2 outline-none bg-gray-200 w-96"
        />
        <ErrorMessage className="text-red-600" name="lname" component={'p'} />
        </div>
      </div>

      <div className="flex  items-center px-10 w-auto justify-between my-7">
        <div className="text-xl">Address:</div>
        <div className="grid">
        <Field
        name='address'
          type="text"
          placeholder="Enter your address"
          className="p-2 outline-none w-96 bg-gray-200"
        />
        <ErrorMessage className="text-red-600" name="address" component={'p'} />
        
        </div>
      </div>

      <div className="flex  items-center px-10 w-auto my-7 justify-between">
        <div className="text-xl">Email:</div>
        <div className="grid">
        <Field
          name="email"
          type="email"
          placeholder="Enter your email address"
          className="p-2 outline-none w-96 bg-gray-200"
        />
        <ErrorMessage className="text-red-600" name="email" component={'p'} />

        </div>
      </div>

      <div className="flex  items-center px-10 w-auto justify-between">
        <div className="text-xl">Number:</div>
        <div className="grid">
        <Field
        name="number"
          type="text"
          placeholder="Enter your phone number"
          className="p-2 outline-none w-96 bg-gray-200"
        />
        <ErrorMessage className="text-red-600" name="number" component={'p'} />

      </div>
      </div>

      <div className="flex items-center px-10 w-auto my-7 justify-between">
        <div className="text-xl">Certificate:</div>
        <div className="grid w-96 bg-gray-200">
        <input
        accept="image/png"
        name="upload"
        id="upload"
          type="file"
          onChange={(e)=>{
            setFieldValue('upload',e.target.files[0])
          }}
          placeholder="Enter your email address"
          className="p-2 hidden outline-none w-auto bg-gray-200"
        />
        <ErrorMessage className="text-red-600" name="upload" component={'p'} />
<label htmlFor="upload">
{
values.upload ? <img src={URL.createObjectURL(values.upload)} />:
<div className="h-24 w-auto flex items-center justify-center text-3xl"><MdCloudUpload /></div>
}
</label>
        </div>
      </div>
      <ReactQuill className="h-44" theme="snow" value={value} onChange={setValue} />

      <div className="px-10">
        <button
          type="submit"
          className="bg-green-600 h-12 my-14 w-40 text-xl  text-white hover:bg-green-500"
        >
          Submit
        </button>
      </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  );
}

export default Contact;
