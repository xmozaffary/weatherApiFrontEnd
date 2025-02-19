import { useEffect, useState } from "react";
import { get } from "../service/serviceBase";
import { IWeatherResponse } from "../model/IWeatherResponse";

export const Home = () => {
  const [weather, seyWeather] = useState<IWeatherResponse | null>(null);

  useEffect(() => {
    const getCoordinates = async () => {
      const res = await get<IWeatherResponse>(
        "http://localhost:8080/weather/uppsala"
      );

      seyWeather(res);
    };

    console.log("test");
    console.log(weather?.name);

    getCoordinates();
  }, []);

  return (
    <>
      <main className="home">
        {weather && (
          <>
            <p>{weather.name}</p>
          </>
        )}
      </main>
    </>
  );
};
