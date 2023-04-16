const mongoose = require("mongoose");

const database = "songdatabase2023";

mongoose.set("strictQuery", false);

mongoose.connect(`mongodb://127.0.0.1/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Established a connection to the Death Star db:${database}`))

  .catch((err) => console.log("something is wrong with the Death Star db!", err));
