"use client";
import { motion } from "framer-motion";
import Wrapper from "@/components/wrapper";
import { useState } from "react";

type OrderBy = null | "like" | "view";

const content = [
  {
    like: 5,
    view: 20,
  },
  {
    like: 7,
    view: 15,
  },
  {
    like: 9,
    view: 9,
  },
  {
    like: 11,
    view: 20,
  },
  {
    like: 2,
    view: 11,
  },
  {
    like: 5,
    view: 13,
  },
  {
    like: 3,
    view: 19,
  },
  {
    like: 1,
    view: 9,
  },
  {
    like: 7,
    view: 8,
  },
];

const sort = (
  data: { like: number; view: number }[],
  order: OrderBy | null
): { like: number; view: number }[] => {
  if (order === "like") {
    return [...data].sort((a, b) => a.like - b.like);
  } else if (order === "view") {
    return [...data].sort((a, b) => a.view - b.view);
  } else {
    return [...data];
  }
};

const ReorderingAnimations = () => {
  const [order, setOrder] = useState<OrderBy>(null);

  const displayOrder = sort(content, order);

  return (
    <Wrapper>
      <div className="flex gap-10 flex-col p-5 text-gray-400">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setOrder(null)}
            className="py-1 px-3 rounded-md bg-white/80 text-black hover:bg-white/50"
          >
            Default
          </button>
          <button
            onClick={() => setOrder("like")}
            className="py-1 px-3  rounded-md bg-white/80 text-black hover:bg-white/50"
          >
            Like
          </button>
          <button
            onClick={() => setOrder("view")}
            className="py-1 px-3  rounded-md bg-white/80 text-black hover:bg-white/50"
          >
            View
          </button>
        </div>
        <div className="grid grid-cols-3 grid-flow-row gap-4 max-w-[500px]">
          {displayOrder.map((item, index) => {
            return (
              <motion.div
                className="p-7 group bg-black hover:cursor-pointer rounded-xl border-2 border-gray-500 flex flex-col gap-1"
                key={JSON.stringify(item)}
                layout
              >
                <span className="group-hover:italic">Likes : {item.like}</span>
                <span className="group-hover:italic">Views : {item.view} </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default ReorderingAnimations;
