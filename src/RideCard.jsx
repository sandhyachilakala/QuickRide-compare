import React from "react";

export default function RideCard({ ride }) {
  const handleBook = () => {
    window.alert(`You clicked Book for ${ride.name} — Fare ₹${ride.fare}`);
  };

  return (
    <div className="ride-card" role="region" aria-label={`${ride.name} ride`}>
      <div>
        <h3>{ride.name}</h3>
        <p>
          Fare: ₹{ride.fare} | ETA: {ride.eta} min
        </p>
        <small>
          Capacity: {ride.capacity} person{ride.capacity > 1 ? "s" : ""}
        </small>
      </div>
      <button className="book-btn" onClick={handleBook}>
        Book
      </button>
    </div>
  );
}
