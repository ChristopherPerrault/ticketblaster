require("dotenv").config();
const mongoose = require("mongoose");
const userModel = require("./models");

const validator = require("validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(express.json()); // Allows express to read a request body
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* ---------------------------------------------------- REGISTER & LOGIN ---------------------------------------------------- */
/* ----------- REGISTER ----------- */
app.post("/users/register", async (request, response) => {
  const id = request.body.id;
  const username = request.body.username;
  const password = request.body.password;
  try {
    if (
      username &&
      validator.isAlphanumeric(username) &&
      password &&
      validator.isStrongPassword(password)
    ) {
      // Check to see if the user already exists. If not, then create it.
      const user = await userModel.findOne({ username: username });
      if (user) {
        console.log(
          "Invalid registration - username " + username + " already exists."
        );
        response.send({ success: false });
        return;
      } else {
        hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("Registering username " + username);
        const userToSave = { username: username, password: hashedPassword };
        await userModel.create(userToSave);
        response.send({ success: true });
        return;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
  response.send({ success: false });
});
/* ----------- LOGIN ----------- */
app.post("/users/login", async (request, response) => {
  const username = request.body.username;
  const password = request.body.password;
  try {
    if (username && password) {
      // Check to see if the user already exists. If not, then create it.
      const user = await userModel.findOne({ username: username });
      if (!user) {
        console.log("Invalid login - username " + username + " doesn't exist.");
        response.send({ success: false });
        return;
      } else {
        const isSame = await bcrypt.compare(password, user.password);
        if (isSame) {
          console.log("Successful login");
          response.send({ success: true });
          return;
        }
      }
    }
  } catch (error) {
    console.log(error.message);
  }
  response.send({ success: false });
});

/* ---------------------------------------------------- APP LISTEN ---------------------------------------------------- */

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
