import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { BsCloudSun } from "react-icons/bs";
import { BsFillCloudFog2Fill } from "react-icons/bs";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import WeatherInfo from "./WeatherInfo";
import CurrentTime from "./CurrentTime";

const Weather = () => {
  const [input, setInput] = useState("London");
  const [tempInfo, setTempInfo] = useState({});
  const [weatherIcon, setWeatherIcon] = useState(
    <BsSun size="100px" color="#FF6666" />
  );

  const getWeatherInfo = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=cca04a573177fdb854d8db5d766960ab`
      );
      const data = await res.json();

      const { temp, humidity } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { speed } = data.wind;
      const { country } = data.sys;

      const newWeatherInfo = {
        temp,
        humidity,
        weatherMood,
        speed,
        country,
      };

      setTempInfo(newWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const weatherStatus = tempInfo.weatherMood;

  useEffect(() => {
    if (weatherStatus) {
      switch (weatherStatus) {
        case "Clouds":
          setWeatherIcon(<BsCloudSun size="100px" color="#FF6666" />);
          break;
        case "Haze":
          setWeatherIcon(<BsFillCloudFog2Fill size="100px" color="#FF6666" />);
          break;
        case "Clear":
          setWeatherIcon(<BsSun size="100px" color="#FF6666" />);
          break;
        case "Mist":
          setWeatherIcon(<TiWeatherWindyCloudy size="100px" color="#FF6666" />);
          break;

        default:
          break;
      }
    }
  }, [weatherStatus]);

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div className="w-72 h-96 bg-gradient-to-tr from-[#0c0c0c] to-[#2b2727] rounded-lg border border-[#333] sm:w-96 p-5">
      <div className="w-full flex justify-between items-center">
        <div className="w-40 flex items-center justify-center py-1 rounded-lg bg-[#524e4e] sm:w-44">
          <input
            type="search"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent w-32 outline-none text-white placeholder:text-white placeholder:font-[Gilroy-bold]"
          />
          <button type="button" onClick={getWeatherInfo}>
            <AiOutlineSearch color="#fff" size="25px" />
          </button>
        </div>
        <CurrentTime />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full h-56 flex items-center justify-center flex-col">
          {weatherIcon}
          <h1 className="text-[#ada3a3] mt-3 text-sm font-[Gilroy-Light]">
            {tempInfo.weatherMood}
          </h1>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <WeatherInfo tempInfo={tempInfo} />
      </div>
    </div>
  );
};

export default Weather;
