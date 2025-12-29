// Basis server
/* 

const http = require("http");
const PORT = 8080;

// create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  // send the response
  res.end("Hello, World!!!");
});

// server listen
server.listen(PORT, "localhost", () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 

*/

// Setting Multiple Headers

/* 

const http = require("http");
const PORT = 8080;

// create server
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "text/html",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Set-Cookie": "sessionid=abc123; HttpOnly",
  });
  //   set the response
  res.end("<h1>Welcome the server...</h1>");
});

// server listen
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 

*/

/* Common HTTP Status Codes

    200	OK	Standard response for successful HTTP requests
    201	Created	Request has been fulfilled and new resource created
    301	Moved Permanently	Resource has been moved to a new URL
    400	Bad Request	Server cannot process the request due to client error
    401	Unauthorized	Authentication is required
    403	Forbidden	Server refuses to authorize the request
    404	Not Found	Requested resource could not be found
    500	Internal Server Error	Unexpected condition was encountered

*/

/* 

Common Response Headers

Content-Type: Specifies the media type of the content (e.g., text/html, application/json)

Content-Length: The length of the response body in bytes

Location: Used in redirects (with 3xx status codes)

Set-Cookie: Sets HTTP cookies on the client

Cache-Control: Directives for caching mechanisms
Access-Control-Allow-Origin: For CORS support 

*/

// Reading Request Headers

/* 

const http = require("http");
const PORT = 8080;

const server = http.createServer((req, res) => {
  console.log("Request Headers:", req.headers);
  // Get specific headers (case-insensitive)
  const userAgent = req.headers["user-agent"];
  const acceptLanguage = req.headers["accept-language"];

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`User-Agent: ${userAgent}\nAccept-Language: ${acceptLanguage}`);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 

*/
