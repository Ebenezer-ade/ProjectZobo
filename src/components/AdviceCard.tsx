import React, { useEffect } from "react";
import "../App.css";
import dice from "../assets/images/icon-dice.svg";
import axios from "axios";
import { useState } from "react";

interface Advice {
  id: number;
  advice: string;
}

const AdviceCard = () => {
  const [advices, setAdvices] = useState([]);
  const [ids, setIds] = useState([]);
  const [randno, setRandno] = useState(1);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      setAdvices(res.data.slip.advice);
      setIds(res.data.slip.id);
      setLoading(false);
    });
  }, [randno]);
  return (
    <>
      <div className="bg-dark-blues flex flex-col items-center justify-center h-screen font-manrope">
        <div className="bg-dark-grayish-blues w-[85vw] md:w-[75vw] lg:w-[80vw] mx-[7.5vw] md:mx-[12.5vw] rounded-[1.8vw] flex flex-col items-center justify-center px-[4vw] md:px-[2.8vw] lg:px-[2vw] pt-[6vw] md:pt-[4.2vw] lg:pt-[3vw] text-[6.5vw] md:text-[4.5vw]  lg:text-[3.25vw]">
          <div className="mb-[6vw] md:mb-[4.2vw] lg:mb-[3vw] text-[3.5vw] md:text-[2.45vw] lg:text-[1.75vw] text-neon-greens tracking-[0.8vw] md:tracking-[0.56vw] lg:tracking-[0.4vw] flex flex-row select-none">
            {isLoading || <div>Advice #</div>}
            {isLoading && (
              <div
                className="h-[3.5vw] md:h-[2.45vw] w-[3.5vw] md:w-[2.45vw] animate-spin rounded-full border-4 border-double border-current border-r-transparent"
                role="status"
              ></div>
            )}
            {isLoading || <div>{ids}</div>}
          </div>
          <div className="mb-[5vw] md:mb-[3.5vw] lg:mb-[2.5vw] tracking-[-0.2vw] md:tracking-[-0.14vw] lg:tracking-[-0.1vw] text-light-cyans text-center flex flex-row selection:bg-light-cyans selection:text-dark-grayish-blues">
            <div>
              {isLoading && (
                <div
                  className="h-[6.5vw] md:h-[4.5vw] w-[6.5vw] md:w-[4.5vw] animate-spin rounded-full border-4 border-double border-current border-r-transparent"
                  role="status"
                ></div>
              )}
            </div>
            {isLoading || <div>" {advices} "</div>}
          </div>
          <div className="flex flex-row gap-[3vw] md:gap-[2.1vw] lg:gap-[1.5vw]">
            <div className="border-t-[0.2vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] w-[28vw] md:w-[23.6vw] lg:w-[30vw] border-light-cyans"></div>
            <div className="flex flex-row gap-[2vw] md:gap-[1.4vw]">
              <div className=" border-[2.8vw] md:border-[1.96vw] lg:border-[1.4vw] rounded-[0.78vw] md:rounded-[0.54vw] lg:rounded-[0.39vw] border-double border-neon-greens"></div>
              <div className=" border-[2.8vw] md:border-[1.96vw] lg:border-[1.4vw] rounded-[0.78vw] md:rounded-[0.54vw] lg:rounded-[0.39vw] border-double border-light-cyans"></div>
            </div>
            <div className="border-t-[0.2vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] w-[28vw] md:w-[23.6vw] lg:w-[30vw] border-neon-greens"></div>
          </div>
          <div className="relative top-[7vw] md:top-[4.9vw] lg:top-[3.5vw] select-none">
            <div className="">
              <button
                className="bg-neon-greens w-[14vw] md:w-[9.8vw] lg:w-[7vw] h-[14vw] md:h-[9.8vw] lg:h-[7vw] mx-[7.5vw] md:mx-[5.25vw] lg:mx-[3.75vw] rounded-full flex flex-col items-center justify-center hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.9)] hover:shadow-neon-greens cursor-pointer"
                onClick={() => {
                  setRandno(randno + 1);
                }}
              >
                <img
                  className="w-[7vw] md:w-[4.9vw] lg:w-[3.5vw]"
                  src={dice}
                  alt="A dice"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 pb-[4.2vw] text-light-cyans underline-offset-4 md:pb-[1.2vw] text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] nsm:text-[13px] lg:text-[15px] xl:text-[1vw]">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="underline text-neon-greens tracking-wide"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://linkedin.com/in/rerel-oluwa-tooki-b53396253/"
            target="_blank"
            className="underline text-neon-greens tracking-wide"
          >
            Rere Tooki
          </a>
          .
        </div>
      </div>
    </>
  );
};

export default AdviceCard;
