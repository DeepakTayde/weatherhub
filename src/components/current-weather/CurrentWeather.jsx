import React from "react";
// import Icons from '../../assets/icons';

const CurrentWeather = ({ data }) => {
    // const imageUrl = `../assets/icons/${data.weather[0].icon}.png}`;

  return (
    <div className="container">
      <div className="card center mb-3 p-2" style={{ maxWidth: "540px" }}>
        <div className="row g-2 mb-0 d-flex justify-content-between align-items-center">
          <div className="col-md-8">
            <div className="card-body container-fluid">
              <h4 className="card-title">{data.city}</h4>
              <p className="card-text">{data.weather[0].description}</p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={`icons/${data.weather[0].icon}.png`} className="img-fluid rounded-start" alt="..." />
          </div>
        </div>
        <div className="row g-0 mt-0 d-flex justify-content-between align-items-center">
          <div className="col-md-7">
            <h2 className=" text-center container-fluid display-1">{Math.round(data.main.temp)}°C</h2>
          </div>
          <div className="col-md-5">
            <h4 className="card-header text-start">Details</h4>
            <div className="card-body">
              <p className="card-text ">
                <small className="d-flex justify-content-between align-items-center">
                  Feels Like <span>{Math.round(data.main.feels_like)}°C</span>
                </small>
              </p>
              <p className="card-text ">
                <small className="d-flex justify-content-between align-items-center">
                  Wind <span>{data.wind.speed}m/s</span>
                </small>
              </p>
              <p className="card-text ">
                <small className="d-flex justify-content-between align-items-center">
                  Humidity <span>{data.main.humidity}%</span>
                </small>
              </p>
              <p className="card-text ">
                <small className="d-flex justify-content-between align-items-center">
                  Pressure <span>{data.main.pressure}hPa</span>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
