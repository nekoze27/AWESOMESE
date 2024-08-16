import { useState, useEffect } from "react";
import axios from "axios";
import { WeatherData } from "../types/TodoTypes";

function WeatherSection() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const API_TOKEN = "1f68c3a164fff5e01ee00574dd3c0fef";

  const now = new Date();
  const year = now.getFullYear() + 1;
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const day = weekdays[now.getDay()];

  useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: "Tokyo",
        appid: API_TOKEN,
        units: "metric",
        lang: "ja",
      },
    })
    .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log("天気情報が取得できません", error);
      });
  }, []);

  return (
    <div className="weather-section mb-4">
      {weatherData ? (
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h5 className="text-center">
                {weatherData.name}の天気は{weatherData.main.temp}度
              </h5>
              <p className="card-text">
                湿度は{weatherData.main.humidity}%
              </p>
              <p className="card-text">
                {year}年{month}月{date}日({day})曜日
              </p>
              <p className="card-text">
                現在の時刻は{hour}時{minute}分です。
              </p>
            </div>
          </div>
        </div>
        ) : (
            <p>天気情報を取得中...</p>
        )}
    </div>
  );
};

export default WeatherSection;