import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function Blog() {
  const [abc, setabc] = useState(0);

  const hello = [
    {
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww",
    },
    {
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww",
    },
  ];

  const next = () => {
    if (hello.length - 1 === abc) {
      setabc(0);
    } else {
      setabc(abc + 1);
    }
  };

  const prev = () => {
    if (abc === 0) {
      setabc(hello.length - 1);
    } else {
      setabc(abc - 1);
    }
  };

  useEffect(() => {
    let interval = setTimeout(() => {
      next();
    }, 4000);

    return () => {
      clearTimeout(interval);
    };
  }, [abc]);

  return (
    <div className=" flex justify-center items-center align-center">
      <button
        onClick={() => {
          prev();
        }}
        className="text-5xl"
      >
        <FaArrowCircleLeft />
      </button>

      <div className="h-screen w-6/12 bg-cover relative overflow-hidden">
        {hello.map((val, i) => {
          return (
            <img
              src={val.image}
              className={`${
                abc === i ? "translate-x-0" : "translate-x-full"
              } absolute top-0 left-0 transition-all ease-in-out mt-32 duration-1000 delay-150`}
            />
          );
        })}
      </div>

      <button
        onClick={() => {
          next();
        }}
        className="text-5xl"
      >
        <FaArrowCircleRight />
      </button>
      <div className="h-screen  w-6/12 bg-cover relative overflow-hidden">
        {hello.map((val, i) => {
          return (
            <div
              onClick={() => {
                setabc(i);
              }}
              className={` cursor-pointer h-4 w-4  ${i===abc?"bg-orange-400":"bg-gray-500"} rounded-full m-4  `}
            ></div>
          );
        })}
      </div>

      

    </div>
  );
}
export default Blog;
