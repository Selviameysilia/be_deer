const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const routers = require("./routes");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(morgan("combined"));
app.use(cors({ origin: "*" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routers);
app.get("/", (req, res) => {
  res.send({
    message: "Hallo 👋",
    status: "Server ready 🚀",
  });
});

app.listen(port, () => {
  console.log(`Server ready listening on http://localhost:${port}`);
});
