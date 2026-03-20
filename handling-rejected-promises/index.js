// fetch('https://api.scrimba.com/dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => {
//         console.log(err)
//         // update the DOM to warn the user
//         // access an alternative API
//     })
//     .finally(()=> console.log('The operation completed.'))

/*
Challenge:
1. Convert the above code to use async/await, handle errors with “try/catch” blocks, and add a “finally” block.
handling-rejected-promises
*/

try {
  // the code we want to try to execute
  const response = await fetch(
    "https://potterapi-fedeperin.vercel.app/pt/books",
  );
  const data = await response.json();
  console.log(data);
} catch (err) {
  // the code to execute on an error
  console.error(err);
} finally {
  // code to execute at the end of the operation
  console.log("The operation completed.");
}
