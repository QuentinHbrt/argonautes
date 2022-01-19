import React, { useState } from "react";

export const ArgoForm = (props) => {
  const [nameValue, setNameValue] = useState("");

  function handleChangeName(e) {
    setNameValue(e.target.value);
  }

  function handleSubmit(e) {
    if (nameValue === "") {
      return;
    }
    e.preventDefault();
    const newArgonaute = {
      id: Math.random().toString(),
      name: nameValue,
    };
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
