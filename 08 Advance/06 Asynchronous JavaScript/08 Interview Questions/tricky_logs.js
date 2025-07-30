 // 1. Callback Hell Example (Problem)
function fetchDataCallback(cb) {
  setTimeout(() => {
    cb(null, "Data 1");
  }, 500);
}

function fetchMoreDataCallback(data, cb) {
  setTimeout(() => {
    cb(null, data + " + Data 2");
  }, 500);
}

// Callback Hell - Nested callbacks
fetchDataCallback(function (err, data1) {
  if (err) {
    console.error(err);
  } else {
    fetchMoreDataCallback(data1, function (err, data2) {
      if (err) {
        console.error(err);
      } else {
        console.log("Callback Hell result:", data2);
      }
    });
  }
});

// -----------------------------------------------------

// 2. Promises Example
function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data 1");
    }, 500);
  });
}

function fetchMoreDataPromise(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data + " + Data 2");
    }, 500);
  });
}

// Promise chaining (cleaner than callbacks)
fetchDataPromise()
  .then((data1) => fetchMoreDataPromise(data1))
  .then((data2) => {
    console.log("Promise chaining result:", data2);
  })
  .catch((err) => {
    console.error(err);
  });

// -----------------------------------------------------

// 3. Async/Await Example with try/catch
async function fetchDataAsync() {
  try {
    const data1 = await fetchDataPromise();
    const data2 = await fetchMoreDataPromise(data1);
    console.log("Async/Await result:", data2);
  } catch (error) {
    console.error("Error in async function:", error);
  }
}

fetchDataAsync();

// -----------------------------------------------------

// 4. Microtask vs Macrotask Example
console.log("Script Start");

setTimeout(() => {
  console.log("setTimeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise (Microtask)");
});

console.log("Script End");

// -----------------------------------------------------

// 5. Infinite Microtask Loop Example (Commented out to avoid freezing)
/*
Promise.resolve().then(function chain() {
  console.log("Microtask Loop");
  Promise.resolve().then(chain);
});
*/

// 7. Code snippet explanation with output and Hinglish comments

console.log('Start'); // Sabse pehle console mein 'Start' print hoga

setTimeout(() => {
  console.log('Timeout'); 
  // Yeh Macrotask queue mein jayega,
  // tab run hoga jab call stack empty ho aur Microtasks complete ho jaayein
}, 0);

Promise.resolve().then(() => {
  console.log('Promise'); 
  // Promise Microtask queue mein hai,
  // isliye yeh setTimeout se pehle chalega
});

console.log('End'); // Synchronous hai, to yeh 'Start' ke baad turant print hoga

// OUTPUT:
// Start
// End
// Promise
// Timeout


// 8. Await outside async function

// SyntaxError: await is only valid in async functions
// Isliye await sirf async function ke andar hi use kar sakte hain

async function testAwait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Await ka use async function mein sahi hai");
}
testAwait();


// 9. Error handling in async/await

async function errorHandling() {
  try {
    await Promise.reject("🚫 Error occurred");
  } catch (err) {
    console.log("Catch block mein error aaya:", err);
  }
}
errorHandling();


// 10. Infinite Microtask loop example
// Warning: Running this can block your browser or Node process!

/*
Promise.resolve().then(function repeat() {
  console.log("Microtask chal raha hai");
  Promise.resolve().then(repeat);
});
*/

// Explanation:
// Microtask queue kabhi empty nahi hoti,
// is wajah se Macrotask (e.g., setTimeout) kabhi execute nahi hoga,
// JavaScript thread hang ho sakta hai


// Bonus: Pyramid of Doom example and how Promises help

// Pyramid of Doom with callbacks
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

// Promises se chaining karna easy hota hai
new Promise((resolve) => {
  setTimeout(() => {
    console.log("Step 1");
    resolve();
  }, 1000);
})
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step 2");
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  });


// setTimeout(fn, 0) kabhi immediately nahi chalta kyunki wo Macrotask queue mein chala jata hai
// jab tak call stack empty nahi hota aur Microtasks complete nahi hote tab tak wo wait karta hai


// Difference .then() vs async/await

// .then() chaining
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => console.log("Then chaining data:", data))
  .catch(err => console.log("Error:", err));

// async/await version
async function fetchData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log("Async/Await data:", data);
  } catch (err) {
    console.log("Error:", err);
  }
}
fetchData();

