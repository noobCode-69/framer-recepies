"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <div className="flex  items-center justify-center w-[100vw] h-[100vh]">
      <button onClick={() => router.push("/")} className="fixed top-10 left-10">
        <svg
          height="30px"
          width="30px"
          className="fill-white hover:fill-white/50"
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
        </svg>
      </button>
      {children}
    </div>
  );
};

export default Wrapper;
