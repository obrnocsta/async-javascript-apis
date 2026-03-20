// text-container

const fetchActivity = async (params) => {
  const response = await fetch("https://apis.scrimba.com/bored/api/activity");
  const data = await response.json();
  const activity = `
      <p>Activity: <span class="text">${data.activity}</span></p>
      <p>Type: <span class="text">${data.type}</span></p>
      <p>Participants: <span class="text">${data.participants}</span></p>
      <p>Price: <span class="text">$${data.price.toFixed(2)}</span></p>
      <p>Accessibility: <span class="text">${data.accessibility}</span></p>
    `;
  document.getElementById("text-container").innerHTML = activity;
};

fetchActivity();

// fetch("https://apis.scrimba.com/bored/api/activity")
//   .then((response) => response.json())
//   .then((data) => {
//     const activity = `
//       <p>Activity: <span class="text">${data.activity}</span></p>
//       <p>Type: <span class="text">${data.type}</span></p>
//       <p>Participants: <span class="text">${data.participants}</span></p>
//       <p>Price: <span class="text">$${data.price.toFixed(2)}</span></p>
//       <p>Accessibility: <span class="text">${data.accessibility}</span></p>
//     `;

//     document.getElementById("text-container").innerHTML = activity;
//   });
