const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const User = require("./models/User");

app.use(express.json());
app.use(authRoutes);

const mongoUri =
  "mongodb+srv://oracle:773311889922@nodeexpressproject.kxoaosu.mongodb.net/track-server?retryWrites=true&w=majority&appName=NodeExpressProject";

mongoose
  .connect(mongoUri)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.listen(port, () => console.log("listening on port " + port));
