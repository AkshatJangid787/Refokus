import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const products = [
    {
      title: "arquitel",
      description:
        "Arqu Executive and its employees continue to receive orders for customers and get orders for customers",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "TTR Executive and its employees continue to receive orders for customers and get orders for customers",
      live: true,
      case: false,
    },
    {
      title: "YIR 2023",
      description:
        "YIR 2023 Executive and its employees continue to receive orders for customers and get orders for customers",
      live: true,
      case: true,
    },
    {
      title: "Yahoo",
      description:
        "Yahoo Executive and its employees continue to receive orders for customers and get orders for customers",
      live: true,
      case: true,
    },
    {
      title: "Bing",
      description:
        "Bing Executive and its employees continue to receive orders for customers and get orders for customers",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 20);
  };

  return (
    <div className="mt-7 relative">
      {products.map((val, index) => (
        <Product val={val} mover={mover} count={index} key={index} />
      ))}
      
      <div className="absolute top-0 w-full h-full pointer-events-none">
       
        <motion.div
          className="hidden md:block absolute w-96 h-[20rem] bg-white left-1/3 overflow-hidden"
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full bg-sky-200"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full bg-sky-400"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full bg-sky-500"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full bg-sky-600"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
