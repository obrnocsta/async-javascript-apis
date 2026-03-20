async function fetchImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  const image = document.createElement("img");
  image.setAttribute("alt", "Image of a random dog");
  image.setAttribute("src", data.message);
  document.getElementById("image-container").appendChild(image);
}

fetchImage();

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => {
//     const image = document.createElement("img");
//     image.setAttribute("alt", "Image of a random dog");
//     image.setAttribute("src", data.message);
//     document.getElementById("image-container").appendChild(image);
//   });
