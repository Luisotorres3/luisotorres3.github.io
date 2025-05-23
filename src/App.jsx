import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import StarryBackground from "./components/StarryBackground";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-0">
      <StarryBackground />
      {loading ? (
        <div className="w-screen h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <Home />
          <ScrollToTop />
        </>
      )}
    </div>
  );
};

export default App;
