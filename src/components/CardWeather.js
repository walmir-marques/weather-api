import React from "react";

// condiitons
// datetiem
// description
// tempmax
//temp min

export const CardWeather = ({ weatherData }) => {
  const minTemp = Math.trunc(((weatherData.tempmin - 32) * 5) / 9);
  const maxTemp = Math.trunc(((weatherData.tempmax - 32) * 5) / 9);

  console.log(weatherData);

  return (
    <>
      <div className="h-full w-full md:w-[400px] md:mx-auto mt-4 p-4 bg-gray-100">
        <h2 className="text-2xl font-bold text-center">
          {weatherData.datetime}
        </h2>
        <div className="grid grid-rows-2 grid-flow-col gap-2 mt-4 h-3/4">
          <div className=" row-span-2 flex items-center justify-center text-7xl">
            <img src={`assets/${weatherData.icon}.png`} alt=""></img>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <div className="text-gray-400 text-1xl">Min </div>
            <div className="text-black font-bold">{minTemp}°C </div>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <div className="text-gray-400 text-1xl">Rain </div>
            <div className="text-black font-bold">{weatherData.precip} mm </div>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <div className="text-gray-400 text-1xl">Max </div>
            <div className="text-black font-bold">{maxTemp}°C </div>
          </div>

          <div className=" flex flex-col justify-center items-center">
            <div className="text-gray-400 text-1xl">Prob. Chuva % </div>
            <div className="text-black font-bold">
              {weatherData.precipprob}%
            </div>
          </div>
        </div>
        <div className="text-1xl font-bold text-center mt-2">
          {weatherData.description}
        </div>
      </div>
    </>
  );
};
