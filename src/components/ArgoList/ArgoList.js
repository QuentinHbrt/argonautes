import React from "react";
import { ArgoItem } from "../ArgoItem/ArgoItem";
import "./ArgoList.css";

export const ArgoList = (props) => {
  return (
    <>
      <ul className="container">
        {props.argonautes.map((argonaute) => (
          <ArgoItem key={argonaute.id} argonaute={argonaute} />
        ))}
      </ul>
    </>
  );
};
