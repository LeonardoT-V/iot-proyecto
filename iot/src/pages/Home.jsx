import HumedadTierra from "../components/HumedadTierra";
import Temperature from "../components/Temperature";
import Humedad from "../components/Humedad";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import { child, limitToLast, onValue, query } from "firebase/database";
import { database } from "../lib/firebase";

export default function Home() {
  const [data, setData] = useState({});
  const [key, setKey] = useState(0);

  useEffect(() => {
    const dbRef = query(child(database, "metrica/"), limitToLast(1));
    onValue(dbRef, (snap) => {
      console.log(snap.val());
      snap.forEach((childSnap) => {
        const childkey = childSnap.key;
        const childVal = childSnap.val();
        setKey(childkey);
        setData(childVal);
        console.log(key);
      });
    });
  }, []);

  return (
    <Container className="flex flex-col align-middle justify-center flex-grow">
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
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M12 7v5l3 3"></path>
        </svg>
        <div className="flex items-center align-middle gap-2">
          <h1 className="text-4xl text-black/80 font-bold text-center">
            RealTime Data
          </h1>
          <div className="flex gap-2 text-base  bg-cyan-900 px-3 py-1 rounded-md font-bold">
            <p className="text-white">Ultimo dato: </p>
            <span className="text-yellow-500">{key}</span>
          </div>
        </div>
      </div>
      <Container className="flex justify-center gap-16 h-full">
        <Humedad percentage={data.hum} />
        <Temperature percentage={data.temp} />
        <HumedadTierra percentage={data.earth} />
      </Container>
    </Container>
  );
}
