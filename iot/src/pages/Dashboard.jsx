import React from "react";
import Container from "../components/Container";

function Dashboard() {
  return (
    <Container>
      <div className="flex justify-center gap-2 items-center my-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-cyan-900 h-9 w-9"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 3v18h18"></path>
          <path d="M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M13 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M21 3l-6 1.5"></path>
          <path d="M14.113 6.65l2.771 3.695"></path>
          <path d="M16 12.5l-5 2"></path>
        </svg>
        <h1 className="text-4xl text-black/80 font-bold text-center">
          Dashboard
        </h1>
      </div>
    </Container>
  );
}

export default Dashboard;
