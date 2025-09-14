import React, { useState } from "react";
import RideCard from "./RideCard";

const initialRides = [
  { id: "rapido", name: "🚲 Rapido Bike", brand: "rapido", capacity: 1 },
  { id: "uber", name: "🚗 Uber Mini", brand: "uber", capacity: 4 },
  { id: "ola", name: "🚘 Ola Auto", brand: "ola", capacity: 3 },
];

export default function App() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [results, setResults] = useState([]);

  function generateRides() {
    return initialRides.map((ride) => ({
      ...ride,
      fare: Math.floor(Math.random() * 50) + 40,
      eta: Math.floor(Math.random() * 10) + 5,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!pickup.trim() || !drop.trim()) {
      window.alert("Please fill both pickup and drop locations");
      return;
    }
    let generated = generateRides();
    if (sortBy === "price") {
      generated.sort((a, b) => a.fare - b.fare);
    } else {
      generated.sort((a, b) => a.eta - b.eta);
    }
    setResults(generated);
  }

  return (
    <div id="main">
      <header id="header">
        <div id="logo" className="nav-logo">
          <img
            src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-6d5c-61f7-a4c0-dd7fa019cc24/raw?se=2025-08-13T15%3A30%3A23Z&sp=r&sv=2024-08-04&sr=b&scid=c77b5e5e-0b09-565d-ab69-c137a128b1da&skoid=c953efd6-2ae8-41b4-a6d6-34b1475ac07c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-13T01%3A13%3A32Z&ske=2025-08-14T01%3A13%3A32Z&sks=b&skv=2024-08-04&sig=mgLq39BgPKex75PS/Ed5t/AU31972rXCv0yL9Q4vS6E%3D"
            alt="QuickRide logo"
          />
        </div>
        <h1 id="h11">🚕 QuickRideCompare</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#login" id="login">
            <i className="ri-user-3-fill" aria-hidden="true"></i> Login
          </a>
        </nav>
      </header>

      <section id="hero">
        <div className="overlay">
          <h2>🚕 Compare Uber, Ola & Rapido Fares Instantly</h2>
          <form className="search-box" onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="ri-map-pin-line" aria-hidden="true"></i>
              <input
                type="text"
                placeholder="Pickup Location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                required
                aria-label="Pickup Location"
              />
            </div>

            <div className="input-group">
              <i className="ri-map-pin-user-line" aria-hidden="true"></i>
              <input
                type="text"
                placeholder="Drop Location"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                required
                aria-label="Drop Location"
              />
            </div>

            <select
              id="sortOption"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="price">Sort by Price</option>
              <option value="eta">Sort by ETA</option>
            </select>

            <button type="submit">Compare Fare</button>
          </form>
        </div>
      </section>

      <section className="results">
        {results.length > 0 && <h2>Available Rides</h2>}
        {results.map((ride) => (
          <RideCard key={ride.id} ride={ride} />
        ))}
      </section>
    </div>
  );
}
