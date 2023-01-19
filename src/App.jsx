import { useEffect, useState } from "react";
import "./App.css";
import we from "./photos/we.jpg";
import we2 from "./photos/we2.jpg";
import PhotoSlider from "./PhotoSlider";

import samka from "./assets/samka.mp3";

import vk from "./assets/vk.svg";
import tg from "./assets/tg.svg";
import inst from "./assets/inst.svg";

import kot from "./photos/ya.jpg";
import tr from "./photos/trusi.jpg";

import n1 from "./photos/1.jpg";
import n2 from "./photos/2.jpg";
import n3 from "./photos/3.jpg";
import n4 from "./photos/4.jpg";
import n5 from "./photos/5.jpg";
import n6 from "./photos/6.jpg";
import n7 from "./photos/7.jpg";
import n8 from "./photos/8.jpg";
import n9 from "./photos/9.jpg";
import n10 from "./photos/10.jpg";
import n11 from "./photos/11.jpg";
import n12 from "./photos/12.jpg";
import n13 from "./photos/13.jpg";
import n14 from "./photos/14.jpg";
import n15 from "./photos/15.jpg";
import n16 from "./photos/16.jpg";
import n17 from "./photos/17.jpg";
import n18 from "./photos/18.jpg";
import n19 from "./photos/19.jpg";
import n20 from "./photos/20.jpg";
import n21 from "./photos/21.jpg";
import Form from "./Form";

function App() {
  const [timePassed, setTimePassed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("05/01/2021");
    const interval = setInterval(() => {
      const currentTime = new Date();
      const diff = currentTime - startDate;
      setTimePassed({
        days: Math.floor(diff / 8.64e7),
        hours: Math.floor((diff % 8.64e7) / 3.6e6),
        minutes: Math.floor((diff % 3.6e6) / 6e4),
        seconds: Math.floor((diff % 6e4) / 1e3),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <audio src={samka} autoPlay></audio>
      <div style={{ fontSize: 100 }}>SA</div>
      <div className="names">
        <div className="glow">Sasha</div>
        <div style={{ width: 40, height: 40 }}>❤️‍🔥</div>
        <div className="glow">Ane4ka</div>
      </div>

      <div className="hb rainbow">
        С Днем Рождения, Любимая Бусинка!!!!!💞💞
      </div>

      <div className="main">
        <img className="ph" src={we} alt="we" />
        <img className="ph2" src={we2} alt="we2" />
        <div className="heart">🧡</div>
        <div className="censored">censored</div>
      </div>

      <div style={{ marginTop: 100 }}>
        <h1>
          Вместе с 👩‍❤️‍👨 бусинкой с 05.01.2021 👫,{" "}
          <p
            style={{ display: "inline", fontStyle: "italic", color: "yellow" }}
          >
            а именно
          </p>
          :
        </h1>
        <div className="date">
          {timePassed.days} дней {timePassed.hours} часов {timePassed.minutes}{" "}
          минут {timePassed.seconds} секунд
        </div>
      </div>

      <div style={{ marginTop: 100, marginBottom: 100 }}>
        <h2 style={{ marginBottom: 100, fontSize: 60 }}>
          А вот это моя любимая бусинка 💝
        </h2>
        <PhotoSlider
          photos={[
            n1,
            n2,
            n3,
            n4,
            n5,
            n6,
            n7,
            n8,
            n9,
            n10,
            n11,
            n12,
            n13,
            n14,
            n15,
            n16,
            n17,
            n18,
            n19,
            n20,
            n21,
          ]}
        />
      </div>
      <div>
        <Form />
      </div>

      <div style={{ marginTop: 50 }}>
        <h1>
          А вот сейчас мы немного далеко друг от друга, но надеюсь, скоро будем
          вместе! 😢😢😢
        </h1>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ada33b08f86b9b6a2230306a1fa5f4bfaacd4336f2c7570cb4ad4ef8d58929db7&amp;source=constructor"
          width="1064"
          height="660"
          frameborder="0"
        ></iframe>

        <div className="rofl">
          <div>
            <h2 style={{ marginTop: 20 }}>Я без тебя! 👿</h2>
            <img
              src={kot}
              style={{ width: "400px", height: "400px", marginTop: 20 }}
              alt="ya"
            />
          </div>
          <div>
            <h2 style={{ marginTop: 20 }}>Я c тобой! 😈</h2>
            <img
              src={tr}
              style={{ width: "400px", height: "400px", marginTop: 20 }}
              alt="ya"
            />
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: 50 }}>Тута можно найти бусю!</h2>
      <div style={{ marginTop: 30 }} className="bio">
        <a href="https://www.instagram.com/akofitova/" target="_blank">
          <img src={inst} alt="inst"></img>
        </a>
        <a href="https://vk.com/akofitova" target="_blank">
          <img src={vk} alt="vk"></img>
        </a>
        <a href="https://t.me/akofitova" target="_blank">
          <img src={tg} alt="tg"></img>
        </a>
      </div>
    </div>
  );
}

export default App;
