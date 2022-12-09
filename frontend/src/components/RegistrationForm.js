import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { validEmail, validPassword, validPhoneNumber, validCreditCard, validSecurityCode } from "../Regex";

function RegistrationForm() {
  document.title = "TicketBlaster | Event Details";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [expDate, setExpDate] = useState(null);

  // boolean values for the error attribute in the form inputs
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [firstNameErr, setFirstNameErr] = useState(null);
  const [lastNameErr, setLastNameErr] = useState(null);
  const [addressErr, setAddressErr] = useState(null);
  const [phoneNumberErr, setPhoneNumberErr] = useState(null);
  const [creditCardErr, setCreditCardErr] = useState(null);
  const [securityCodeErr, setSecurityCodeErr] = useState(null);
  const [expDateErr, setExpDateErr] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // set all the errors to false
    setEmailErr(false);
    setPasswordErr(false);
    setFirstNameErr(false);
    setLastNameErr(false);
    setAddressErr(false);
    setPhoneNumberErr(false);
    setCreditCardErr(false);
    setSecurityCodeErr(false);
    setExpDateErr(false);

    // check each error one by one and change the value to true if error
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }

    if (!validPassword.test(password)) {
      setPasswordErr(true);
    }

    if (firstName === "") {
      setFirstNameErr(true);
    }
    if (lastName === "") {
      setLastNameErr(true);
    }

    if (address === "") {
      setAddressErr(true);
    }

    if (!validPhoneNumber.test(phoneNumber)) {
      setPhoneNumberErr(true);
    }

    if (!validCreditCard.test(creditCard)) {
      setCreditCardErr(true);
    }

    if (!validSecurityCode.test(securityCode)) {
      setSecurityCodeErr(true);
    }

    if (expDate === null) {
      setExpDateErr(true);
    }

    // only send fetch request (i.e. registration attempt) if all errors are false
    if (
      emailErr === false &&
      passwordErr === false &&
      firstNameErr === false &&
      lastNameErr === false &&
      addressErr === false &&
      phoneNumberErr === false &&
      creditCardErr === false &&
      securityCodeErr === false &&
      expDateErr === false
    ) {
      fetch("http://localhost:3001/users/register", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          address: address,
          phoneNumber: phoneNumber,
          creditCard: creditCard,
          securityCode: securityCode,
          expDate: expDate,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((data) => data.json())
        .then((json) => {
          if (json.success === true) {
            try {
              alert("Successfully Registered! - Redirecting you to the login page");
              navigate("/login", { replace: true });
            } catch (error) {
              console.log(error);
            }
          } else {
            alert(`Invalid registration - email ${email} already exists`);
          }
        });
    }
  };

  return (
    <div>
      <form className="registration--form" onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <TextField
          type="text"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          error={emailErr}
          helperText={emailErr ? "Invalid Email" : " "}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          error={passwordErr}
          helperText={passwordErr ? "Min 8 letters, at least one symbol, one uppercase letter and one lowercase letter " : " "}
        />
        <TextField
          type="text"
          label="First Name"
          variant="outlined"
          onChange={(e) => setFirstName(e.target.value)}
          error={firstNameErr}
          helperText={firstNameErr ? "Must not be blank!" : " "}
        />
        <TextField
          type="text"
          label="Last Name"
          variant="outlined"
          onChange={(e) => setLastName(e.target.value)}
          error={lastNameErr}
          helperText={lastNameErr ? "Must not be blank!" : " "}
        />
        <TextField
          type="text"
          label="Address"
          variant="outlined"
          onChange={(e) => setAddress(e.target.value)}
          error={addressErr}
          helperText={addressErr ? "Must not be blank!" : " "}
        />
        <TextField
          type="text"
          label="Phone Number"
          variant="outlined"
          onChange={(e) => setPhoneNumber(e.target.value)}
          error={phoneNumberErr}
          helperText={phoneNumberErr ? "Must have a valid phone number format (i.e. 123-456-7890" : " "}
        />
        <TextField
          type="text"
          label="Credit Card"
          variant="outlined"
          onChange={(e) => setCreditCard(e.target.value)}
          error={creditCardErr}
          helperText={creditCardErr ? "Visa, MasterCard, American Express, Diners Club, Discover, and JCB cards are accepted" : " "}
        />
        <TextField
          type="text"
          label="Security Code"
          variant="outlined"
          onChange={(e) => setSecurityCode(e.target.value)}
          error={securityCodeErr}
          helperText={securityCodeErr ? "Must be a valid CVV code" : " "}
        />
        <br />

        <TextField
          type="date"
          label="Expiry Date"
          InputProps={{ inputProps: { min: "2022-12-12" } }}
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          onChange={(e) => setExpDate(e.target.value)}
          error={expDateErr}
          helperText={expDateErr ? "Must not be blank!" : " "}
        />
        <br />
        <Button type="submit" variant="contained">
          Register
        </Button>
      </form>
    </div>
  );
}

export default RegistrationForm;
