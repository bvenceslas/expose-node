const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3456;

// preview logs
app.use(morgan("dev"));

// create a simple middleware
app.get("/", (req, res) => {
  res.send(
    "You have been able to preview remotely what is running here locally."
  );
});

app.listen(port, () => {
  console.log(`expose-node app listening on port ${port} ...`);
});
