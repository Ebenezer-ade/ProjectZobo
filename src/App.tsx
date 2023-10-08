import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AdviceCard from "./components/AdviceCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <AdviceCard />
      </div>
    </>
  );
}

export default App;
