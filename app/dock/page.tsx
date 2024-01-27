"use client";
import { MotionValue, motion, useSpring } from "framer-motion";
import Wrapper from "@/components/wrapper";
import { useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MacOSDock() {
  return (
    <Wrapper>
      <div className="flex">
        <Dock />
      </div>
    </Wrapper>
  );
}

function Dock() {
  let mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => {
        mouseX.set(e.pageX);
      }}
      onMouseLeave={(e) => {
        mouseX.set(Infinity);
      }}
      className="mx-auto flex h-16  items-end gap-4 rounded-2xl bg-gray-700 px-4 pb-3"
    >
      {/* @ts-ignore */}
      {[...Array(6).keys()].map((i) => (
        <AppIcon mouseX={mouseX} key={i} />
      ))}
    </div>
  );
}

function AppIcon({ mouseX }: { mouseX: MotionValue }) {
  const ref = useRef<HTMLDivElement>(null);
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds?.x - bounds?.width / 2;
  });

  const widthSync = useTransform(distance, [-200, 0, 200], [40, 100, 40]);
  const width = useSpring(widthSync, {
    damping: 20,
    mass: 0.1,
    stiffness: 300,
  });

  return (
    <motion.div
      style={{ width }}
      ref={ref}
      className="aspect-square w-10 rounded-full bg-gray-500"
    />
  );
}
