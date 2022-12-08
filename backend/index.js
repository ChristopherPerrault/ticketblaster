require("dotenv").config();
const mongoose = require("mongoose");
const userModel = require("./UserModels");
const validator = require("validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51MC2zeDM4nrUdWXdbni6c5xPitttdngpgIbTmCoDmjrOFdzeS4oFcwQaWyqm4ZgclZQ5lKVA76uKMPhiry5Ydm8X00Xp9AfGM0");
const app = express();
const port = 3001;
const axios = require("axios");
const ticketRecordModel = require("./TicketRecordModels");

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
  console.log("Received email: " + email + " and password: " + password);
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
          console.log("User exists " + email);
          console.log("Successful login");
          response.send({ success: true, email: email });

          return;
        }
      }
    }
  } catch (error) {
    console.log(error.message);
  }
  response.send({ success: false });
});
/* Update Account by id
  Consumed at /admin                 */
app.post("/users/admin/:id", async (request, response) => {
  console.log("ADMIN --- post with id ");
  const id = request.params.id;
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
    hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = {
      id: id,
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

    console.log("ADMIN ---Trying to update record with credentials: " + id);
    const results = await userModel.replaceOne(
      {
        id: id,
      },
      user
    );
    console.log("matched: " + results.matchedCount);
    console.log("modified: " + results.modifiedCount);
    response.send(results);
  } catch (err) {
    console.log(err);
  }
});
/*Update Account WITH PASSWORD by id
  Consumed at /account                 */
app.post("/users/:id", async (request, response) => {
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
  console.log("post with id: " + id);
  try {
    hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = {
      id: id,
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

    console.log("Trying to update record with credentials: " + id);
    const results = await userModel.replaceOne(
      {
        id: id,
      },
      user
    );
    console.log("matched: " + results.matchedCount);
    console.log("modified: " + results.modifiedCount);
    console.log(results);
    response.send(results);
  } catch (err) {
    console.log(err);
  }
});

/* get request to /users to get ALL users */
app.get("/users", async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});
/* GET request using query parameters to /users/:id --- gets ONE user  */
app.get("/users/id/:id", async (req, res) => {
  console.log("GET request w/ ID: " + req.params.id);
  const id = req.params.id;
  try {
    console.log("Looking for ID: " + id);
    const user = await userModel.findById(id).exec();
    console.log("Found user with ID: " + user.id);
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

/*GET request using query parameters to /users/:email --- gets ONE user --- Changed to be longer needed */
app.get("/users/email/:email", async (req, res) => {
  console.log("get request w/ email: " + req.params.email);
  // const id = req.query.id;
  const email = req.params.email;
  try {
    const user = await userModel.findOne({
      email: email,
    });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

/* An API delete request using URL path parameters to /users/:id */
app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  console.log("Deleting user: " + id);
  try {
    const results = await userModel.deleteOne({ id: id });
    res.send(results);
  } catch (err) {
    console.log(err);
  }
});

/* ---------------------------------------------------- TicketRecord Model  ---------------------------------------------------- */
/* ----------- Create a record of purchase ----------- */
app.post("/tickets/purchase", async (request, response) => {
  const id = request.body.id;
  const email = request.body.email;
  const ticketLevel = request.body.ticketLevel;
  const totalTickets = request.body.totalTickets;
  const totalPrice = request.body.totalPrice;
  const purchaseDate = request.body.purchaseDate;
  const eventName = request.body.eventName;

  try {
    const ticketRecordToCreate = {
      email: email,
      ticketLevel: ticketLevel,
      totalTickets: totalTickets,
      totalPrice: totalPrice,
      purchaseDate: purchaseDate,
      eventName: eventName,
    };
    await ticketRecordModel.create(ticketRecordToCreate);
    response.send({ success: true });
    return;
  } catch (error) {
    console.log(error.message);
  }
  response.send({ success: false });
});

/* --------- Get all tickets ------------ */
/* get request to /users to get ALL users */
app.get("/allTickets", async (req, res) => {
  try {
    const allTickets = await ticketRecordModel.find();
    res.send(allTickets);
  } catch (err) {
    console.log(err);
  }
});

/* ---------------------------------------------------- APP LISTEN ---------------------------------------------------- */

app.listen(port, () => console.log(`TicketBlaster app listening on port ${port}`));

// change these keys based on contents of .env file
// this sets the api data to be fetched from 3001/api, therefore they are outside of the frontend and hidden
app.get("/api", (req, res) => {
  const options = {
    method: "GET",
    url: `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=522&apikey=${process.env.API_KEY_CHRIS}`,
  };

  axios.request(options).then((response) => {
    res.json(response.data);
  });
});
