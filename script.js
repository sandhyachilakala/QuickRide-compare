document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.search-box');
  const resultsSection = document.querySelector('.results');
  const sortOption = document.getElementById('sortOption');

  const rides = [
    { name: "🚲 Rapido Bike", brand: "rapido", capacity: 1 },
    { name: "🚗 Uber Mini", brand: "uber", capacity: 4 },
    { name: "🚘 Ola Auto", brand: "ola", capacity: 3 }
  ];

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let pickup = form.children[0].querySelector('input').value.trim();
    let drop = form.children[1].querySelector('input').value.trim();
    if (!pickup || !drop) return alert("Please fill both fields");

    let generatedRides = rides.map(ride => ({
      ...ride,
      fare: Math.floor(Math.random() * 50) + 40,
      eta: Math.floor(Math.random() * 10) + 5
    }));

    if (sortOption.value === "price") {
      generatedRides.sort((a, b) => a.fare - b.fare);
    } else {
      generatedRides.sort((a, b) => a.eta - b.eta);
    }

    resultsSection.innerHTML = "<h2>Available Rides</h2>";
    generatedRides.forEach(ride => {
      let card = document.createElement('div');
      card.className = "ride-card";
      card.innerHTML = `
        <div>
          <h3>${ride.name}</h3>
          <p>Fare: ₹${ride.fare} | ETA: ${ride.eta} min</p>
          <small>Capacity: ${ride.capacity} persons</small>
        </div>
        <button class="book-btn">Book</button>
      `;
      resultsSection.appendChild(card);
    });
  });
});

