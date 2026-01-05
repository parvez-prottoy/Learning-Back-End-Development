function delayFn(time) {
  return new Promise((resolved) => setTimeout(resolved, time));
}
console.log("Promise Start...");

delayFn(2000).then(() => console.log("Promise is successfully done..."));

console.log("Promise End!!!");
