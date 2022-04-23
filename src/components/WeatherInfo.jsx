import { BsFlagFill } from "react-icons/bs";
import { BsDroplet } from "react-icons/bs";
import { FiWind } from "react-icons/fi";

const WeatherInfo = ({ tempInfo }) => {
  const { temp, humidity, speed, country } = tempInfo;

  return (
    <>
      <div className="flex flex-col items-start">
        <div className="flex items-center justify-center">
          <BsFlagFill color="#fff" />
          <h1 className="text-white font-[Gilroy-Light] ml-2">{country}</h1>
        </div>
        <div className="flex items-center justify-center">
          <FiWind color="#fff" />
          <h1 className="text-white font-[Gilroy-Light] ml-2">{speed} km/h</h1>
        </div>
        <div className="flex items-center justify-center">
          <BsDroplet color="#fff" />
          <h1 className="text-white font-[Gilroy-Light] ml-2">{humidity}%</h1>
        </div>
      </div>
      <div className="flex">
        <h1 className="text-7xl text-white font-[Gilroy-Light]">{temp}</h1>
        <span className="text-white text-xl">o</span>
      </div>
    </>
  );
};

export default WeatherInfo;
