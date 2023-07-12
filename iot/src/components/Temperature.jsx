// import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import React, { useEffect, useState } from "react";

/* const config = {
  id: 0, // important
  percent: 50,
  colorSlice: "#E91E63",
}; */

function Temperature({ percentage }) {
  return (
    <section className="w-full flex flex-col rounded-md gap-2 hover:scale-105 transition-all">
      <header className="flex items-center justify-center bg-cyan-900 py-3 rounded-md gap-1 rounded-b-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-cyan-400 h-7 w-7"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5"></path>
          <path d="M10 9l4 0"></path>
        </svg>
        <h2 className="text-xl text-center text-white">Temperatura Ambiente</h2>
      </header>
      <div className="flex-grow py-4 px-8 border-dashed border-t-0 rounded-md rounded-t-none border-2 border-gray-400/20">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}°c`}
          minValue={-20}
          maxValue={40}
          styles={buildStyles({
            pathColor: "rgb(190 242 100 / 1)",
            textColor: "rgb(0 0 0 / 0.8)",
            trailColor: "rgb(209 213 219/ 0.2)",
          })}
        />
        <div className="flex justify-around mt-4 text-black/80">
          <p>min: -20°c</p>
          <p>max: 40°c</p>
        </div>

        <div className="flex justify-center items-center gap-1 mt-4 text-black/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-cyan-700 h-5 w-5"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"></path>
            <path d="M8 10v-2h2m6 6v2h-2m-4 0h-2v-2m8 -4v-2h-2"></path>
            <path d="M3 10h2"></path>
            <path d="M3 14h2"></path>
            <path d="M10 3v2"></path>
            <path d="M14 3v2"></path>
            <path d="M21 10h-2"></path>
            <path d="M21 14h-2"></path>
            <path d="M14 21v-2"></path>
            <path d="M10 21v-2"></path>
          </svg>
          <p className="text-sm text-black/60">DH-11</p>
        </div>
      </div>
    </section>
  );
}

export default Temperature;
