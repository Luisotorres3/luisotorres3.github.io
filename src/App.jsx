import React from "react";
import Loader from "./components/Loader";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Loader />
    </div>
  );
};

export default App;
