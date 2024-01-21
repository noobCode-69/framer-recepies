"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Wrapper from "@/components/wrapper";

const tabs = ["Home", "Shorts", "Subscription", "You", "History"];
const AnimatedTabs = () => {
  const [active, setActive] = useState("Home");
  return (
    <Wrapper>
      <div className="flex gap-3 p-5">
        {tabs.map((tab, index) => {
          return (
            <button
              onClick={() => setActive(tab)}
              className={`${
                active === tab ? "" : "hover:text-white/50"
              } relative py-2  px-4 rounded-full`}
              key={index}
            >
              {active === tab && (
                <motion.div
                  style={{ borderRadius: 9999 }}
                  layoutId="active-pill"
                  className="bg-white absolute  inset-0"
                ></motion.div>
              )}
              <span className={`font-medium relative z-10 mix-blend-exclusion`}>
                {tab}
              </span>
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default AnimatedTabs;
