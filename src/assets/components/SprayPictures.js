import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const SprayPictures = () => {
  const [nbr1, setNbr1] = useState();
  const [nbr2, setNbr2] = useState();
  const [nbr3, setNbr3] = useState();
  const [nbr4, setNbr4] = useState();

  useEffect(() => {
    setNbr1(Math.floor(Math.random() * 150 * (Math.random() > 0.4 ? 1 : -1)));
    setNbr2(Math.floor(Math.random() * 150 * (Math.random() > 0.4 ? 1 : -1)));
    setNbr3(Math.floor(Math.random() * 150 * (Math.random() > 0.4 ? 1 : -1)));
    setNbr4(Math.floor(Math.random() * 150 * (Math.random() > 0.4 ? 1 : -1)));
  }, []);

  const transition = {
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop",
    duration: 10,
  };
  return (
    <div className="spray">
      <motion.img
        src="./assets/images/fanbase-1.jpg"
        alt="fanbase-1"
        style={{ width: "60%" }}
        animate={{
          x: [nbr1, nbr2, nbr3, nbr4, nbr1],
          y: [nbr2, nbr3, nbr4, nbr1, nbr2],
        }}
        transition={transition}
      />

      <motion.img
        src="./assets/images/fanbase-2.jpg"
        alt="fanbase-2"
        style={{ width: "80%" }}
        animate={{
          x: [nbr2, nbr3, nbr4, nbr1, nbr2],
          y: [nbr1, nbr2, nbr3, nbr4, nbr1],
        }}
        transition={transition}
      />
      <motion.img
        src="./assets/images/about-us-dj-img.jpg"
        alt="fanbase-4"
        style={{ width: "60%" }}
        animate={{
          x: [nbr3, nbr1, nbr2, nbr4, nbr3],
          y: [nbr4, nbr3, nbr4, nbr1, nbr4],
        }}
        transition={transition}
      />
      <motion.img
        src="./assets/images/fanbase-3.jpg"
        alt="fanbase-3"
        style={{ width: "80%" }}
        animate={{
          x: [nbr2, nbr1, nbr4, nbr4, nbr2],
          y: [nbr1, nbr4, nbr3, nbr2, nbr1],
        }}
        transition={transition}
      />
      <motion.img
        src="./assets/images/fanbase-5.jpg"
        alt="fanbase-5"
        style={{ width: "70%" }}
        animate={{
          x: [nbr1, nbr4, nbr2, nbr4, nbr1],
          y: [nbr4, nbr3, nbr2, nbr4, nbr4],
        }}
        transition={transition}
      />
      <motion.img
        src="./assets/images/fanbase-6.jpg"
        alt="fanbase-6"
        style={{ width: "80%" }}
        animate={{
          x: [nbr3, nbr1, nbr3, nbr4, nbr3],
          y: [nbr2, nbr4, nbr1, nbr3, nbr2],
        }}
        transition={transition}
      />
    </div>
  );
};

export default SprayPictures;
