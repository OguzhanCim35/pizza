import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";
import { Orders } from "./OrdersForm";
import { Malzemeler } from "./malzemeler";

function App() {
  const [size, setSize] = useState("");
  const [kalinlik, setKalinlik] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [orderNotes, setOrderNotes] = useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleKalinChange = (event) => {
    setKalinlik(event.target.value);
  };

  return (
    <>
      <div className="container column space">
        <img src="../Assets/Iteration-1-assets/logo.svg" alt="" />
        <p>Anasayfa - Sipariş Oluştur</p>
      </div>
      <div>
        <div>
          <h2>Position Absolute Acı Pizza</h2>
          <p>85.50₺</p>
          <p>4.9</p>
          <p>(200)</p>
        </div>
        <div>
          <p>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </div>
      <Orders />
      <Malzemeler />
      <h2>Sipariş Notu</h2>
      <textarea placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>
    </>
  );
}

export default App;
