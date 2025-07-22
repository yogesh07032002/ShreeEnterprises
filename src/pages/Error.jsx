import { NavLink } from "react-router-dom";
import React from "react";

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="container content">
          <h2 className="header">404</h2>
          <h4 className="bg-red-500 ">Sorry! Page Not Found</h4>
          {/* <p>
            Oops! It seems like the page you are trying to access does not exist.
            If you believe there is an issue, feel free to report it, and we will
            look into it.
          </p>
          <div className="btns">
            <NavLink to="/">Return Home</NavLink>
            <NavLink to="/contact">Report Problem</NavLink>
          </div> */}
        </div>
      </section>
    </>
  );
};
