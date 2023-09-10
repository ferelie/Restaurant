import classes from "./Checkout.module.css";
import React, { useRef, useState, useEffect } from "react";

const Checkout = (props) => {
  const { exitHandler } = props;

  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (formValues.name.trim().length === 0) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
    }

    if (formValues.address.trim().length === 0) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        address: "Address is required",
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        address: "",
      }));
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div
        className={`${classes.control} ${
          formErrors.name !== "" ? classes.invalid : ""
        }`}
      >
        <label htmlFor="name">You Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        {formErrors.name !== "" && <p>{formErrors.name}</p>}
      </div>
      <div
        className={`${classes.control} ${
          formErrors.address !== "" ? classes.invalid : ""
        }`}
      >
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formValues.address}
          onChange={handleInputChange}
        />
        {formErrors.address !== "" && <p>{formErrors.address}</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={exitHandler}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
