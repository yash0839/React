
import React, { useState } from 'react';

function Weather() {

  const API_KEY = '06dc5a4b6e0f4675ad89cc775780a1c4';

  const [city, setCity] = useState('Pune');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeather = async () => {

    try {
      setLoading(true);
      setError('');
      setWeather(null);

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

      const response = await fetch(url);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Weather not found');
      }

      setWeather(data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="container py-5">
  <div className="card shadow p-4 mx-auto" style={{ maxWidth: '450px' }}>

    <h2 className="text-center mb-4">Weather App</h2>

    <input
      type="text"
      className="form-control mb-3"
      placeholder="Enter city name"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />

    <button
      className="btn btn-primary w-100"
      onClick={getWeather}
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Get Weather'}
    </button>

    {error && (
      <div className="alert alert-danger mt-3">
        {error}
      </div>
    )}

    {weather && (
      <div className="text-center mt-4">
        <h3>{weather.name}</h3>

        <h1 className="display-3 fw-bold">
          {Math.round(weather.main.temp)}°C
        </h1>

        <p className="text-capitalize">
          {weather.weather[0].description}
        </p>

        <div className="row mt-3">
          <div className="col-6">
            <div className="bg-light rounded p-3">
              <h6>Humidity</h6>
              <h5>{weather.main.humidity}%</h5>
            </div>
          </div>

          <div className="col-6">
            <div className="bg-light rounded p-3">
              <h6>Wind Speed</h6>
              <h5>{weather.wind.speed} m/s</h5>
            </div>
          </div>
        </div>
      </div>
    )}

  </div>
</div>
  );
}

export default Weather;
