import React, { useState } from "react";
import NavigationMenu from "./navigation";
import coronaTeaching from "../images/coronacare.png";
import CornaPrecautions from "./cornaprecaution";
import Countries from "./countries";

const Precaution = props => {
  return (
    <>
      <NavigationMenu />
      <div className="container-fluid">
        <div className="about-precaution">
          <Countries />
        </div>
        <div
          className="row justify-content-center col-md-12"
          style={{ paddingTop: "10px" }}
        >
          <h3>
            Coronavirus symptoms: What are they and how do I protect myself?
          </h3>
          <div className="bbc-image">
            <img
              src={coronaTeaching}
              style={{ width: "70%" }}
              alt="corona-teaching"
            />
            <figcaption>Image Source - BBC News</figcaption>
          </div>
        </div>
        <div className="corna-precaution">
          <CornaPrecautions />
        </div>
      </div>
    </>
  );
};

export default Precaution;
