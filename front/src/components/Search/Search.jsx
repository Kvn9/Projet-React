import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importer Link depuis React Router

function SearchBar() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getCabinet();
  }, []);

  function getCabinet() {
    fetch("http://localhost:8000/cabinet/getAllCabinet", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-md">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
        placeholder="Rechercher..."
      />
      {value && (
        <ul>
          {data
            .filter((element) =>
              element.nom.toLowerCase().includes(value.toLowerCase())
            )
            .map((cabinet, index) => (
              <li
                key={index}
                className="cursor-pointer text-black-500 hover:underline">
                {/* Utiliser Link pour rediriger vers la page /cabinets */}
                <Link to="/cabinets">{cabinet.nom}</Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
