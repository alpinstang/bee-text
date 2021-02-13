import React, { useEffect, useState } from "react";
import text from "./data";

const BeeMovie = ({}) => {
  const [time, setTime] = useState(0);
  const [chars, setChars] = useState(null);
  useEffect(() => {
    if (chars === null) {
      console.log("setting chars");
      init();
    }
    const timer = window.setInterval(() => {
      setTime((prevTime) => prevTime + 1); // <-- Change this line!
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const getChars = () => {
    return new Promise((resolve, reject) => {
      const error = false;
      if (!error) {
        resolve(text.split(""));
      } else {
        reject("Error: Something went wrong!");
      }
    });
  };

  async function init() {
    await getChars().then((res) => {
      (res) => setChars(res);
    });
  }

  return (
    <div className="flex flex-col mt-2 ml-auto space-y-3 mb-20 pb-3 max-h-100 overflow-hidden">
      <div className="max-h-95 flex flex-col bg-white">
        <div
          id="chat"
          className="flex flex-col mt-2 overflow-y-scroll	space-y-3 mb-20 pb-3 "
        >
          <div className="w-max ml-auto break-all mt-2 mb-1 p-2 rounded-br-none bg-blue-500 rounded-2xl text-white text-left mr-5">
            2/10
          </div>
          <div className="w-max ml-auto break-all mt-2 mb-1 p-2 rounded-br-none bg-blue-500 rounded-2xl text-white text-left mr-5">
            But numbers can
          </div>
          <div className="other break-all mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
            Aww thx!!
          </div>
          <div className="w-max ml-auto break-all mt-2 mb-1 p-2 rounded-br-none bg-blue-500 rounded-2xl text-white text-left mr-5">
            Words can't describe how beautiful you are :)
          </div>
          <div className="other break-all mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
            Words can't decsribe how ugly you are ;)
          </div>
          <div className="other break-all mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
            Words can't decsribe how ugly you are ;)
          </div>
          <div className="other break-all mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
            Words can't decsribe how ugly you are ;)
          </div>
          <div className="other break-all mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
            Words can't decsribe how ugly you are ;)
          </div>
          <div className="other break-all mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
            Words can't decsribe how ugly you are ;)
          </div>
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
