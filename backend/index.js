require("dotenv").config();
const mongoose = require("mongoose");
const userModel = require("./UserModels");
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
  const email = request.body.email;
  const password = request.body.password;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const address = request.body.address;
  const phoneNumber = request.body.phoneNumber;
  const creditCard = request.body.creditCard;
  const securityCode = request.body.securityCode;
  const expDate = request.body.expDate;
  try {
    if (email && password && validator.isStrongPassword(password)) {
      // Check to see if the user already exists. If not, then create it.
      const user = await userModel.findOne({ email: email });
      if (user) {
        console.log("Invalid registration - email " + email + " already exists.");
        response.send({ success: false });
        return;
      } else {
        hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("Registering email " + email);
        const userToSave = {
          email: email,
          password: hashedPassword,
          firstName: firstName,
          lastName: lastName,
          address: address,
          phoneNumber: phoneNumber,
          creditCard: creditCard,
          securityCode: securityCode,
          expDate: expDate,
        };
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
  const email = request.body.email;
  const password = request.body.password;
  try {
    if (email && password) {
      // Check to see if the user already exists.
      const user = await userModel.findOne({ email: email });
      if (!user) {
        console.log("Invalid login - email " + email + " doesn't exist.");
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

/* Update Profile - Not implemented yet */
app.put("/users", async (req, res) => {
  const email = request.body.email;
  const password = request.body.password;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const address = request.body.address;
  const phoneNumber = request.body.phoneNumber;
  const creditCard = request.body.creditCard;
  const securityCode = request.body.securityCode;
  const expDate = request.body.expDate;
  const user = {
    email: email,
    password: hashedPassword,
    firstName: firstName,
    lastName: lastName,
    address: address,
    phoneNumber: phoneNumber,
    creditCard: creditCard,
    securityCode: securityCode,
    expDate: expDate
  };
  try {
    hashedPassword = await bcrypt.hash(password, saltRounds);
    const results = await userModel.replaceOne(
      {
        email: email,
      },
      user
    );
    console.log("matched: " + results.matchedCount);
    console.log("modified: " + results.modifiedCount);
    res.send(results);
  } catch (err) {
    console.log(err);
  }
});

/* ---------------------------------------------------- APP LISTEN ---------------------------------------------------- */

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));