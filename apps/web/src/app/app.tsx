import { useState, useEffect } from 'react';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string | null;
}

// Use Vite proxy if available, otherwise fall back to direct API URL
const API_URL = import.meta.env.VITE_API_URL || '/api';

export function App() {
  const [weather, setWeather] = useState<WeatherForecast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/weather`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="app-container">Loading weather data...</div>;
  }

  if (error) {
    return (
      <div className="app-container">
        <p>Error loading weather: {error}</p>
        <p>Make sure the API is running at http://localhost:5000</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1>Weather Forecast</h1>
      <div className="weather-grid">
        {weather.map((forecast, index) => (
          <div key={index} className="weather-card">
            <h2>{new Date(forecast.date).toLocaleDateString()}</h2>
            <p className="temperature">
              {forecast.temperatureC}°C / {forecast.temperatureF}°F
            </p>
            <p className="summary">{forecast.summary || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

