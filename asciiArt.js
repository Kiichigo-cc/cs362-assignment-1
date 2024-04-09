const argv = process.argv;
const stringInput = argv[2]
var figlet = require("figlet");

figlet(stringInput, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});