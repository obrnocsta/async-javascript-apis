/*
  Challenge:
  1. Return a new promise. The promise should:
    - create a new image and assign the incoming url 
      to its src attribute. (Use the Image constructor 
      for this!)
    - listen out for a load event. If a load event is 
      detected, the promise should resolve, providing the
      image element.
    - listen out for an “error” event. If an error 
      event is detected, the promise should reject giving 
      the message “img has NOT loaded”.
*/

const imageUrl =
  "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const imageContainer = document.getElementById("image-container");

const preLoadImage = (url, alt) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.alt = alt;
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", () => reject("Image has NOT loaded."));
  });
};

try {
  const response = await preLoadImage(imageUrl);
  imageContainer.appendChild(response);
} catch (error) {
  console.error(error);
} finally {
  console.log("Operation completed.");
}
