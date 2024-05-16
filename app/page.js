// import Dashboard from "./dashboard/page";

// export default function Home() {
//   return (
//     <>
//       {/* <Dashboard /> */}

//     </>
//   );
// }

import { useState, useEffect } from "react";

const Home = () => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
};

export default Home;
