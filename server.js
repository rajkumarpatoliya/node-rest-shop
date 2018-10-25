/* jshint esversion:6 */
const http = require("http");
const port = process.env.port || 3000;
const app = require("./app");
const server = http.createServer(app);

server.listen(port, (req, res) => {
  console.log(`Server started at port ${port}`);
});
