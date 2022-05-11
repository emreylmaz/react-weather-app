import React,{useContext} from 'react';
import WeatherContext from "../Context/WeatherContext";
import Form from "./Form";
import Card from "./Card";

function Container() {
    const data = useContext(WeatherContext);




    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4">
            <Card/>
            </div>
            </div>
            </div>
        </div>
    );
}

export default React.memo(Container);