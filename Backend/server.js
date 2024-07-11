const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/v1", require("./routes"));

app.listen(process.env.PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " +
        process.env.PORT
    );
  else console.log("Error occurred, server can't start", error);
});
