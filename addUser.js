//file system module
const fs = require("fs");
function adduser(username, age) {
  const dataStruc = {
    username: null,
    age: null,
  };
  const data = fs.readFileSync("datasource.json", "utf-8");
  let newData;
if (data) {
  newData = JSON.parse(data);
} else {
  newData = [];
}

  console.log(newData);
  let prop = Object.create(dataStruc);
  prop.username = username;
  prop.age = age;
  newData.push(prop);
  // write
  fs.writeFileSync("datasource.json", JSON.stringify(newData));
}
module.exports = adduser;


