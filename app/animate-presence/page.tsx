"use client";

import { useState } from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import Wrapper from "@/components/wrapper";
import { motion, AnimatePresence } from "framer-motion";

let seeds = [
  { id: 1, user: "me", text: "Yo yo" },
  { id: 2, user: "them", text: "Hey! What's up?" },
  { id: 3, user: "me", text: "Nm dude. Wrapping up work soon" },
  { id: 4, user: "them", text: "Nice" },
  { id: 5, user: "me", text: "Want to lift tonight?" },
  { id: 6, user: "them", text: "Yep just about finishing up work" },
  { id: 7, user: "them", text: "Can you give me like 10" },
  { id: 8, user: "me", text: "Perf" },
  { id: 9, user: "me", text: "We hitting shoulders today?" },
  { id: 10, user: "them", text: "Yep" },
  { id: 11, user: "me", text: "Awesome!" },
  { id: 12, user: "me", text: "See you soon 💪" },
];

export default function EnterExitAnimation() {
  const [messages, setMessages] = useState(seeds);
  const [lastChangedIndex, setLastChangedIndex] = useState(null);
  function addMessage() {
    let index = Math.floor(Math.random() * messages.length);
    let newId = messages.length
      ? Math.max(...messages.map((m) => m.id)) + 1
      : 1;
    let newMessage = {
      id: newId,
      user: Math.random() > 0.5 ? "me" : "them",
      text: "Your mom said it's time to come home",
    };
    setLastChangedIndex(null);
    setMessages([
      ...messages.slice(0, index),
      newMessage,
      ...messages.slice(index),
    ]);
  }

  // @ts-ignore
  function removeMessage(message) {
    // @ts-ignore
    setLastChangedIndex(messages.indexOf(message));
    setMessages((messages) => messages.filter((m) => m.id !== message.id));
  }

  // @ts-ignore
  let animatingMessages = messages.slice(lastChangedIndex);

  return (
    <Wrapper>
      <div className="w-[450px] mx-auto flex flex-col">
        {messages.length <= 15 && (
          <div className="text-right mt-4">
            <button
              onClick={addMessage}
              className="hover:bg-gray-100 active:bg-gray-200 rounded-full inline-flex items-center justify-center p-1.5 text-gray-500 hover:text-gray-700"
            >
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>
        )}

        <ul className="w-full  mt-4 text-md">
          <AnimatePresence mode="popLayout" initial={false}>
            {messages.map((message) => (
              <motion.li
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  layout: {
                    type: "spring",
                    bounce: 0.4,
                    duration: lastChangedIndex
                      ? animatingMessages.indexOf(message) * 0.15 + 0.85
                      : 1,
                  },
                  opacity: { duration: 0.1 },
                }}
                style={{
                  originX: message.user === "me" ? 1 : 0,
                }}
                key={message.id}
              >
                <div className="py-2 flex">
                  <button
                    onClick={() => removeMessage(message)}
                    className={`${
                      message.user === "me"
                        ? "bg-blue-500 ml-auto"
                        : "bg-gray-500 mr-auto"
                    } px-3 py-1 bg-blue-500 text-white text-left rounded-full`}
                  >
                    {message.text}
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </Wrapper>
  );
}

// 1) MacOS Animation 
// 2) Sidebar Animation
// 3) Text Animation On Whole Website
// 4) Pan Animation
// 6) Gesture Based Animations , Scroll Based Animation
// 7) Learn about few hooks 
// 8) Explore