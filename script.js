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

/*
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

// Initiate
// Fulfilled: Promise 1
// Rejected: Promise 2 Error
// Finalize;
*/

/*
// 55
console.log("Startup");

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

console.log("Shutdown");

// Startup
// Shutdown
// GET https://api.example.com/users/data ERR_NAME_NOT_RESOLVED
// Failed to fetch
// Failed to fetch
*/

/*
// 56
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve("Resolved").then((value) => console.log(value));

console.log("End");

// Start
// End
// Resolved
// Timeout
*/

/*
// 57
console.log("Initialize");

async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

console.log("Finalize");

// Initialize
// Finalize
// GET Error
// Failed to fetch
*/

/*
// 58
console.log("Begin");

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1"), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2"), 500);
});

Promise.all([promise1, promise2]).then((values) => console.log(values));

console.log("Finish");

// Begin
// Finish
// [Promise 1, Promise 2]
*/

/*
// 59
console.log("Initiate");

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Promise 2 Error")), 500);
});

Promise.race([promise1, promise2])
  .then((value) => console.log(value))
  .catch((error) => console.error(error.message));

console.log("Complete");

// Initiate
// Complete
// Promise 2 Error
*/

/*
// 60
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
// GET Error
// Failed to fetch
// Failed to fetch
*/

/*
// 61
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 1000);
myPromise(1000).then((res) => console.log("in Promise 1"));

setTimeout(() => console.log("in setTimeout2"), 500);
myPromise(2000).then((res) => console.log("in Promise 2"));

setTimeout(() => console.log("in setTimeout3"), 1500);
myPromise(1000).then((res) => console.log("in Promise 3"));

setTimeout(() => console.log("in setTimeout4"), 2000);
myPromise(5000).then((res) => console.log("in Promise 4"));

// in setTimeout2
// in setTimeout1
// in Promise 1
// in Promise 3
// in setTimeout3
// in Promise 2
// in setTimeout4
// in Promise 4
*/

/*
// 62
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 500);
myPromise(1000).then((res) => console.log("in Promise 1"));

setTimeout(() => console.log("in setTimeout2"), 1000);
myPromise(2000).then((res) => console.log("in Promise 2"));

setTimeout(() => console.log("in setTimeout3"), 200);
myPromise(1000).then((res) => console.log("in Promise 3"));

setTimeout(() => console.log("in setTimeout4"), 1500);
myPromise(5000).then((res) => console.log("in Promise 4"));

// in setTimeout3
// in setTimeout1
// in Promise 1
// in setTimeout2
// in Promise 3
// in setTimeout4
// in Promise 2
// in Promise 4
*/

/*
// 63
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 1500);
myPromise(1000).then((res) => console.log("in Promise 1"));

setTimeout(() => console.log("in setTimeout2"), 2000);
myPromise(2000).then((res) => console.log("in Promise 2"));

setTimeout(() => console.log("in setTimeout3"), 100);
myPromise(1000).then((res) => console.log("in Promise 3"));

setTimeout(() => console.log("in setTimeout4"), 500);
myPromise(5000).then((res) => console.log("in Promise 4"));

// in setTimeout3
// in setTimeout4
// in Promise 1
// in Promise 3
// in setTimeout1
// in setTimeout2
// in Promise 2
// in Promise 4
*/

/*
// 64
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 2000);
myPromise(1000).then((res) => console.log("in Promise 1"));

setTimeout(() => console.log("in setTimeout2"), 150);
myPromise(2000).then((res) => console.log("in Promise 2"));

setTimeout(() => console.log("in setTimeout3"), 2500);
myPromise(1000).then((res) => console.log("in Promise 3"));

setTimeout(() => console.log("in setTimeout4"), 1000);
myPromise(5000).then((res) => console.log("in Promise 4"));

// in setTimeout2
// in Promise 1
// in Promise 3
// in setTimeout4
// in setTimeout1
// in Promise 2
// in setTimeout3
// in Promise 4
*/

/*
// 65
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 100);
myPromise(1000).then((res) => console.log("in Promise 1"));

setTimeout(() => console.log("in setTimeout2"), 200);
myPromise(2000).then((res) => console.log("in Promise 2"));

setTimeout(() => console.log("in setTimeout3"), 300);
myPromise(1000).then((res) => console.log("in Promise 3"));

setTimeout(() => console.log("in setTimeout4"), 400);
myPromise(5000).then((res) => console.log("in Promise 4"));

// in setTimeout1
// in setTimeout2
// in setTimeout3
// in setTimeout4
// in Promise 1
// in Promise 3
// in Promise 2
// in Promise 4
*/

/*
// 66
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 100);
myPromise(1000).then((res) => console.log("in Promise 1"));

setTimeout(() => console.log("in setTimeout2"), 200);
myPromise(2000).then((res) => console.log("in Promise 2"));

setTimeout(() => console.log("in setTimeout3"), 300);
myPromise(1500).then((res) => console.log("in Promise 3"));

setTimeout(() => console.log("in setTimeout4"), 400);
myPromise(500).then((res) => console.log("in Promise 4"));

// in setTimeout1
// in setTimeout2
// in setTimeout3
// in setTimeout4
// in Promise 4
// in Promise 1
// in Promise 3
// in Promise 2
*/

/*
// 67
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 200);
myPromise(1000).then((res) => console.log("in Promise 1"));

setTimeout(() => {
  console.log("in setTimeout2");
  myPromise(1500).then((res) => console.log("in Promise 2"));
}, 300);

myPromise(2000).then((res) => console.log("in Promise 3"));
setTimeout(() => {
  console.log("in setTimeout3");
  myPromise(100).then((res) => console.log("in Promise 4"));
}, 500);

myPromise(500).then((res) => console.log("in Promise 5"));

// in setTimeout1
// in setTimeout2
// in setTimeout3
// in Promise 5
// in Promise 4
// in Promise 1
// in Promise 2
// in Promise 3
*/

/*
// 68
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => {
  console.log("in setTimeout1");
  myPromise(1000).then((res) => console.log("in Promise 1"));
}, 200);

setTimeout(() => console.log("in setTimeout2"), 300);

setTimeout(() => {
  console.log("in setTimeout3");
  myPromise(1500).then((res) => console.log("in Promise 2"));
}, 100);

setTimeout(() => console.log("in setTimeout4"), 500);

myPromise(2000).then((res) => console.log("in Promise 3"));

myPromise(500).then((res) => console.log("in Promise 4"));

// in setTimeout3
// in setTimeout1
// in setTimeout2
// in setTimeout4
// in Promise 4
// in Promise 1
// in Promise 2
// in Promise 3
*/

/*
// 69
const myPromise = (delay) => new Promise((res, rej) => { setTimeout(res, delay) });

setTimeout(() => console.log('in setTimeout1'), 300);
myPromise(1000).then(res => console.log('in Promise 1'));

setTimeout(() => {
  console.log('in setTimeout2');
  myPromise(1500).then(res => console.log('in Promise 2'));
}, 200);

setTimeout(() => console.log('in setTimeout3'), 500);

myPromise(2000).then(res => console.log('in Promise 3'));

myPromise(500).then(res => console.log('in Promise 4'));

// in setTimeout2
// in setTimeout1
// in setTimeout3
// in Promise 4
// in Promise 1
// in Promise 2
// in Promise 3
*/

/*
// 70
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 100);

setTimeout(() => {
  console.log("in setTimeout2");
  myPromise(1500).then((res) => console.log("in Promise 1"));
}, 300);

setTimeout(() => console.log("in setTimeout3"), 200);

myPromise(2000).then((res) => console.log("in Promise 2"));

myPromise(500).then((res) => console.log("in Promise 3"));

setTimeout(() => {
  console.log("in setTimeout4");
  myPromise(1000).then((res) => console.log("in Promise 4"));
}, 500);

// in setTimeout1
// in setTimeout3
// in setTimeout2
// in Promise 3
// in setTimeout4
// in Promise 4
// in Promise 2
// in Promise 1
*/

/*
// 71
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => {
  console.log("in setTimeout1");
  myPromise(1000).then((res) => console.log("in Promise 1"));
}, 200);

myPromise(500).then((res) => console.log("in Promise 2"));
setTimeout(() => console.log("in setTimeout2"), 300);

myPromise(2000).then((res) => console.log("in Promise 3"));
setTimeout(() => console.log("in setTimeout3"), 400);

myPromise(1500).then((res) => console.log("in Promise 4"));
setTimeout(() => {
  console.log("in setTimeout4");

  myPromise(500).then((res) => console.log("in Promise 5"));
}, 100);

// in setTimeout4
// in setTimeout1
// in setTimeout2
// in setTimeout3
// in Promise 2
// in Promise 5
// in Promise 4
// in Promise 1
// in Promise 3
*/

/*
// 72
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 200);
myPromise(1000).then((res) => console.log("in Promise 1"));

setTimeout(() => console.log("in setTimeout2"), 500);
myPromise(2000).then((res) => console.log("in Promise 2"));

myPromise(500).then((res) => console.log("in Promise 3"));
setTimeout(() => console.log("in setTimeout3"), 100);

myPromise(1500).then((res) => console.log("in Promise 4"));
setTimeout(() => console.log("in setTimeout4"), 300);

// in setTimeout3
// in setTimeout1
// in setTimeout4
// in setTimeout2
// in Promise 3
// in Promise 1
// in Promise 4
// in Promise 2
*/

/*
// 73
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => {
  console.log("in setTimeout1");
  myPromise(1000).then((res) => console.log("in Promise 1"));
}, 200);

myPromise(500).then((res) => console.log("in Promise 2"));
setTimeout(() => console.log("in setTimeout2"), 400);

myPromise(2000).then((res) => console.log("in Promise 3"));

myPromise(1500).then((res) => console.log("in Promise 4"));

setTimeout(() => console.log("in setTimeout3"), 300);

setTimeout(() => console.log("in setTimeout4"), 100);

// in setTimeout4
// in setTimeout1
// in setTimeout3
// in setTimeout2
// in Promise 2
// in Promise 1
// in Promise 4
// in Promise 3
*/

/*
// 74
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => {
  console.log("in setTimeout1");
  myPromise(1000).then((res) => console.log("in Promise 1"));
}, 100);

myPromise(500).then((res) => console.log("in Promise 2"));
setTimeout(() => console.log("in setTimeout2"), 300);

myPromise(2000).then((res) => console.log("in Promise 3"));
setTimeout(() => console.log("in setTimeout3"), 200);

myPromise(1500).then((res) => console.log("in Promise 4"));
setTimeout(() => console.log("in setTimeout4"), 400);

// in setTimeout1
// in setTimeout3
// in setTimeout2
// in setTimeout4
// in Promise 2
// in Promise 1
// in Promise 4
// in Promise 3
*/

/*
// 75
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 200);
myPromise(1000).then((res) => console.log("in Promise 1"));

setTimeout(() => console.log("in setTimeout2"), 300);
myPromise(2000).then((res) => console.log("in Promise 2"));

myPromise(500).then((res) => console.log("in Promise 3"));
setTimeout(() => console.log("in setTimeout3"), 100);

myPromise(1500).then((res) => console.log("in Promise 4"));
setTimeout(() => console.log("in setTimeout4"), 400);

// in setTimeout3
// in setTimeout1
// in setTimeout2
// in setTimeout4
// in Promise 3
// in Promise 1
// in Promise 4
// in Promise 2
*/

/*
// 76
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => {
  console.log("in setTimeout1");
  myPromise(1000).then((res) => console.log("in Promise 1"));
}, 300);

myPromise(500).then((res) => console.log("in Promise 2"));
setTimeout(() => console.log("in setTimeout2"), 400);

myPromise(2000).then((res) => console.log("in Promise 3"));

myPromise(1500).then((res) => console.log("in Promise 4"));

setTimeout(() => console.log("in setTimeout3"), 100);

setTimeout(() => console.log("in setTimeout4"), 200);

// in setTimeout3
// in setTimeout4
// in setTimeout1
// in setTimeout2
// in Promise 2
// in Promise 1
// in Promise 4
// in Promise 3
*/

/*
// 77
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 300);
myPromise(1000).then((res) => console.log("in Promise 1"));

setTimeout(() => console.log("in setTimeout2"), 200);
myPromise(2000).then((res) => console.log("in Promise 2"));

setTimeout(() => {
  console.log("in setTimeout3");
  myPromise(1500).then((res) => console.log("in Promise 3"));
}, 400);

setTimeout(() => console.log("in setTimeout4"), 500);

myPromise(500).then((res) => console.log("in Promise 4"));

// in setTimeout2
// in setTimeout1
// in setTimeout3
// in setTimeout4
// in Promise 4
// in Promise 1
// in Promise 3
// in Promise 2
*/

/*
// 78
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 100);

setTimeout(() => {
  console.log("in setTimeout2");
  myPromise(1500).then((res) => console.log("in Promise 1"));
}, 300);

setTimeout(() => console.log("in setTimeout3"), 200);

myPromise(2000).then((res) => console.log("in Promise 2"));

setTimeout(() => {
  console.log("in setTimeout4");
  myPromise(500).then((res) => console.log("in Promise 3"));
}, 500);

myPromise(1000).then((res) => console.log("in Promise 4"));

// in setTimeout1
// in setTimeout3
// in setTimeout2
// in setTimeout4
// in Promise 3
// in Promise 4
// in Promise 1
// in Promise 2
*/

/*
// 79
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 300);
myPromise(1000).then((res) => console.log("in Promise 1"));

setTimeout(() => console.log("in setTimeout2"), 400);
myPromise(2000).then((res) => console.log("in Promise 2"));

myPromise(500).then((res) => console.log("in Promise 3"));
setTimeout(() => {
  console.log("in setTimeout3");
  myPromise(1500).then((res) => console.log("in Promise 4"));
}, 200);

setTimeout(() => console.log("in setTimeout4"), 500);

// in setTimeout3
// in setTimeout1
// in setTimeout2
// in Promise 3
// in setTimeout4
// in Promise 1
// in Promise 4
// in Promise 2
*/

/*
// 80
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log("in setTimeout1"), 400);
myPromise(1000).then((res) => console.log("in Promise 1"));

setTimeout(() => {
  console.log("in setTimeout2");
  myPromise(1500).then((res) => console.log("in Promise 2"));
}, 200);

setTimeout(() => console.log("in setTimeout3"), 300);
myPromise(2000).then((res) => console.log("in Promise 3"));

myPromise(500).then((res) => console.log("in Promise 4"));
setTimeout(() => console.log("in setTimeout4"), 100);

// in setTimeout4
// in setTimeout2
// in setTimeout3
// in setTimeout1
// in Promise 4
// in Promise 1
// in Promise 2
// in Promise 3
*/

/*
// 81
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => {
  console.log("in setTimeout1");
  myPromise(1000).then((res) => console.log("in Promise 1"));
}, 300);

myPromise(500).then((res) => console.log("in Promise 2"));
setTimeout(() => console.log("in setTimeout2"), 400);

myPromise(2000).then((res) => console.log("in Promise 3"));

myPromise(1500).then((res) => console.log("in Promise 4"));

setTimeout(() => console.log("in setTimeout3"), 200);

setTimeout(() => console.log("in setTimeout4"), 100);

// in setTimeout4
// in setTimeout3
// in setTimeout1
// in setTimeout2
// in Promise 2
// in Promise 1
// in Promise 4
// in Promise 3
*/

/*
// 82
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// 1
// 7
// 3
// 5
// 2
// 6
// 4
*/

/*
// 83
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// 1
// 7
// 3
// 5
// 2
// 6
// 4
*/

/*
// 84
console.log(1);

Promise.resolve().then(() => console.log(2));

setTimeout(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

setTimeout(() => console.log(5));

Promise.resolve().then(() => console.log(6));

console.log(7);

// 1
// 7
// 2
// 6
// 3
// 5
// 4
*/

/*
// 85
console.log(1);

Promise.resolve().then(() => console.log(2));

Promise.resolve().then(() => console.log(3));

setTimeout(() => console.log(4));

setTimeout(() => console.log(5));

Promise.resolve().then(() => console.log(6));

console.log(7);

// 1
// 7
// 2
// 3
// 6
// 4
// 5
*/

/*
// 86
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => setTimeout(() => console.log(3)));

setTimeout(() => console.log(4));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// 1
// 7
// 5
// 2
// 4
// 6
// 3
*/

/*
// 87
console.log(1);

Promise.resolve().then(() => console.log(2));

setTimeout(() => console.log(3));

Promise.resolve().then(() => console.log(4));

setTimeout(() => console.log(5));

Promise.resolve().then(() => setTimeout(() => console.log(6)));

console.log(7);

// 1
// 7
// 2
// 4
// 3
// 5
// 6
*/

/*
// 88
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => setTimeout(() => console.log(3)));

Promise.resolve().then(() => console.log(4));

setTimeout(() => console.log(5));

Promise.resolve().then(() => console.log(6));

console.log(7);

// 1
// 7
// 4
// 6
// 2
// 5
// 3
*/

/*
// 89
console.log(1);

Promise.resolve().then(() => console.log(2));

Promise.resolve().then(() => setTimeout(() => console.log(3)));

setTimeout(() => console.log(4));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// 1
// 7
// 2
// 5
// 4
// 6
// 3
*/

/*
// 90
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => console.log(4));

setTimeout(() => console.log(5));

Promise.resolve().then(() => console.log(6));

console.log(7);

// 1
// 7
// 3
// 4
// 6
// 2
// 5
*/

/*
// 91
console.log(1);

Promise.resolve().then(() => console.log(2));

Promise.resolve().then(() => console.log(3));

setTimeout(() => console.log(4));

setTimeout(() => console.log(5));

Promise.resolve().then(() => console.log(6));

console.log(7);

// 1
// 7
// 2
// 3
// 6
// 4
// 5
*/

/*
// 92
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => setTimeout(() => console.log(3)));

Promise.resolve().then(() => console.log(4));

setTimeout(() => console.log(5));

Promise.resolve().then(() => console.log(6));

console.log(7);

// 1
// 7
// 4
// 6
// 2
// 5
// 3
*/

/*
// 93
console.log(1);

Promise.resolve().then(() => console.log(2));

async function asyncFunc() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(3);
}

Promise.resolve().then(() => asyncFunc());

Promise.all([
  Promise.resolve().then(() => console.log(4)),
  Promise.resolve().then(() => console.log(5)),
]).then(() => console.log(6));

setTimeout(() => console.log(7), 500);

// 1
// 2
// 4
// 5
// 6
// 7
// 3
*/

/*
// 94
console.log(1);

Promise.resolve().then(() => console.log(2));

async function asyncFunc() {
  await new Promise((resolve) => setTimeout(resolve, 800));
  console.log(3);
}

Promise.all([
  Promise.resolve().then(() => console.log(4)),
  Promise.resolve().then(() => console.log(5)),
]).then(() => console.log(6));

setTimeout(() => console.log(7), 400);

Promise.resolve().then(() => asyncFunc());

// 1
// 2
// 4
// 5
// 6
// 7
// 3
*/

/*
// 95
console.log(1);

Promise.resolve().then(() => console.log(2));

async function asyncFunc() {
  await new Promise((resolve) => setTimeout(resolve, 600));
  console.log(3);
}

Promise.all([
  Promise.resolve().then(() => console.log(4)),
  Promise.resolve().then(() => console.log(5)),
]).then(() => console.log(6));

setTimeout(() => console.log(7), 300);

Promise.resolve().then(() => asyncFunc());

// 1
// 2
// 4
// 5
// 6
// 7
// 3
*/

/*
// 96
console.log(1);

Promise.resolve().then(() => console.log(2));

async function asyncFunc() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(3);
}

Promise.all([
  Promise.resolve().then(() => console.log(4)),
  Promise.resolve().then(() => console.log(5)),
]).then(() => console.log(6));

setTimeout(() => console.log(7), 200);

Promise.resolve().then(() => asyncFunc());

// 1
// 2
// 4
// 5
// 6
// 7
// 3
*/

/*
// 97
setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log("Создание промиса");
  resolve();
});

p.then(function () {
  console.log("Обработка промиса");
});

console.log("Конец скрипта");

// Создание промиса
// Конец скрипта
// Обработка промиса
// Таймаут
*/

/*
// 98
setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

console.log("Конец скрипта");

let p = new Promise(function (resolve, reject) {
  console.log("Создание промиса");
  resolve();
});

p.then(function () {
  console.log("Обработка промиса");
});

// Конец скрипта
// Создание промиса
// Обработка промиса
// Таймаут
*/

/*
// 99
console.log("Конец скрипта");

setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log("Создание промиса");
  resolve();
});

p.then(function () {
  console.log("Обработка промиса");
});

// Конец скрипта
// Создание промиса
// Обработка промиса
// Таймаут
*/

/*
// 100
let p = new Promise(function (resolve, reject) {
  console.log("Создание промиса");
  resolve();
});

p.then(function () {
  console.log("Обработка промиса");
});

console.log("Конец скрипта");

setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

// Создание промиса
// Конец скрипта
// Обработка промиса
// Таймаут
*/

/*
// 101
let p = new Promise(function (resolve, reject) {
  console.log("Создание промиса");
  resolve();
});

p.then(function () {
  console.log("Обработка промиса");
});

setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

console.log("Конец скрипта");

// Создание промиса
// Конец скрипта
// Обработка промиса
// Таймаут
*/

/*
// 102
let acc = 1;
console.log("Call 1:", acc);

acc++;
console.log("Call 2:", acc);

setTimeout(() => {
  acc++;
  console.log("Call 3:", acc);
}, 0);

let anotherAcc = acc;
console.log("Call 4:", anotherAcc, acc);

// Call 1: 1
// Call 2: 2
// Call 4: 2 2
// Call 3: 3
*/

/*
// 103
let acc = 1;
console.log("Call 1:", acc);

acc++;
console.log("Call 2:", acc);

Promise.resolve().then(() => {
  acc++;
  console.log("Call 3:", acc);
});

let anotherAcc = acc;
console.log("Call 4:", anotherAcc, acc);

// Call 1: 1
// Call 2: 2
// Call 4: 2 2
// Call 1: 3
*/

/*
// 104
async function asyncTask() {
  let acc = 1;
  console.log("Call 1:", acc);

  acc++;
  console.log("Call 2:", acc);

  await new Promise((resolve) => setTimeout(resolve, 0));

  acc++;
  console.log("Call 3:", acc);

  let anotherAcc = acc;
  console.log("Call 4:", anotherAcc, acc);
}

asyncTask();

// Call 1: 1
// Call 2: 2
// Call 3: 3
// Call 4: 3 3

*/

/*
// 105
function asyncTask(callback) {
  let acc = 1;
  console.log("Call 1:", acc);

  acc++;
  console.log("Call 2:", acc);

  setTimeout(() => {
    acc++;
    console.log("Call 3:", acc);
    callback(acc);
  }, 0);
}

asyncTask((anotherAcc) => {
  console.log("Call 4:", anotherAcc);
});

// Call 1: 1
// Call 2: 2
// Call 3: 3
// Call 4: 3
*/

/*
// 106
let acc = 1;
console.log("Call 1:", acc);

acc++;
console.log("Call 2:", acc);

Promise.resolve()
  .then(() => {
    acc++;
    console.log("Call 3:", acc);
  })
  .catch((error) => console.error(error));

let anotherAcc = acc;
console.log("Call 4:", anotherAcc, acc);

// Call 1: 1
// Call 2: 2
// Call 4: 2 2
// Call 3: 3
*/

/*
// 107
let acc = 1;

function doSomething() {
  setTimeout(() => {
    acc++;
    console.log("Call", acc);
    if (acc < 4) {
      doSomething();
    }
  }, 0);
}

doSomething();

// Call 2
// Call 3
// Call 4
*/

/*
// 108
setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log("Создание промиса");
  resolve();
});

p.then(function () {
  console.log("Обработка промиса");
});

console.log("Конец скрипта");

// Создание промиса
// Конец скрипта
// Обработка промиса
// Таймаут
*/

/*
// 109
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// 1
// 7
// 3
// 5
// 2
// 6
// 4
*/

/*
// 110
console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0);

// 1
// 6
// 3
// 5
// 2
// 4
// 7
*/

/*
// 111
async function asyncTask() {
  console.log(1);

  await new Promise((resolve) => setTimeout(resolve));

  console.log(2);

  try {
    await Promise.reject(3);
  } catch (error) {
    console.log(error);
  }

  await new Promise((resolve) => setTimeout(resolve)).then(() =>
    console.log(4)
  );

  await Promise.resolve(5).then(console.log);

  console.log(6);

  setTimeout(() => console.log(7), 0);
}

asyncTask();

// 1
// 2
// 3
// 4
// 5
// 6
// 7
*/

/*
// 112
function asyncTask(callback) {
  console.log(1);

  setTimeout(() => {
    console.log(2);
  });

  Promise.reject(3).catch(console.log);

  new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

  Promise.resolve(5).then(console.log);

  console.log(6);

  setTimeout(() => {
    console.log(7);
    if (callback) {
      callback();
    }
  }, 0);
}

asyncTask();

// 1
// 6
// 3
// 5
// 2
// 4
// 7
*/

/*
// 113
console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0);

// 1
// 6
// 3
// 5
// 2
// 4
// 7
*/

/*
// 114
let count = 1;

function doSomething() {
  console.log(count++);
  if (count <= 7) {
    setTimeout(doSomething, 0);
  }
}

doSomething();

// 1
// 2
// 3
// 4
// 5
// 6
// 7
*/

/*
// 115
async function asyncTask() {
  console.log(1);

  await new Promise((resolve) => setTimeout(resolve));

  console.log(2);

  try {
    await Promise.reject(3);
  } catch (error) {
    console.log(error);
  }

  await new Promise((resolve) => setTimeout(resolve)).then(() =>
    console.log(4)
  );

  await Promise.resolve(5).then(console.log);

  console.log(6);

  setTimeout(() => console.log(7), 0);
}

asyncTask();

// 1
// 2
// 3
// 4
// 5
// 6
// 7
*/

/*
// 116
function asyncTask(callback) {
  console.log(1);

  setTimeout(() => {
    console.log(2);
  });

  Promise.reject(3).catch(console.log);

  new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

  Promise.resolve(5).then(console.log);

  console.log(6);

  setTimeout(() => {
    console.log(7);
    if (callback) {
      callback();
    }
  }, 0);
}

asyncTask();

// 1
// 6
// 3
// 5
// 2
// 4
// 7
*/

/*
// 117
console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0);

// 1
// 6
// 3
// 5
// 2
// 4
// 7
*/

/*
// 118
(async () => {
  console.log(1);

  setTimeout(() => console.log(2));

  await Promise.reject(3).catch(console.log);

  await new Promise((resolve) => setTimeout(resolve)).then(() =>
    console.log(4)
  );

  await Promise.resolve(5).then(console.log);

  console.log(6);

  setTimeout(() => console.log(7), 0);
})();

// 1
// 3
// 2
// 4
// 5
// 6
// 7
*/

/*
// 119
async function asyncTask() {
  console.log(1);

  setTimeout(() => console.log(2));

  await Promise.reject(3).catch(console.log);

  await new Promise((resolve) => setTimeout(resolve)).then(() =>
    console.log(4)
  );

  await Promise.resolve(5).then(console.log);

  console.log(6);

  setTimeout(() => console.log(7), 0);
}

asyncTask();

// 1
// 3
// 2
// 4
// 5
// 6
// 7
*/

/*
// 120
function asyncTask(callback) {
  console.log(1);

  setTimeout(() => {
    console.log(2);
  });

  Promise.reject(3).catch(console.log);

  new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

  Promise.resolve(5).then(console.log);

  console.log(6);

  setTimeout(() => {
    console.log(7);
    if (callback) {
      callback();
    }
  }, 0);
}

asyncTask();

// 1
// 6
// 3
// 5
// 2
// 4
// 7
*/

/*
// 121
console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0);

// 1
// 6
// 3
// 5
// 2
// 4
// 7
*/

/*
// 122
async function asyncTask() {
  console.log(1);

  await new Promise((resolve) => setTimeout(resolve));

  console.log(2);

  try {
    await Promise.reject(3);
  } catch (error) {
    console.log(error);
  }

  await new Promise((resolve) => setTimeout(resolve)).then(() =>
    console.log(4)
  );

  await Promise.resolve(5).then(console.log);

  console.log(6);

  setTimeout(() => console.log(7), 0);
}

asyncTask();

// 1
// 2
// 3
// 4
// 5
// 6
// 7
*/

/*
// 123
let count = 1;

function doSomething() {
  console.log(count++);
  if (count <= 7) {
    setTimeout(doSomething, 0);
  }
}

doSomething();

// 1
// 2
// 3
// 4
// 5
// 6
// 7
*/

/*
// 124
const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "one")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 200, "two")
);

Promise.allSettled([promise1, promise2])
  .then((results) =>
    results.forEach((result) => console.log(result.status, result.value))
  )
  .catch((error) => console.error(error));

Promise.race([promise1, promise2])
  .then((value) => console.log(value))
  .catch((error) => console.error(error));

// one
// fulfiled: one
// rejected: undefined
*/

/*
// 125
const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "one")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 200, "two")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 300, "three")
);

Promise.any([promise1, promise2, promise3])
  .then((value) => console.log(value))
  .catch((errors) => console.error(errors));

// one
*/

/*
// 126
Promise.resolve("resolved")
  .then((value) => {
    console.log(value);
    return Promise.reject("rejected");
  })
  .then((value) => console.log(value))
  .catch((error) => console.error(error));

// resolved
// rejected
*/

/*
// 127
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 1000);
});

promise
  .then((value) => console.log(value))
  .catch((error) => console.error(error))
  .finally(() => console.log("finally"));

  // resolved
  // finally
  */

/*
// 128
async function asyncTask() {
  const promise1 = new Promise((resolve, reject) =>
    setTimeout(resolve, 100, "one")
  );
  const promise2 = new Promise((resolve, reject) =>
    setTimeout(resolve, 200, "two")
  );

  const [result1, result2] = await Promise.all([promise1, promise2]);
  console.log(result1, result2);
}

asyncTask();

// one, two
*/

/*
// 129
console.log("Task 1");

setTimeout(() => {
  console.log("Task 2");
}, 0);

Promise.resolve().then(() => {
  console.log("Task 3");
});

console.log("Task 4");

// 1
// 4
// 3
// 2
*/

/*
// 130
async function taskTwo() {
  console.log("Task 1");

  await new Promise((resolve) => setTimeout(resolve, 0));

  console.log("Task 2");
}

taskTwo();

console.log("Task 3");

// 1
// 3
// 2
*/

/*
// 131
console.log("Task 1");

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("Task 2");
  }, 0);
}

console.log("Task 3");

// 1
// 3
// 2
// 2
// 2
*/

/*
// 132
console.log("Task 1");

const promise1 = new Promise((resolve) => setTimeout(resolve, 2000, "Task 2"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "Task 3"));

Promise.all([promise1, promise2]).then(([result1, result2]) => {
  console.log(result1);
  console.log(result2);
});

console.log("Task 4");

// 1
// 4
// 2
// 3
*/

/*
// 133
console.log("Task 1");

const taskTwo = () =>
  new Promise((resolve) => setTimeout(resolve, 0, "Task 2"));

const executeTasks = async () => {
  console.log(await taskTwo());
  console.log("Task 3");
};

executeTasks();

console.log("Task 4");

// 1
// 4
// 2
// 3
*/
/*
// 134
const recursiveTask = (count) => {
  if (count <= 3) {
    setTimeout(() => {
      console.log("Task 2");
      recursiveTask(count + 1);
    }, 1000);
  }
};

console.log("Task 1");

recursiveTask(1);

console.log("Task 3");

// Task 1
// Task 3
// Task 2
// Task 2
// Task 2
*/

/*
// 135
console.log("Task 1");

const taskTwo = () =>
  new Promise((resolve) => setInterval(() => resolve("Task 2"), 1000));

taskTwo().then((result) => console.log(result));

setTimeout(() => console.log("Task 3"), 5000);

// Task 1
// Task 2
// Task 3
*/

/*
// 136
console.log("Task 1");

const promise1 = new Promise((resolve) => setTimeout(resolve, 3000, "Task 2"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Task 3"));

Promise.race([promise1, promise2]).then((result) => console.log(result));

console.log("Task 4");

// Task 1
// Task 4
// Task 3
*/

/*
// 137
const taskTwo = () =>
  new Promise((resolve) => setTimeout(resolve, 2000, "Task 2"));

console.log("Task 1");

(async () => {
  console.log(await taskTwo());
})();

console.log("Task 3");

// 1
// 3
// 2
*/

/*
// 138
console.log("Task 1");

const recursiveTask = (count) => {
  if (count <= 3) {
    setTimeout(() => {
      console.log(`Task ${count}`);
      recursiveTask(count + 1);
    }, 1000);
  }
};

recursiveTask(2);

console.log("Task 2");

// Task 1
// Task 2
// Task 2
// Task 3
*/

/*
// 139
console.log("Task 1");

const taskTwo = () =>
  new Promise((resolve) => setTimeout(resolve, 2000, "Task 2"));

(async () => {
  console.log(await taskTwo());
  console.log("Task 3");
})();

console.log("Task 4");

// Task 1
// Task 4
// Task 2
// Task 3
*/

/*
// 140
console.log("Task 1");

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("Task 2");
  }, 1000 * i);
}

console.log("Task 3");

// Task 1
// Task 3
// Task 2
// Task 2
// Task 2
*/

/*
// 141
console.log("Task 1");

const interval = setInterval(() => {
  console.log("Task 2");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log("Task 3");
}, 3000);

// Task 1
// Task 2
// Task 2
// Task 2
// Task 3
*/

/*
// 142
const recursiveTask = (count) => {
  if (count <= 3) {
    setTimeout(() => {
      console.log(`Task ${count}`);
      recursiveTask(count + 1);
    }, 1000);
  }
};

console.log("Task 1");

recursiveTask(1);

console.log("Task 2");

// Task 1
// Task 2
// Task 1
// Task 2
// Task 3
*/

/*
// 143
const taskOne = new Promise((resolve) => setTimeout(resolve, 2000, "Task 1"));
const taskTwo = new Promise((resolve) => setTimeout(resolve, 1000, "Task 2"));

console.log("Task 3");

(async () => {
  console.log(await Promise.race([taskOne, taskTwo]));
})();

// Task 3
// Task 2
*/

/*
// 144
const taskTwo = () =>
  new Promise((resolve) => setTimeout(resolve, 2000, "Task 2"));

console.log("Task 1");

(async () => {
  console.log(await taskTwo());
  console.log("Task 3");
})();

// Task 1
// Task 2
// Task 3
*/

/*
// 145
const taskOne = new Promise((resolve) => setTimeout(resolve, 3000, "Task 1"));
const taskTwo = new Promise((resolve) => setTimeout(resolve, 2000, "Task 2"));

(async () => {
  console.log(await Promise.race([taskOne, taskTwo]));
  console.log("Task 3");
})();

// Task 2
// Task 3
*/

/*
// 146
const taskOne = () =>
  new Promise((resolve) => setTimeout(resolve, 3000, "Task 1"));
const taskTwo = () =>
  new Promise((resolve) => setTimeout(resolve, 2000, "Task 2"));

(async () => {
  const results = await Promise.all([taskOne(), taskTwo()]);
  console.log(results);
  console.log("Task 3");
})();

// Task 1 Task 2
// Task 3
*/

/*
// 147
console.log("Task 1");

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("Task 2");
  }, 1000 * i);
}

console.log("Task 3");

// Task 1
// Task 3
// Task 2
// Task 2
// Task 2
*/

/*
// 148
console.log("Task 1");

const interval = setInterval(() => {
  console.log("Task 2");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log("Task 3");
}, 3000);

// Task 1
// Task 2
// Task 2
// Task 2
// Task 3
*/

/*
// 149
console.log("Task 1");

const interval = setInterval(() => {
  console.log("Task 2");
}, 1000);

const stopInterval = () => {
  clearInterval(interval);
  console.log("Task 3");
};

setTimeout(stopInterval, 5000);

// Task 1
// Task 2
// Task 2
// Task 2
// Task 2
// Task 2
// Task 3
*/

/*
// 150
console.log("Task 1");

const taskTwo = () =>
  new Promise((resolve) => setInterval(() => resolve("Task 2"), 1000));

(async () => {
  console.log(await taskTwo());
})();

setTimeout(() => console.log("Task 3"), 5000);

// Task 1
// Task 2
// Task 3
*/

/*
// 151
console.log("Task 1");

const interval = setInterval(async () => {
  console.log("Task 2");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log("Task 3");
}, 3000);

// Task 1
// Task 2
// Task 2
// Task 2
// Task 3
*/

/*
// 152
let count = 0;

console.log("Task 1");

const interval = setInterval(() => {
  console.log("Task 2");
  count++;
  if (count === 3) {
    clearInterval(interval);
    console.log("Task 3");
  }
}, 1000);

// Task 1
// Task 2
// Task 2
// Task 2
// Task 3
*/

/*
// 153
console.log("Task 1");

let count = 0;

const interval = setInterval(() => {
  count++;
  console.log("Task 2");
  if (count === 3) {
    clearInterval(interval);
    console.log("Task 3");
  }
}, 1000);

// Task 1
// Task 2
// Task 2
// Task 2
// Task 3
*/

/*
// 154
function makeCounter() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}

let someCounter = makeCounter();

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(someCounter()));
}

console.log(someCounter());

// 1 .. 11
*/

/*
// 155
const myPromise = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), timeout);
  });
};

setTimeout(() => console.log("1"), 1000);

myPromise(1000).then((res) => console.log("2"));

setTimeout(() => console.log("3"), 100);

myPromise(2000).then((res) => console.log("4"));

setTimeout(() => console.log("5"), 2000);

myPromise(1000).then((res) => console.log("6"));

setTimeout(() => console.log("7"), 1000);

myPromise(5000).then((res) => console.log("8"));

// 3
// 1
// 2
// 6
// 7
// 4
// 5
// 8
*/

/*
// 156
console.log("Start");

const observer = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Observer: Событие произошло");
    resolve("Success");
  }, 2000);
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1: Событие произошло");
    resolve("Success");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 2: Событие произошло");
    resolve("Success");
  }, 1500);
});

observer.then(() => {
  console.log("Observer: Обработка события");
});

Promise.all([promise1, promise2]).then(() => {
  console.log("Promise: Все события обработаны");
});

console.log("End");

// Start
// End
// Promise 1: Событие произошло
// Promise 2: Событие произошло
// Promise: Все события обработаны
// Observer: Событие произошло
// Observer: Обработка события
*/

/*
// 157
queueMicrotask(() => {
  console.log("1");
});

Promise.reject("2")
  .catch((res1) => {
    console.log("res1", res1);
    return "4";
  })
  .then((res2) => {
    console.log("res2", res2);
  });

queueMicrotask(() => {
  console.log("3");
});

// 1
// res1 2
// res2 4
// 3
*/

// 158
const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
  myPromise
    .then((res) => res)
    .then((res) => console.log(res, "Результат funcOne"));
  setTimeout(() => console.log("Timeout! 1", 0));
  console.log("Last line! 1");
}

async function funcTwo() {
  const res = await myPromise;
  console.log(res, "Результат funcTwo");
  setTimeout(() => console.log("Timeout! 2", 0));
  console.log("Last line! 2");
}

funcOne();
funcTwo();
