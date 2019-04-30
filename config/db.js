const mongoose = require("mongoose");

// DB Config
const db = require("./keys").mongoURI;

const config = {
  //autoIndex: false,
  useNewUrlParser: true
};

const connectDB = async () => {
  console.log("running connectDB()");
  try {
    console.log("trying...");
    await mongoose.connect(db, config);
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.log(err);
    // Exit
    process.exit(1);
  }
};

module.exports = connectDB;
