try {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Holiday Nightmares",
      body: "When I was kidnapped in Scotland...",
      id: 101,
    }),
  });
  if (!response.ok) throw new Error("There was problem with the API.");
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
} finally {
  console.log("Operation completed.");
}
