import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { CardWeather } from "./components/CardWeather";
import WeatherSearch from "./components/WeatherSearch";

function App() {
  const API_KEY = "FDRZZ3722NKPELJHTFX2B8QYM";
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [searchCity, setSearchCity] = useState("Alfenas");

  const getWeather = async (city) => {
    try {
      const res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=${API_KEY}&options=beta&contentType=json`
      );
      const json = await res.json();
      setWeatherDetails(json);
    } catch (error) {
      console.error("Erro ao buscar dados meteorológicos:", error);
    }
  };

  useEffect(() => {
    getWeather(searchCity);
  }, [searchCity]);

  const handleSearch = (city) => {
    // Atualiza o estado da cidade para acionar a busca
    setSearchCity(city);
  };

  if (!weatherDetails) {
    // Renderização condicional enquanto os dados estão sendo buscados
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white h-screen p-8">
      <Header />
      <WeatherSearch onSearch={handleSearch} />
      <h2 className="text-center text-2xl mt-16 font-bold">
        {weatherDetails.resolvedAddress}
      </h2>
      <div className="container flex flex-wrap gap-2 mt-2 p-2">
        {weatherDetails?.days?.slice(1, 7).map((item, index) => (
          <CardWeather weatherData={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
