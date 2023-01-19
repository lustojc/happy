import React, { useState } from "react";
import "./App.css";

export default function Form() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleMessageName = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let list = JSON.parse(localStorage.getItem("myData") || "[]");
    let obj = {
      name: name,
      message: message,
    };
    list.push(obj);
    localStorage.setItem("myData", JSON.stringify(list));
    setName('')
    setMessage('')
  };

  return (
    <div className="form">
      <h2 style={{ marginBottom: "10px" }}>Кому</h2>
      <input
        className="formName"
        type="text"
        value={name}
        onChange={handleInputName}
      />
      <h2 style={{ marginBottom: "10px" }}>Записка</h2>
      <textarea
        className="formMessage"
        type="text"
        value={message}
        onChange={handleMessageName}
      />
      <button onClick={handleSubmit}>Отправить</button>

      <a style={{ marginTop: "10px" }} href={`/messages`}>
        ПРОЧИТАТЬ ЗАПИСКИ {">>"}
      </a>
    </div>
  );
}
