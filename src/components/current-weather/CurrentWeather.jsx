import React from "react";
// import Icons from '../../assets/icons';

const CurrentWeather = ({ data }) => {
    const imageUrl = `../assets/icons/${data.weather[0].icon}.png}`;

  return (
    <div className="container">
      <div className="card center mb-3 p-2" style={{ maxWidth: "420px" }}>
        <div className="row g-2 mb-0 d-flex justify-content-between align-items-center">
          <div className="col-md-8">
            <div className="card-body container-fluid">
              <h4 className="card-title">{data.city}</h4>
              <p className="card-text">{data.weather[0].description}</p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
          </div>
        </div>
        <div className="row g-0 mt-0 d-flex justify-content-between align-items-center">
          <div className="col-md-7">
            <h2 className=" text-center container-fluid display-1">18°C</h2>
          </div>
          <div className="col-md-5">
            <h4 className="card-header text-start">Details</h4>
            <div className="card-body">
              <p className="card-text ">
                <small className="d-flex justify-content-between align-items-center">
                  Feels Like <span>16°C</span>
                </small>
              </p>
              <p className="card-text ">
                <small className="d-flex justify-content-between align-items-center">
                  Wind <span>2m/s</span>
                </small>
              </p>
              <p className="card-text ">
                <small className="d-flex justify-content-between align-items-center">
                  Humidity <span>15%</span>
                </small>
              </p>
              <p className="card-text ">
                <small className="d-flex justify-content-between align-items-center">
                  Pressure <span>15hpa</span>
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
