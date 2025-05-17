import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import StarryBackground from "./components/StarryBackground";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StarryBackground />
      {loading ? (
        <div className="w-screen h-screen flex items-center justify-center bg-black">
          <Loader />
        </div>
      ) : (
        <Home />
      )}
    </>
  );
};

export default App;
