import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const headingText = "We are here to assist with you everyday style....";
  const words = headingText.split(" ");

  return (
    <>
    <div className="hidden md:flex flex-col items-center justify-center text-center px-4">
      {/* Animated Heading */}
      <h1 className="max-w-4xl text-5xl font-bold mb-10 flex flex-wrap justify-center">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.15, // each word delayed
            }}
           
            className="mr-2"
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* Paragraph */}
      <motion.p
        className="max-w-5xl text-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: words.length * 0.15 }}
        viewport={{ once: true }}
      >
        What2Wear is an outfit maker, personal shopper, and smart wardrobe
        assistant. The app provides users with personalized suggestions on what
        to wear and what to shop for, based on their existing closet, the
        specific occasion they are dressing for, and even their mood.
      </motion.p>

      {/* Image */}
      <motion.img
        src="hero.png"
        alt=""
        className="w-[950px] h-[350px] mt-5 rounded-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: words.length * 0.15 + 0.3 }}
        viewport={{ once: true }}
      />
    </div>
    {/* mobile view */}
     <div className="md:hidden flex flex-col items-center justify-center text-center px-4">
      {/* Animated Heading */}
      <h1 className="text-5xl font-bold mb-10 flex flex-wrap justify-center ">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.15, // each word delayed
            }}
           
            className="mr-2"
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* Paragraph */}
      <motion.p
        className=" text-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: words.length * 0.15 }}
        viewport={{ once: true }}
      >
        What2Wear is an outfit maker, personal shopper, and smart wardrobe
        assistant. The app provides users with personalized suggestions on what
        to wear and what to shop for, based on their existing closet, the
        specific occasion they are dressing for, and even their mood.
      </motion.p>

      {/* Image */}
      <motion.img
        src="hero.png"
        alt=""
       className="w-full  h-40 sm:h-52 mt-5 rounded-xl "
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: words.length * 0.15 + 0.3 }}
        viewport={{ once: true }}
      />
    </div>
    </>
  );
}

export default Hero;
