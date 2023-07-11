import React from "react";

function CardsRealTime({ children, ...props }) {
  return (
    <section className="w-full flex flex-col rounded-md  gap-2">
      <header className="flex items-center justify-center">
        {props.header}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-cyan-900 h-7 w-7"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5"></path>
          <path d="M10 9l4 0"></path>
        </svg>
        <h2 className="text-xl text-center text-cyan-700">Temperatura</h2>
      </header>
      <div className="flex-grow py-4 px-8 border-dashed rounded-md border-2 border-gray-400/20">
        a
      </div>
    </section>
  );
}

export default CardsRealTime;
