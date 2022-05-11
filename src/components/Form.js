import React,{ useContext,useMemo } from 'react';
import { useFormik } from 'formik';
import WeatherContext from "../Context/WeatherContext";


function Form() {
    const { setCity } = useContext(WeatherContext);

    const formik = useFormik(
        {
            initialValues: {
                cityName: ''
            },
            onSubmit: (values) => {
                setCity(values.cityName);
            }
        }
    )

    return (
        <div className="mt-4 align-middle">
            <form className="row g-3"  onSubmit={formik.handleSubmit}>
                <div className="col-auto">
                <input className="form-input"
                       type="text"
                       name="cityName"
                       onChange={formik.handleChange}
                       value={formik.values.cityName}
                       placeholder="Enter city name"
                />
                </div>
                 <div className="col-auto">
                <button className="btn btn-secondary" type="submit">Show</button>
                </div>

            </form>
        </div>
    );
};

export default React.memo(Form);
