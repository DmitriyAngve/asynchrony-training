/*
// 1
let a;
let p4 = new Promise(function (resolve) {
  console.log("TEST A1", a);
  a = 25;
  setTimeout(() => {
    console.log("TEST A2", a);
    resolve(a);
  }, 100);
});

setTimeout(function timeout() {
  a = 10;
  console.log("TEST A3", a);
}, 100);
p4.then(function (b) {
  console.log("TEST A4", a);
});

console.log("TEST A5", a);

// TEST A1 undefined
// TEST A5 25
// TEST A2 25
// TEST A4 25
// TEST A3 10
*/

/*
// 2
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Start
// End
// Promise
// Timeout

*/

// 3
/*
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

// A
// D
// C
// B

*/
/*
// 4
console.log("1");

setTimeout(() => console.log("2"), 1000);

setTimeout(() => console.log("3"), 0);

console.log("4");

// 1
// 4
// 3
// 2
*/

/*
// 5
console.log("x");

setTimeout(() => console.log("y"), 0);

Promise.resolve().then(() => console.log("z"));

console.log("w");

// x
// w
// z
// y
*/

/*
// 6
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

setTimeout(() => console.log("Timeout 2"), 0);

Promise.resolve().then(() => console.log("Promise 1"));

Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");

// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2
*/

// 7
/*
console.log('Alpha');

setTimeout(() => console.log('Beta'), 0);

Promise.resolve().then(() => console.log('Gamma'));

console.log('Delta');

// Alpha
// Delta
// Gamma
// Beta

*/

/*
// 8
console.log("foo");

setTimeout(() => {
  console.log("bar");
  Promise.resolve().then(() => console.log("baz"));
}, 0);

Promise.resolve().then(() => {
  console.log("qux");
  setTimeout(() => console.log("quux"), 0);
});

console.log("corge");

// foo
// corge
// qux
// bar
// baz
// quux
*/

/*
// 9
console.log("one");

setTimeout(() => console.log("two"), 1000);

Promise.resolve().then(() => console.log("three"));

console.log("four");

// one
// four
// three
// two
*/

/*
// 10
console.log("foo");

setTimeout(() => {
  console.log("bar");
  Promise.resolve().then(() => console.log("baz"));
}, 0);

Promise.resolve().then(() => {
  console.log("qux");
  setTimeout(() => console.log("quux"), 0);
});

console.log("corge");

// foo
// corge
// qux
// bar
// baz
// quux

*/

/*
// 11
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => console.log("Promise"));

setTimeout(() => console.log("Timeout 2"), 0);

console.log("End");

// start
// end
// Promise
// Timeout 1
// Timeout 2
*/

/*
// 12
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

new Promise((resolve) => {
  console.log("Promise executor");
  resolve();
}).then(() => console.log("Promise"));

setTimeout(() => console.log("Timeout 2"), 0);

console.log("End");

// Start
// Promise executor
// End
// Promise
// Timeout 1
// Timeout 2
*/

/*
// 13
console.log("Alpha");

setTimeout(() => console.log("Beta"), 0);

Promise.resolve().then(() => {
  console.log("Gamma");
  Promise.resolve().then(() => console.log("Delta"));
});

console.log("Epsilon");

// Alpha
// Epsilon
// Gamma
// Delta
// Beta
*/

/*
// 14
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

new Promise((resolve) => {
  console.log("Promise executor");
  resolve();
}).then(() => console.log("Promise 1"));

setTimeout(() => console.log("Timeout 2"), 0);

Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");

// Start
// Promise executor
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2
*/

/*
// 15
console.log("A");

setTimeout(() => console.log("B"), 0);

new Promise((resolve, reject) => {
  console.log("C");
  reject();
}).catch(() => console.log("D"));

console.log("E");

// A
// C
// E
// D
// B
*/

/*
// 16
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

new Promise((resolve, reject) => {
  console.log("Promise executor");
  reject();
}).catch(() => console.log("Promise"));

setTimeout(() => console.log("Timeout 2"), 0);

console.log("End");

// Start
// Promise excutor
// End
// Promise
// Timeout 1
// Timeout 2
*/

/*
// 17
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
  Promise.resolve().then(() => console.log("Promise 1"));
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 2");
  setTimeout(() => console.log("Timeout 2"), 0);
});

console.log("End");

// Start
// End
// Promise 2
// Timeout 1
// Promise 1
// Timeout 2
*/

/*
// 18
console.log("Alpha");

setTimeout(() => console.log("Beta"), 0);

Promise.resolve().then(() => {
  console.log("Gamma");
  setTimeout(() => console.log("Delta"), 0);
  Promise.resolve().then(() => console.log("Epsilon"));
});

console.log("Zeta");

// Alpha
// Zeta
// Gamma
// Epsilon
// Beta
// Delta
*/

/*
// 19
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => console.log("Promise 1"));

Promise.resolve().then(() => {
  console.log("Promise 2");
  setTimeout(() => console.log("Timeout 2"), 0);
});

console.log("End");

// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2
*/

/*
// 20
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => {
  console.log("C");
  setTimeout(() => console.log("D"), 0);
});

new Promise((resolve) => {
  console.log("E");
  resolve();
}).then(() => console.log("F"));

// A
// E
// C
// F
// B
// D
*/

/*
// 21
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
  Promise.resolve().then(() => console.log("Promise 1"));
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 2");
  setTimeout(() => console.log("Timeout 2"), 0);
  Promise.resolve().then(() => console.log("Promise 3"));
});

console.log("End");

// Start
// End
// Promise 2
// Promise 3
// Timeout 1
// Promise 1
// Timeout 2
*/

/*
// 22
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

new Promise((resolve) => {
  console.log("Promise executor");
  resolve();
}).then(() => console.log("Promise"));

setTimeout(() => console.log("Timeout 2"), 0);

console.log("End");

// Start
// Promise executor
// End
// Promise
// Timeout 1
// Timeout 2
*/

/*
// 23
console.log("A");

setTimeout(() => console.log("B"), 0);

new Promise((resolve, reject) => {
  console.log("C");
  reject();
}).catch(() => console.log("D"));

console.log("E");

// A
// C
// E
// D
// B
*/

/*
// 24
console.log("One");

setTimeout(() => console.log("Two"), 0);

Promise.resolve().then(() => console.log("Three"));

console.log("Four");

// One
// Four
// Three
// Two
*/

/*
// 25
console.log("Ready");

setTimeout(() => console.log("Set"), 0);

new Promise((resolve, reject) => {
  console.log("Go");
  reject();
}).catch(() => console.log("Stop"));

console.log("Finish");

// Ready
// Go
// Finish
// Stop
// Set
*/

/*
// 26
console.log("Alpha");

setTimeout(() => console.log("Beta"), 0);

Promise.resolve().then(() => {
  console.log("Gamma");
  Promise.resolve().then(() => console.log("Delta"));
});

console.log("Epsilon");

// Alpha
// Epsilon
// Gamma
// Delta
// Beta
*/

/*
// 27
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

new Promise((resolve) => {
  console.log("Promise executor");
  resolve();
}).then(() => console.log("Promise 1"));

setTimeout(() => console.log("Timeout 2"), 0);

Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");

// Start
// Promise executor
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2
*/

/*
// 28
console.log("Hello");

setTimeout(() => console.log("World"), 0);

Promise.resolve().then(() => console.log("!"));

console.log(",");

// Hello
// ,
// !
// World

*/

/*
// 29
console.log("Uno");

setTimeout(() => console.log("Dos"), 100);

Promise.resolve().then(() => console.log("Tres"));

console.log("Cuatro");

// Uno
// Cuatro
// Tres
// Dos
*/

/*
// 30
console.log("One");

setTimeout(() => console.log("Two"), 0);

Promise.resolve().then(() => console.log("Three"));

setTimeout(() => console.log("Four"), 0);

// One
// Three
// Two
// Four
*/

/*
// 31
console.log("Up");

setTimeout(() => console.log("Down"), 0);

Promise.resolve().then(() => console.log("Left"));

console.log("Right");

// Up
// Right
// Left
// Down
*/

/*
// 32
console.log("Start");

Promise.resolve("Resolved").then((value) => console.log(value));

setTimeout(() => console.log("Timeout"), 0);

Promise.reject(new Error("Rejected")).catch((error) =>
  console.error(error.message)
);

console.log("End");

// Start
// End
// Resolved
// Rejected
// Timeout
*/

/*
// 33
console.log("Init");

Promise.all([
  Promise.resolve("Promise 1"),
  Promise.reject(new Error("Promise 2 Error")),
])
  .then((values) => console.log(values))
  .catch((error) => console.error(error.message));

Promise.race([
  Promise.resolve("Race 1"),
  Promise.reject(new Error("Race 2 Error")),
])
  .then((value) => console.log(value))
  .catch((error) => console.error(error.message));

console.log("Finish");

// Init
// Finish
// Race 1
// Promise 2 Error
*/

/*
// 34
console.log("Begin");

Promise.resolve("First").then((value) => console.log(value));

Promise.resolve("Second").then((value) => console.log(value));

Promise.resolve("Third").then((value) => console.log(value));

console.log("Done");

// Begin
// Done
// First
// Second
// Third
*/

/*
// 35

console.log("Open");

Promise.resolve().then(() => console.log("Lock"));

Promise.resolve().then(() => console.log("Unlock"));

console.log("Close");

// Open
// Close
// Lock
// Unlock
*/

/*
// 36
console.log("Initialize");

Promise.resolve("Resolved").then((value) => console.log(value));

Promise.reject(new Error("Rejected")).catch((error) =>
  console.error(error.message)
);

console.log("Finalize");

// Initialize
// Finalize
// Resolved
// Rejected
*/

/*
// 37
console.log("Start");

Promise.resolve("Resolved").then((value) => console.log(value));

setTimeout(() => console.log("Timeout"), 0);

Promise.reject(new Error("Rejected")).catch((error) =>
  console.error(error.message)
);

console.log("End");

// Start
// End
// Resolved
// Rejected
// Timeout
*/

/*
// 38
console.log("Initializing");

Promise.all([
  Promise.resolve("Promise 1"),
  Promise.reject(new Error("Promise 2 Error")),
])
  .then((values) => console.log(values))
  .catch((error) => console.error(error.message));

Promise.race([
  Promise.resolve("Race 1"),
  Promise.reject(new Error("Race 2 Error")),
])
  .then((value) => console.log(value))
  .catch((error) => console.error(error.message));

console.log("Finalizing");

// Initializing
// Finalizing
// Race 1
// Promise 2 Error
*/

/*
// 39
console.log("Start");

Promise.resolve("First").then((value) => console.log(value));

Promise.resolve("Second").then((value) => console.log(value));

Promise.resolve("Third").then((value) => console.log(value));

console.log("End");

// Start
// End
// First
// Second
// Third
*/

/*
// 40
console.log("Unlock");

Promise.resolve().then(() => console.log("Lock"));

Promise.resolve().then(() => console.log("Unlock"));

console.log("Lock");

// Unlock
// Lock
// Lock
// Unlock
*/

/*
// 41
console.log("Initialization");

Promise.resolve("Resolved").then((value) => console.log(value));

Promise.reject(new Error("Rejected")).catch((error) =>
  console.error(error.message)
);

console.log("Finalization");

// Initialization
// Finalization
// Resolved
// Rejected
*/

/*
// 42
console.log("Init");
Promise.all([
  Promise.resolve("Promise 1"),
  Promise.reject(new Error("Promise 2 Error")),
])
  .then((values) => console.log(values))
  .catch((error) => console.error(error.message));
Promise.race([
  Promise.resolve("Race 1"),
  Promise.reject(new Error("Race 2 Error")),
])
  .then((value) => console.log(value))
  .catch((error) => console.error(error.message));
console.log("Finish");

// Init
// Finish
// Race 1
// Promise 2 Error
*/

/*
// 43
console.log("Beginning");
Promise.all([
  Promise.resolve("Promise 1"),
  Promise.reject(new Error("Promise 2 Error")),
])
  .then((values) => console.log(values))
  .catch((error) => console.error(error.message));
Promise.race([
  Promise.resolve("Race 1"),
  Promise.reject(new Error("Race 2 Error")),
])
  .then((value) => console.log(value))
  .catch((error) => console.error(error.message));
console.log("End");

// Beginning
// End
// Race 1
// Race 2 Error
*/

/*
// 44
console.log("Start");
Promise.all([
  Promise.resolve("Promise 1"),
  Promise.reject(new Error("Promise 2 Error")),
])
  .then((values) => console.log(values))
  .catch((error) => console.error(error.message));
Promise.race([
  Promise.resolve("Race 1"),
  Promise.reject(new Error("Race 2 Error")),
])
  .then((value) => console.log(value))
  .catch((error) => console.error(error.message));
console.log("Finish");

// Start
// Finish
// Race 1
// Promise 2 Error
*/

/*
// 45
console.log("Start");

const fetchData = async () => {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1"), 1000);
  });

  const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 2"), 500);
  });

  const result = await Promise.allSettled([promise1, promise2]);
  console.log(result);
};

fetchData();

console.log("End");

// Start
// End
// [{status: fulfiled, value: Promise 1}, {status: fulfiled, value: Promise 2}]
*/

/*
// 46
console.log("Initiate");

async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

console.log("Complete");

// Initiate
// Complete
// GET https://api.example.com/data net::ERR_NAME_NOT_RESOLVED
// Failed to fetch
*/

/*
// 47
console.log("Begin");

async function fetchUser(id) {
  const response = await fetch(`https://api.example.com/users/${id}`);
  const user = await response.json();
  return user;
}

(async () => {
  const user = await fetchUser(123);
  console.log(user);
  console.log("Finish");
})();

// Begin
// GET https://api.example.com/users/123 ERR_NAME_NOT_RESOLVED
// Failed to fetch
*/

/*
// 48
console.log("Initialize");

async function fetchData() {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1"), 1000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Promise 2 Error")), 500);
  });

  try {
    const result1 = await promise1;
    console.log(result1);

    const result2 = await promise2;
    console.log(result2);
  } catch (error) {
    console.error(error.message);
  }

  console.log("Finalize");
}

fetchData();

// Initialize
// Promise 1
// Promise 2 Error
// Finalize
*/

/*
// 49
console.log("Fetch");

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

console.log("Complete");

// Fetch
// Complete
// GET https://api.example.com/users/data ERR_NAME_NOT_RESOLVED
// Failed to fetch
// Failed to fetch

*/

/*
// 50
console.log("Start");

const fetchData = async () => {
  const promise1 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 1"), 1000)
  );
  const promise2 = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Promise 2 Error")), 500)
  );

  try {
    const result1 = await promise1;
    console.log(result1);

    const result2 = await promise2;
    console.log(result2);
  } catch (error) {
    console.error(error.message);
  }
};

fetchData();

console.log("End");

// Start
// End
// Promise 1
// Promise 2 Error
*/

/*
// 51
console.log("Opening");

const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

console.log("Closing");

// Opening
// Closing
// GET https://api.example.com/users/data ERR_NAME_NOT_RESOLVED
// Failed to fetch
// Failed to fetch
*/

/*
// 52
console.log("Initialization");

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

(async () => {
  const data = await fetchData();
  console.log(data);
  console.log("Finalization");
})();

// Initialization
// GET https://api.example.com/users/data ERR_NAME_NOT_RESOLVED
// Failed to fetch
// Failed to fetch
*/

/*
// 53
console.log("Commence");

const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1"), 1000)
);

const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Promise 2 Error")), 500)
);

Promise.all([
  promise1.catch((error) => error),
  promise2.catch((error) => error),
])
  .then(([result1, result2]) => {
    console.log(result1, result2);
    console.log("Cease");
  })
  .catch((error) => console.error(error.message));

// Commence
// Promise 1 Error: Promise 2 Error
// Cease
*/

// 54
console.log("Initiate");

const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1"), 1000)
);

const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Promise 2 Error")), 500)
);

Promise.allSettled([promise1, promise2]).then((results) => {
  const fulfilledResults = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);
  const rejectedResults = results
    .filter((result) => result.status === "rejected")
    .map((result) => result.reason.message);

  console.log("Fulfilled:", fulfilledResults);
  console.log("Rejected:", rejectedResults);
  console.log("Finalize");
});
