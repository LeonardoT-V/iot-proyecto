import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function Humedad({ percentage }) {
  // const [percentage, setUpdate] = useState(data);

  /* useEffect(() => {
    const interval = setInterval(() => {
      setUpdate(Math.floor(Math.random() * 100 + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []); */

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
          <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z"></path>
        </svg>
        <h2 className="text-xl text-center text-white">Humedad Ambiente</h2>
      </header>
      <div className="flex-grow py-4 px-8 border-dashed border-t-0 rounded-md rounded-t-none border-2 border-gray-400/20">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "rgb(0 0 0 / 0.8)",
            trailColor: "rgb(209 213 219/ 0.2)",
          })}
        />
        <div className="flex justify-around mt-4 text-black/80">
          <p>min: 0%</p>
          <p>max: 100%</p>
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

export default Humedad;
