import React, { useEffect, useState } from "react";
import { part1, part2, part3, part4 } from "./data";
import LeftChat from "./left-chat";
import RightChat from "./right-chat";

const BeeMovie = ({}) => {
  const [time, setTime] = useState(0);
  const [words, setChars] = useState(null);
  useEffect(() => {
    init();
    const timer = window.setInterval(() => {
      setTime((prevTime) => prevTime + 1); // <-- Change this line!
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const getChars = () => {
    return new Promise((resolve, reject) => {
      setChars(part1.split(/[ ]+/));
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!");
      }
    });
  };

  async function init() {
    console.log("is loading");
    await getChars();
    console.log("loaded");
  }

  return (
    <div className="flex flex-col mt-2 ml-auto space-y-3 pb-3 overflow-hidden">
      <div className="max-h-95 flex flex-col bg-white">
        <div
          id="chat"
          className="flex flex-col mt-2 overflow-y-scroll h-screen space-y-3 mb-20 pb-3 "
        >
          {words ? words.map((word) => <LeftChat message={word} />) : "Dammit"}

          <RightChat message={words} />
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 bg-gray-800 p-4 text-center">
        <p>status: {time}s</p>
        <footer className="">
          <p>
            <a
              className="underline bg-green-800 white-text"
              href="https://github.com/alpinstang/"
            >
              GitHub
            </a>
            {" | "}
            Powered by <span aria-hidden="true">🐝🐝🐝🐝🐝🐝🐝🐝🐝</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BeeMovie;
