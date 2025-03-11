import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Card/card";

function App() {
  const [country, setCountry] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [search, setSearch] = useState("");

  function filter(search) {
    const filterValue = country.filter((value) => {
      const country = value.common.toLowerCase();
      return country.includes(search);
    });
    setFilteredCountry(filterValue);
  }

  useEffect(() => {
    axios
      .get(
        "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
      )
      .then((data) => {
        console.log(data);
        setCountry(data.data);
        setFilteredCountry(data.data);
      })
      .catch((e) => console.error("Error fetching data:" + e.response));
  }, []);
  return (
    <div className="App">
      <div className="header">
        <input
          style={{ width: "40%", minWidth: "300px" }}
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            filter(e.target.value);
          }}
        />
      </div>
      <div className="card-container">
        {filteredCountry.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
