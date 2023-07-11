import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { database } from "../lib/firebase";
import { child, get, push, set } from "firebase/database";

function Data() {
  const [data, setData] = useState({});
  useEffect(() => {
    /* const newPost = push(child(database, `metrica`));
    set(newPost, {
      temp: 24,
      hum: 20,
      earth: 0,
    }); */
    get(child(database, "metrica/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnap) => {
            const childkey = childSnap.key;
            const childVal = childSnap.val();
            // console.log({ childkey, childVal });
            // setData((prev) => [...prev, childSnap.val()]);
            setData(snapshot.toJSON());
          });
          console.log(data);
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  /*
    getData();
    const getData = () => {
    const wiu = [];
    return
  const hola = getData()
    .then((data) => {
      // console.log(data);
      return data;
    })
    .then((data) => data); */
  // console.log(hola);

  const createNewMetric = () => {};
  console.log(data);
  createNewMetric();
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
          <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path>
          <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>
          <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
        </svg>
        <h1 className="text-4xl text-black/80 font-bold text-center">
          Datos almacenados
        </h1>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-cyan-900 ">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-l-lg">
              TimeStamp
            </th>
            <th scope="col" className="px-6 py-3">
              Temperatura <span className="text-yellow-400">°c</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Humedad <span className="text-yellow-400">%</span>
            </th>
            <th scope="col" className="px-6 py-3 rounded-r-lg">
              Humedad suelo <span className="text-yellow-400">%</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr className="bg-white dark:bg-gray-800" key={key}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {key}
              </th>
              <td className="px-6 py-4">{value.temp} °c</td>
              <td className="px-6 py-4">{value.hum} %</td>
              <td className="px-6 py-4">{value.earth} %</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default Data;
