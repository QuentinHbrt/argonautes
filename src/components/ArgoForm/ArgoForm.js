import React, { useState } from "react";
import { db } from "../../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const ArgoForm = (props) => {
  const [nameValue, setNameValue] = useState("");

  function handleChangeName(e) {
    setNameValue(e.target.value);
  }

  function handleSubmit(e) {
    if (nameValue === "") {
      return;
    }
    console.log("submit");
    e.preventDefault();
    const newArgonaute = addDoc(collection(db, "users"), {
      id: Math.random().toString(),
      name: nameValue,
      datetime: serverTimestamp(),
    });
    props.onSubmitArgonaute(newArgonaute);
    setNameValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>{"Nom de l'Argonaute"}</label>
      <input
        onChange={handleChangeName}
        type="text"
        placeholder="Charalampos"
        value={nameValue}
        id="name"
      />
      <input type="submit" value="Envoyer" />
    </form>
  );
};
