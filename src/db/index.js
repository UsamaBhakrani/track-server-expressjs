const mongoose = require("mongoose");
const mongoUri =
  "mongodb+srv://oracle:773311889922@nodeexpressproject.kxoaosu.mongodb.net/track-server?retryWrites=true&w=majority&appName=NodeExpressProject";

mongoose
  .connect(mongoUri)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));
