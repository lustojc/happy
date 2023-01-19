import React, { useEffect, useState } from "react";
import "./App.css";

export default function Messages() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("myData");
    setArr(JSON.parse(data));
  }, []);

  return (
    <div className="App">
      {arr ? arr?.map((el, i) => (
        <div className="list">
          <div>{i + 1}.</div>
          <div style={{ marginLeft: "10px", display:'flex', flexDirection: 'column', alignItems: 'start'}} className="info">
            <div>{`Имя: ${el.name}`}</div>
            <div>{`Cообщение: ${el.message}`}</div>
          </div>
        </div>
      )) : <h1>Тут ничего нет {'('}</h1> }
      <button>
        <a href="/">Назад</a>
      </button>
    </div>
  );
}
