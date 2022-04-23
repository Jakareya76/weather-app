import { useState } from "react";

const CurrentTime = () => {
  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    const time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(() => {
    updateTime();
  }, 1000);
  return <h1 className="text-white font-[Gilroy-Light]">{currentTime}</h1>;
};

export default CurrentTime;
