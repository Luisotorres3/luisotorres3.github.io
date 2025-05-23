import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import StarryBackground from "./components/StarryBackground";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period with a fixed duration.
    // This ensures the loader is visible for at least 1000ms,
    // which can be for aesthetic reasons or as a placeholder for future
    // asynchronous data fetching logic.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    // Cleanup function: Clears the timeout if the component unmounts
    // before the timeout completes, preventing potential memory leaks or errors.
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
