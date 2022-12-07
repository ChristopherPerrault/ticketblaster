require("dotenv").config();
const mongoose = require("mongoose");
const userModel = require("./UserModels");
const validator = require("validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MC2zeDM4nrUdWXdbni6c5xPitttdngpgIbTmCoDmjrOFdzeS4oFcwQaWyqm4ZgclZQ5lKVA76uKMPhiry5Ydm8X00Xp9AfGM0"
);
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
/* Update Account NO PASSWORD */
 app.post("/users/:id", async (request, response) => {
  console.log("post with id ");
 const id = request.params.id;
 const email = request.body.email;
 const firstName = request.body.firstName;
 const lastName = request.body.lastName;
 const address = request.body.address;
 const phoneNumber = request.body.phoneNumber;
 const creditCard = request.body.creditCard;
 const securityCode = request.body.securityCode;
 const expDate = request.body.expDate;
 const user = {
   id: id,
   email: email,   
   firstName: firstName,
   lastName: lastName,
   address: address,
   phoneNumber: phoneNumber,
   creditCard: creditCard,
   securityCode: securityCode,
   expDate: expDate,
 };
  try {
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



/* get request to /users to get ALL users */
app.get("/users", async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});
/* GET request using query parameters to /users/:id --- gets ONE user */
app.get("/users/:id", async (req, res) => {
  const id = req.query.id;
 // const email = req.query.email;
  try {
    const user = await userModel.findOne({
      id: id,
    });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

/* POST request using query parameters to /users/:email --- gets ONE user */
app.get("/users/:email", async (req, res) => {
  console.log("Post request w/ email")
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
  try {
    const results = await userModel.deleteOne({ id: id });
    res.send(results);
  } catch (err) {
    console.log(err);
  }
});

/* -----------------------Stripe----------------------------  */



app.post("/checkout", async (req, res) => {
  const items= req.body.items;
  let lineItems = [];
  console.log(req.body);
  items.forEach(item => {
    lineItems.push(
      {
        price: item.id,
        quantity: item.quantity,
      }
    )
  });
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/',
    cancel_url: 'http://localhost:3000/'
  })
  res.send(JSON.stringify({
    url: session.url
  }));
});
//key:pk_test_51MC2zeDM4nrUdWXdbSKMObsml3ocUOgJ50DRWRrWpA4sNonyuaGkMxVPoNbqNDoHyYwZGj1Gw1tXwmeJ40ZGofTT00KOtjE9iG
//secret: sk_test_51MC2zeDM4nrUdWXdbni6c5xPitttdngpgIbTmCoDmjrOFdzeS4oFcwQaWyqm4ZgclZQ5lKVA76uKMPhiry5Ydm8X00Xp9AfGM0
//TicketsAPI: price_1MC3E3DM4nrUdWXdpVAePbuO

/* const paymentIntent = await stripe.paymentIntents.create({
  amount: 500,
  currency: "gbp",
  payment_method: "pm_card_visa",
  statement_descriptor: "Thanks for using TicketBlaster!",
}); */

/* ---------------------------------------------------- APP LISTEN ---------------------------------------------------- */

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));