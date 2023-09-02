const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "auth-service",
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => console.log(err.message));

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to db");
});

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoose connection is disconnected");
});

//SIGINT when pressed ctrl+c
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});
