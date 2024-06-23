"use client";

import Image from "next/image";
import car from "@/assets/car.jpg";
import { motion } from "framer-motion";

const MotionCar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={car}
        width={750}
        height={750}
      />
    </motion.div>
  );
};

export default MotionCar;
