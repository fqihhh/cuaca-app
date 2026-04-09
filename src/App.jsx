import { useState } from "react";
import axios from "./api/axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_KEY;
  const url = `/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        alert("Kota tidak ditemukan!");
      }
      setLocation("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 text-white flex flex-col items-center pt-24 px-4">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 tracking-wide drop-shadow-lg">
        🌤 Weather App
      </h1>

      {/* Search */}
      <div className="w-full max-w-md">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder="Cari kota..."
          className="w-full p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 
          focus:outline-none focus:ring-2 focus:ring-white transition-all placeholder:text-white/80"
        />
      </div>

      {/* Card */}
      {data.name && (
        <div className="mt-10 w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 
        rounded-3xl shadow-2xl p-8 text-center hover:scale-[1.03] transition-all duration-300">

          {/* City */}
          <h2 className="text-2xl font-light tracking-widest">
            {data.name}
          </h2>

          {/* Icon */}
          {data.weather && (
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
              alt="weather icon"
              className="mx-auto w-28"
            />
          )}

          {/* Temp */}
          <h1 className="text-7xl font-extrabold mt-2 drop-shadow-lg">
            {data.main?.temp.toFixed()}°C
          </h1>

          {/* Weather */}
          <p className="uppercase mt-2 text-white/90 tracking-widest text-sm">
            {data.weather ? data.weather[0].main : ""}
          </p>

          {/* Divider */}
          <div className="my-6 border-t border-white/30"></div>

          {/* Details */}
          <div className="flex justify-between text-sm">
            <div className="bg-white/20 px-4 py-3 rounded-xl">
              <p className="text-white/80">Humidity</p>
              <p className="text-lg font-semibold">
                {data.main?.humidity}%
              </p>
            </div>

            <div className="bg-white/20 px-4 py-3 rounded-xl">
              <p className="text-white/80">Wind</p>
              <p className="text-lg font-semibold">
                {data.wind?.speed} MPH
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;