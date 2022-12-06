import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { validEmail, validPassword, validPhoneNumber } from "../Regex";

function RegistrationForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [creditCard, setCreditCard] = React.useState("");
  const [securityCode, setSecurityCode] = React.useState("");
  const [expDate, setExpDate] = React.useState(null);

  const [emailErr, setEmailErr] = React.useState(false);
  const [passwordErr, setPasswordErr] = React.useState(false);
  const [firstNameErr, setFirstNameErr] = React.useState(false);
  const [lastNameErr, setLastNameErr] = React.useState(false);
  const [addressErr, setAddressErr] = React.useState(false);
  const [phoneNumberErr, setPhoneNumberErr] = React.useState(false);
  const [creditCardErr, setCreditCardErr] = React.useState(false);
  const [securityCodeErr, setSecurityCodeErr] = React.useState(false);
  const [expDateErr, setExpDateErr] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailErr(false);
    setPasswordErr(false);
    setFirstNameErr(false);
    setLastNameErr(false);
    setAddressErr(false);
    setPhoneNumberErr(false);
    setCreditCardErr(false);
    setSecurityCodeErr(false);
    setExpDateErr(false);

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

    if (creditCard === "") {
      setCreditCardErr(true);
    }

    if (securityCode === "") {
      setSecurityCodeErr(true);
    }

    if (expDate === null) {
      setExpDateErr(true);
    }

    if (
      !emailErr &&
      !passwordErr &&
      !firstNameErr &&
      !lastNameErr &&
      !addressErr &&
      !phoneNumberErr &&
      !creditCardErr &&
      !securityCodeErr &&
      !expDateErr
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
          if (json.success == true) {
            try {
              navigate("/login", { replace: true });
            } catch (error) {
              console.log(error);
            }
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
          helperText={creditCardErr ? "Must not be blank!" : " "}
        />
        <TextField
          type="text"
          label="Security Code"
          variant="outlined"
          onChange={(e) => setSecurityCode(e.target.value)}
          error={securityCodeErr}
          helperText={securityCodeErr ? "Must not be blank!" : " "}
        />
        <br />
        <TextField
          type="date"
          label="Expiry Date"
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
