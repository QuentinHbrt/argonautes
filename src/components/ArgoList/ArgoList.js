import React from "react";
import { ArgoItem } from "../ArgoItem/ArgoItem";

export const ArgoList = (props) => {
  return (
    <>
      <ul>
        {props.argonautes.map((argonaute) => (
          <ArgoItem key={argonaute.id} argonaute={argonaute} />
        ))}
      </ul>
    </>
  );
};
