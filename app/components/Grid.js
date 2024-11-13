"use client";
import { useState } from "react";
import Card from "./Card";
import Map from "./Map";

const Grid = ({ properties, slugs }) => {
  const [houses, setHouses] = useState(properties);
  const [input, setInput] = useState("");
  const [locations, setLocations] = useState(houses.map((h) => h.location));

  const setInputAndLocation = (value) => {
    setInput(value);
    setHouses(properties.filter((p) => p.name.toLowerCase().includes(value)));
    setLocations(houses.map((h) => h.location));
  };

  return (
    <>
      <div className="search-bar">
        <input
          placeholder="Search location"
          value={input}
          onChange={(e) => setInputAndLocation(e.target.value)}
        />
      </div>
      <main>
        <article>
          <Map locations={locations} slugs={slugs} />
        </article>
        <article className="listings">
          <div className="card-container">
            {houses.map((p) => (
              <Card key={p.id} p={p} />
            ))}
          </div>
        </article>
      </main>
    </>
  );
};

export default Grid;
