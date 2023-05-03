import React, { useState } from "react";

import "../styles/Contact.css";
import { Input } from "./NumberInput";
import { OtpForm } from "./OtpForm";

export const Contact = () => {
  const [inputNumber, setNumber] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputNumber);
  };
  return (
    <div className="Contact">
      <div className="ContactForm">
        <div className="log_wraps py-5 px-4">
          <div className="log_head ">
            <h4>
              Contact<span> Number</span>
            </h4>
          </div>

          <br />

          <form>
            <Input
              element="input"
              placeholder="Enter Phone Number"
              name="phone"
              pattern="[+]{1}[0-9]{11,14}"
              value={inputNumber}
              onChange={(e) => setNumber(e.target.value)}
              required={true}
              maxLength={10}
            />

            <button
              className="btn mt-5 mb-2"
              type="submit"
              onClick={submitHandler}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Send OTP
            </button>
          </form>
          <OtpForm />
        </div>
      </div>
    </div>
  );
};
