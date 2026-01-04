//  The Built-in URL Module
const url = require("url");

let adr = "http://localhost:8080/default.html?year=2026&month=january";

let q = url.parse(adr, true);

/* 
console.log(q);
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:8080',
  port: '8080',
  hostname: 'localhost',
  hash: null,
  search: '?year=2026&month=january',
  query: [Object: null prototype] { year: '2026', month: 'january' },
  pathname: '/default.html',
  path: '/default.html?year=2026&month=january',
  href: 'http://localhost:8080/default.html?year=2026&month=january'
} 
*/

/* console.log(q.host);
console.log(q.pathname);
console.log(q.search);

let qData = q.query;

console.log(qData); */

// URLSearchParams API

const { URL, URLSearchParams } = require("url");

const myURL = new URL("https://example.com/?name=Kai&age=30");

const params = new URLSearchParams(myURL.search);
// console.log(params);

// Get a parameter

const name = params.get("name");
console.log(name);
const age = params.get("age");
console.log(age);

// Add a parameter
params.append("city", "Narsingdi");

console.log("City: ", params.get("city"));

params.delete("age");
console.log(params);
