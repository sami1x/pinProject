"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import arrowDown from "../../../public/arrowDown.svg";
import arrowDownWhite from "../../../public/arrowDownWhite.svg";
import { motion } from "framer-motion";
import TopSectionBg from "./topSectionBg";

interface ChildProps {
  handleScroll: () => void;
}

const TopSection: React.FC<ChildProps> = ({ handleScroll }) => {
  const colors = ["#c28b00", "#0076d3", "#c28b00", "#407a57"];
  const lines = [
    "new look outfit",
    "weeknight dinner idea",
    "home decor idea",
    "green thumb idea"
  ];

  const [colorNo, setColorNo] = useState(0);
  const [color, setColor] = useState("");
  const [line, setLine] = useState("");

  const changeColor = () => {
    setColorNo((prevColorNo) => (prevColorNo === 3 ? 0 : prevColorNo + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(changeColor, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setColor(colors[colorNo]);
    setLine(lines[colorNo]);
  }, [colorNo]);

  return (
    <>
      <div className="focus w-full h-screen bg-slate-700 flex flex-col snap-start">
        <div className="w-full h-full flex flex-col bg-white">
          <div className="w-full p-4 flex justify-between">
            <div className="flex items-center  gap-2 font-extrabold text-[#cc0000] px-3">
              <Image
                src={logo}
                alt="logo"
                priority
                unoptimized
                height={32}
                width={32}
              />
              <span>PinProject</span>
            </div>
            <div className="flex gap-6 items-center px-4">
              <span className="font-bold text-sm">About</span>
              <span className="font-bold text-sm">Business</span>
              <span className="font-bold text-sm">Blog</span>
              <div className="flex gap-2">
                <button className="bg-[#cc0000] h-10 px-4 rounded-full font-bold text-sm text-white">
                  Log in
                </button>
                <button className="bg-[#efefef] h-10 px-4 rounded-full font-bold text-sm text-black">
                  Sign up
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-full relative">
            <TopSectionBg />
            <div className="absolute w-full text-6xl font-bold left-1/2 top-36 -translate-x-1/2 ">
              <div className="relative w-full flex justify-center">
                Get your next
                <motion.div
                  initial={{ y: 5, opacity: 0 }}
                  animate={{
                    y: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, -10, -20],
                    opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                  style={{ color: color }}
                  className="absolute top-20 text-6xl font-bold"
                >
                  {line}
                </motion.div>
              </div>
            </div>
          </div>

          <div
            onClick={handleScroll}
            className="h-16 bg-[#FEFD92] w-full cursor-pointer flex-center font-bold relative white-shadow-top"
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={handleScroll}
              style={{ backgroundColor: color }}
              className="w-12 h-12 cursor-pointer m-auto rounded-full flex-center absolute -top-16"
            >
              <span>
                <Image src={arrowDownWhite} alt="down" height={30} width={30} />
              </span>
            </motion.div>
            Here's how it works
            <span>
              <Image src={arrowDown} alt="down" height={24} width={24} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
