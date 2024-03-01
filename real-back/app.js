const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const PORT = 8000;
const app = express();
require("./db/conn");

// mongoose.set("debug", true);

dotenv.config({ path: "./.env" });

//middlewares
app.use(express.json());
app.use(cors());


//routes
// app.use(require("./router/auth"));
app.use("/api", require("./controller/registerController"));
app.use("/api", require("./controller/postPropertyController"));




const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
