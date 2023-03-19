require("dotenv").config("./.env");

const http = require("http");
const hostname = "127.0.0.1"
const port = 3000;

function checkSecret(userSecret) {
    return userSecret === process.env.NODE_ENV;
}
if (checkSecret('mySecretKey')) {
    console.log('Access granted.');
} else {
    console.log('Access denied.');
}

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
});

server.listen(port, hostname, () => {})
