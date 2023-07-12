import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import ChartData from "../components/ChartData";
import { child, limitToLast, onValue, query } from "firebase/database";
import { database } from "../lib/firebase";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dbRef = query(child(database, "metrica/"), limitToLast(100));
    onValue(dbRef, (snap) => {
      const snapJson = snap.toJSON();
      const newArr = Object.entries(snapJson).map(([key, val]) => {
        return { temp: val.temp, hum: val.hum, earth: val.earth, key };
      });
      setData(newArr);
    });
  }, []);

  return (
    <Container>
      <div className="flex flex-col justify-center gap-2 items-center my-6">
        <div className="flex justify-center gap-2 items-center">
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
        <p className="text-xl text-black/50 font-bold">
          Ultimos <span className="text-yellow-500 font-bold">100</span> datos
          registrados
        </p>
      </div>

      <Container>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ChartData
            data={data}
            title="temperatura"
            toGraph="temp"
            color={"#84cc16"}
          />
          <ChartData
            data={data}
            title="humedad"
            toGraph="hum"
            color={"#0ea5e9"}
          />
          <ChartData
            data={data}
            title="humedad tierra"
            toGraph="earth"
            color={"#eab308"}
          />
        </section>
      </Container>
    </Container>
  );
}

export default Dashboard;
