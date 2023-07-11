import Navbar from "./components/Navbar";
import { Route } from "wouter";
import Home from "./pages/Home";
import Data from "./pages/Data";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Route path="/" component={Home}></Route>
      <Route path="/data" component={Data}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
    </div>
  );
}

export default App;
