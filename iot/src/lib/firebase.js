// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIquRkQWPyZLe3fM3uwRKfoXYmnVyIxx8",
  authDomain: "iot-proyecto-57bb3.firebaseapp.com",
  databaseURL: "https://iot-proyecto-57bb3-default-rtdb.firebaseio.com",
  projectId: "iot-proyecto-57bb3",
  storageBucket: "iot-proyecto-57bb3.appspot.com",
  messagingSenderId: "69874113242",
  appId: "1:69874113242:web:38246cfb808d4346ef23e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = ref(getDatabase(app));

/* const holaMundo = ref(database, "metric/");
onValue(holaMundo, (snap) => {
  const data = snap.val();
  console.log(data);
}); */
