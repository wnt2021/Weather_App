import React from "react";

const Weather = (props) => {
  //We get the data that was sent from the CountryWeather component
  //We use the '?' to verify is the data provided is defined so that it doesn't give error messages
  let name = props.dataWeather?.name;
  let temp = Math.trunc(props.dataWeather?.main?.temp);
  //We check if weather is defined and if it contains data if doesn't it sets the value to null
  let icon =
    props.dataWeather?.weather && props.dataWeather.weather.length > 0
      ? props.dataWeather.weather[0].icon
      : null;
  return (
    <>
      <div className="container">
        <div
          className="modal modal-sheet position-static d-block py-5"
          role="dialog"
          id="modalSheet"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content rounded-4 shadow">
              <div className="modal-header border-bottom-0 mx-auto">
                {name ? (
                  <h1 className="modal-title fs-5">{name}</h1>
                ) : (
                  <h1 className="modal-title fs-5">
                    Country name will be here
                  </h1>
                )}
              </div>
              <div className="modal-header border-bottom-0 mx-auto">
                {icon ? (
                  <img
                    src={`http://openweathermap.org/img/w/${icon}.png`}
                    alt="not found"
                  />
                ) : (
                  <h1 className="modal-title fs-5">Image will be here</h1>
                )}
              </div>
              <div className="modal-body py-0 mx-auto">
                <h1>
                  {temp ? (
                    <span className="modal-title fs-5">{temp} ºC</span>
                  ) : (
                    <span className="modal-title fs-5">
                      Temperature will be here
                    </span>
                  )}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
