try {
  const response = await fetch("https://dummyjson.com/quots/randoms"); // correct url: https://dummyjson.com/quots/random
  if (!response.ok) {
    throw new Error("There was a problem with the API");
  }
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Operation completed.");
}

// NOTE
// try/catch: Catches exceptions and errors that occur during the execution of the code, including network errors and other unexpected issues.
// response.ok: Checks the success of the HTTP response status, which might not throw an error but still indicates a failure.
