const http = require('http');
const fs = require('fs');

const rql = require('./routes');

const server = http.createServer(rql);
server.listen(3000);
