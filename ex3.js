const fs = require("fs");

 fs.readFile("welcome.txt", (err, data) => {
  if (err) {
    console.log(err);
  } 
  else {
    console.log(data.toString());
  }
});
