import React, { useState } from "react";
import "../styles/otp.css";
import OTPInput from "./OTPInputComponent";

export const OtpForm = () => {
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Contact Verification
              </h5>
            </div>
            <div className="modal-body">
              <form>
                <OTPInput
                  autoFocus
                  isNumberInput
                  length={6}
                  className="otpContainer"
                  inputClassName="otpInput"
                  onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                  Understood
                </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
