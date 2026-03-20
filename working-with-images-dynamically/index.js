const image = new Image();
image.src =
  "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
image.alt = "planta de cacto verde no vaso marrom";

image.addEventListener("load", () => console.log("Image has loaded!"));
image.addEventListener("error", () => console.error("Image has NOT loaded."));
