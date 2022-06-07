setTimeout(function () {
  console.log("b");
}, 10);

const aTimeoutId = setInterval(function () {
  console.log("a");
}, 1000);

setTimeout(function () {
  console.log("c");
}, 0);

// stack of operations
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// clearTimeout(aTimeoutId);
clearInterval(aTimeoutId);
