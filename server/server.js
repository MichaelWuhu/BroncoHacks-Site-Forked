require("dotenv").config();
const express = require("express");

const app = express();
const port = 8080;

app.use(express.json());

const userRoute = require("./routes/users");
const teamRoute = require("./routes/teams");
// const exampleRoute = require("./routes/examples");

app.use("/users", userRoute);
app.use("/teams", teamRoute);
// app.use("/examples", exampleRoute);

app.get("/", async (req, res) => {
  await res.send("Successful Connection");
});

app.listen(port, () => {
  console.log("app listening on port", port);
});

