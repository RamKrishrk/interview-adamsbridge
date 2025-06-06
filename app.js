const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Jenkins CI/CD!\n By Ramakrishnan L \n\n Thank you!');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});