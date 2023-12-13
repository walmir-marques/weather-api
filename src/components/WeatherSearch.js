import React, { useState, useEffect } from "react";

const WeatherSearch = ({ onSearch }) => {
  const [cityName, setCityName] = useState("");

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearch = () => {
    // Chama a função de pesquisa passando o nome da cidade
    onSearch(cityName);
  };

  useEffect(() => {
    // Atualiza a busca sempre que o nome da cidade mudar
    handleSearch();
  }, [cityName, onSearch]);

  return (
    <div className="mb-4 mt-8">
      <label
        htmlFor="cityInput"
        className="block text-sm font-bold text-gray-700"
      >
        City Name:
      </label>
      <input
        type="text"
        id="cityInput"
        name="cityInput"
        value={cityName}
        onChange={handleInputChange}
        className="mt-1 p-2 border rounded-md w-full border-gray-400"
        placeholder="Enter the city name ... "
      />
    </div>
  );
};

export default WeatherSearch;
