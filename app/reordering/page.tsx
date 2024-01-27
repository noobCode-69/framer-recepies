"use client";
import { motion } from "framer-motion";
import Wrapper from "@/components/wrapper";
import { useState, useEffect } from "react";
import { shuffle } from "lodash";

const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];

const spring = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

const ReorderingAnimations = () => {
  const [colors, setColors] = useState(initialColors);

  return (
    <Wrapper>
      <div>
        <button
          onClick={() => setColors(shuffle(colors))}
          className="mb-10 py-1 px-5 bg-white hover:bg-white/50 rounded-[999px] text-black"
        >
          Shuffle
        </button>
        <ul className="flex w-[400px] flex-wrap list-none">
          {colors.map((background) => (
            <motion.li
              className="rounded-[10px] mb-[20px] mr-[20px] w-[140px] h-[140px]"
              key={background}
              layout
              transition={spring}
              style={{ background }}
            />
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default ReorderingAnimations;
