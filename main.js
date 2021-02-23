const http = require('http');
const express = require('express');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('My Server');
}

const server = http.createServer(requestListener);
server.listen(8080, () => { console.log("server is running") });
