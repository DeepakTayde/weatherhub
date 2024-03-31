import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  console.log("forecastDays: ", data);

  return (
    <div className="container mt-2">
      <h2 className=" d-flex justify-content-center align-items-center ">
        Daily
      </h2>
      <div className="row align-items-center justify-content-between">
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div
                    className="card mh-100 "
                    style={{ maxWidth: "540px", maxHeight: "50px" }}
                  >
                    <div className="row g-3 ">
                      <div className="col-md-3 justify-content-center align-items-center">
                        <img
                          src={`icons/${item.weather[0].icon}.png`}
                          className=" img-fluid  object-fit-cover rounded-start"
                          alt="..."
                          style={{ width: "60px", Height: "60px" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div className="card-body d-flex flex-row justify-content-between align-items-center">
                          <h5 className="card-title">{forecastDays[idx]}</h5>
                          <label className="card-text">
                            {item.weather[0].description}
                          </label>
                          <label className="card-text">
                            {Math.round(item.main.temp_min)}°C /
                            {Math.round(item.main.temp_max)}°C
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className=" justify-content-start">
                <div class="container mt-0 m-1  justify-content-center align-items-baseline">
                  <div class="row">
                    <div class="col-6">
                      {" "}
                      <div class="row">
                        <div class="col-8">Pressure : </div>
                        <div class="col-4">{item.main.pressure}hPa</div>
                      </div>
                    </div>
                    <div class="col-6">
                      {" "}
                      <div class="row">
                        <div class="col-8">Humidity : </div>
                        <div class="col-4">{item.main.humidity}%</div>
                      </div>
                    </div>
                    <div class="col-6">
                      {" "}
                      <div class="row">
                        <div class="col-8">Clouds : </div>
                        <div class="col-4">{item.clouds.all}%</div>
                      </div>
                    </div>
                    <div class="col-6">
                    {" "}
                    <div class="row">
                      <div class="col-8">Speed : </div>
                      <div class="col-4">{item.wind.speed}m/s</div>
                    </div>
                  </div>
                  <div class="col-6">
                    {" "}
                    <div class="row">
                      <div class="col-8">Sea Level : </div>
                      <div class="col-4">{item.main.sea_level}m</div>
                    </div>
                  </div>
                  <div class="col-6">
                    {" "}
                    <div class="row">
                      <div class="col-8">Feels Like : </div>
                      <div class="col-4">{Math.round(item.main.feels_like)}°C</div>
                    </div>
                  </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Forecast;
