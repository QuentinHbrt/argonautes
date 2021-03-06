import React, { useState } from "react";
import { db } from "../../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "./ArgoForm.css";

export const ArgoForm = (props) => {
  // State initial
  const [nameValue, setNameValue] = useState("");

  // Fonction pour définir un nouvel état de l'input appelé via onChange
  function handleChangeName(e) {
    setNameValue(e.target.value);
  }

  // Fonction appelé lors de la soumission du formulaire via onSubmit
  function handleSubmit(e) {
    if (nameValue === "") {
      return;
    }
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
    <form className="new-member-form" onSubmit={handleSubmit}>
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
