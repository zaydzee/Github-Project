const http = require("http");
const URL = require("url");
const fs = require("fs");
const UserAc = require("./addUser");
const server = http.createServer(function (req, res) {
  const data = fs.readFileSync("datasource.json", "utf-8");
  if (req.url == "/") {
    res.writeHead(200, { Content_Type: "text/html" });
    res.write("welcome");
    res.end();
    console.log("zee")
  } else if (req.url == "/users") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { Content_Type: "application/json" });
    const jsonData = JSON.parse(data);
    res.write(JSON.stringify(jsonData));

    res.end();
  } else if (req.url == "/adduser?username=helen&age=25") {
    const newUrl = URL.parse(req.url, true);
    const params = newUrl.query;
    let u_name = params.username;
    let u_age = params.age;
    UserAc(u_name, u_age);
    res.end("record added");
  } else if (req.url.startsWith("/addNewUser")) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { Content_Type: "application/json" });
    const newUrl = URL.parse(req.url, true);
    const params = newUrl.query;
    let u_name = params.username;
    let u_age = params.age;
    UserAc(u_name, u_age);
    res.end("record added Succesfully");
  } else if (req.url == "/contact") {
    res.writeHead(200, { Content_Type: "text/html" });
    res.write("contact page");
    res.end();
  } else {
    res.writeHead(404, { Content_Type: "text/html" });
    res.end();
  }
});
server.listen(5000, function () {
  console.log("Server running");
});
