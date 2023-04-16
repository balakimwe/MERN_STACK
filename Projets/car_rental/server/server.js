const express = require("express");

const app = express();
const cors = require("cors");
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./config/mongoose.config");

//Will Need Routes declaration HERE
const Routes = require("./routes/cars.routes");
Routes(app);

app.listen(port, () =>
  console.log(`Welcome to the Death Star, you are on bridge port ${port}`)
);
