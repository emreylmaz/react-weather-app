import React from 'react';
import WeatherContext from "../Context/WeatherContext";
import Form from "./Form";

function Card() {
    const data = React.useContext(WeatherContext);
    return (
        <div className="card card-style">
            <div className="card-body p-4">
                <div className="d-flex text-center">
                    <h1 className="flex-grow-1">{data.location.name}/{data.location.country}</h1>
                </div>
                <div className="d-flex flex-column text-center mt-5 mb-4">
                    <h6 className="display-4 mb-0 font-weight-bold text-style-c" > {data.temp.temp_c} °C </h6>
                </div>
                <div className="d-flex flex-column text-center mt-5 mb-4">
                    <h6 className="display-4 mb-0 font-weight-bold text-style-c" > {data.location.localtime} </h6>
                </div>
                <div className="d-flex justify-content-center text-center" >
                    <img src={data.icon.icon} />
                </div>
                <Form />

            </div>
        </div>
    );
}

export default Card;