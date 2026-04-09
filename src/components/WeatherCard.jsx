export default function WeatherCard({ data }) {
  return (
    <div className="mt-10 bg-white/10 p-10 rounded-3xl backdrop-blur-md text-center shadow-xl">
      <h1 className="text-3xl">{data.name}</h1>

      <h2 className="text-7xl font-bold mt-4">
        {data.main?.temp.toFixed()}°C
      </h2>

      <p className="text-blue-300 mt-2 uppercase">
        {data.weather[0].main}
      </p>

      <div className="flex justify-between mt-6 gap-10">
        <div>
          <p className="text-gray-300">Kelembapan</p>
          <p className="font-bold">{data.main?.humidity}%</p>
        </div>
        <div>
          <p className="text-gray-300">Angin</p>
          <p className="font-bold">{data.wind?.speed} MPH</p>
        </div>
      </div>
    </div>
  );
}
