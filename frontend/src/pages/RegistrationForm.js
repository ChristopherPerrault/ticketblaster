import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const phoneNumberRef = useRef();
  const creditCardRef = useRef();
  const securityCodeRef = useRef();
  const expDateRef = useRef();

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/users/register", {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        address: addressRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        creditCard: creditCardRef.current.value,
        securityCode: securityCodeRef.current.value,
        expDate: expDateRef.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        alert(JSON.stringify(json));
        // redirect to home
        try {
          navigate("/login", { replace: true });
        } catch (error) {
          console.log(error);
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input id="email" type="email" ref={emailRef} required />
        <br />
        <label for="password">Password</label>
        <input id="password" type="password" ref={passwordRef} required />
        <br />
        <label for="firstName">First Name</label>
        <input id="firstName" type="text" ref={firstNameRef} required />
        <br />
        <label for="lastName">Last Name</label>
        <input id="lastName" type="text" ref={lastNameRef} required />
        <br />
        <label for="address">Address</label>
        <input id="address" type="text" ref={addressRef} required />
        <br />
        <label for="phoneNumber">Phone Number</label>
        <input id="phoneNumber" type="text" ref={phoneNumberRef} required />
        <br />
        <label for="creditCard">Credit Card</label>
        <input id="creditCard" type="text" ref={creditCardRef} required />
        <br />
        <label for="securityCode">Security Code</label>
        <input id="securityCode" type="text" ref={securityCodeRef} required />
        <br />
        <label for="expDate">Expiry Date</label>
        <input id="expDate" type="date" ref={expDateRef} required />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
