import { createContext,useState ,useEffect} from "react"
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState('Aydin');
    const [temp, setTemp] = useState({});
    const [icon, setIcon] = useState({});
    const [location, setLocation] = useState({});


    useEffect(() => {
        axios(`https://api.weatherapi.com/v1/current.json?key=be7f3488647f49fe899122919221105&q=${city}&aqi=yes`)
            .then((res)=>setTemp(res.data.current))
    } ,[city]);


    useEffect(() => {
        axios(`https://api.weatherapi.com/v1/current.json?key=be7f3488647f49fe899122919221105&q=${city}&aqi=yes`)
            .then((res)=>setIcon(res.data.current.condition))
    } ,[city]);


    useEffect(() => {
        axios(`https://api.weatherapi.com/v1/current.json?key=be7f3488647f49fe899122919221105&q=${city}&aqi=yes`)
            .then((res)=>setLocation(res.data.location))
    } ,[city]);

    const data = {temp,location,icon,setCity};

    //Context Provider
    return <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>

}


export default WeatherContext;