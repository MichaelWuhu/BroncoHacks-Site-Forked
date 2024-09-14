require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors())

const userRoute = require("./routes/users");
const teamRoute = require("./routes/teams");
const authRoute = require("./routes/auth");
// const exampleRoute = require("./routes/examples");

app.use("/users", userRoute);
app.use("/teams", teamRoute);
app.use("/auth", authRoute);
// app.use("/examples", exampleRoute);

app.get("/", async (req, res) => {
  await res.send("Successful Connection");
});

app.listen(port, () => {
  console.log("app listening on port", port);
});

