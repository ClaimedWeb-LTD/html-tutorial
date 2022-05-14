const express = require("express");
const app = express();
const port = 2000;
var path = require("path");
app.use(express.static(path.join(__dirname, "")));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}`);
});
