const postsList = document.getElementById("posts-list");

try {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("There was a problem with the API");
  }
  const data = await response.json();
  postsList.innerHTML = data.map((p) => `<li>${p.title}</li>`).join("");
} catch (error) {
  console.error(error);
} finally {
  console.log("Operation completed.");
}
