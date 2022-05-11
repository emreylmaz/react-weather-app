import './App.css';
import WeatherContext, {WeatherProvider} from "./Context/WeatherContext";
import Container from "./components/Container";

function App() {
  return (
    <WeatherProvider>
      <div className="app-bg vh-100">
       <Container />
      </div>
    </WeatherProvider>
  );
}

export default App;
