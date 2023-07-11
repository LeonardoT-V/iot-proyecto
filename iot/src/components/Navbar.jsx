import React from "react";
import { Link } from "wouter";
// import mainLogo from "./assets/logo.svg";

function Navbar() {
  return (
    <nav className="flex bg-cyan-500 py-2 px-10 items-center gap-8">
      <section className="bg-cyan-900 py-2 px-4 rounded-md flex gap-4 items-center text-white text-2xl font-bold">
        <img src="/logo.svg" className="h-8 w-8" alt="logo" />
        <h2 className="">IOT Proyect</h2>
      </section>
      <section>
        <ul className="flex gap-4">
          <Link className="text-white font-bold" href="/">
            Inicio
          </Link>
          <Link className="text-white font-bold" href="/data">
            Datos
          </Link>
          <Link className="text-white font-bold" href="/dashboard">
            Dashboard
          </Link>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
