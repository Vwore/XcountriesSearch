import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Card/card";

function App() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    axios
      .get("https://xcountries-backend.azurewebsites.net/all")
      .then((data) => {
        console.log(data);
        setCountry(data.data);
      })
      .catch((e) => console.error(e));
  }, []);
  return <div className="App">
    <div className="card-container">
      {country.map((data)=>(<Card data={data}/>))}
    </div>
   
  </div>;
}

export default App;
