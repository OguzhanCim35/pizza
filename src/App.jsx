import { useState } from "react";
import "./App.css";
import { Form, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const malzemeListesi = [
  { value: "Pepperoni", id: "Pepperoni" },
  {
    value: "Tavuk Izgara",
    id: "Tavuk Izgara",
  },
  {
    value: "Mısır",
    id: "Mısır",
  },
  {
    value: "Sarımsak",
    id: "Sarımsak",
  },
  {
    value: "Ananas",
    id: "Ananas",
  },
  {
    value: "Sosis",
    id: "Sosis",
  },
  {
    value: "Soğan",
    id: "Soğan",
  },
  {
    value: "Sucuk",
    id: "Sucuk",
  },
  {
    value: "Biber",
    id: "Biber",
  },
  {
    value: "Kabak",
    id: "Kabak",
  },
  {
    value: "Kanada Jambonu",
    id: "Kanada Jambonu",
  },
  {
    value: "Domates",
    id: "Domates",
  },
  {
    value: "Jalepeno",
    id: "Jalepeno",
  },
];

function App() {
  const [size, setSize] = useState("");
  const [kalinlik, setKalinlik] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [orderNotes, setOrderNotes] = useState("");
  const [selectionPrice, setSelectionPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(85.5);
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleKalinChange = (event) => {
    setKalinlik(event.target.value);
  };

  const handleMalzemeChange = (event) => {
    const { value, checked } = event.target;
    const pricePerItem = 5; // Her malzeme 5 TL
    if (checked) {
      setMalzemeler((prev) => [...prev, value]);
      setSelectionPrice((prevPrice) => prevPrice + pricePerItem);
      setTotalPrice((prevTotal) => prevTotal + pricePerItem * quantity);
    } else {
      setMalzemeler((prev) => prev.filter((item) => item !== value));
      setSelectionPrice((prevPrice) => prevPrice - pricePerItem);
      setTotalPrice((prevTotal) => prevTotal - pricePerItem * quantity);
    }
  };

  const handleNotesChange = (event) => {
    setOrderNotes(event.target.value);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setTotalPrice((prevTotal) => prevTotal + 85.5 + selectionPrice);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setTotalPrice((prevTotal) => prevTotal - (85.5 + selectionPrice));
    }
  };
  const handleOrder = () => {
    // Sipariş verme işlemleri burada yapılacak
    console.log("Sipariş verildi");
  };

  return (
    <>
      <header>
        <div className="content-container  column space">
          <img src="../Assets/Iteration-1-assets/logo.svg" alt="" />
          <div className="white">Anasayfa - Sipariş Oluştur</div>
        </div>
      </header>
      <div>
        <div className="content-container gap-l">
          <h2 className="font">Position Absolute Acı Pizza</h2>
          <div className="flex space padding-l">
            <p className="font">85.50₺</p>
            <p className="font-s">4.9</p>
            <p className="font-s">(200)</p>
          </div>
        </div>
      </div>
      <div>
        <div className="form-container">
          <p className="content-container font-w">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>

        <Form>
          <div className="content-container flex space padding-xl ">
            <FormGroup tag="fieldset">
              <Label className="font">
                Boyut Seç <span className="red">*</span>
              </Label>
              <div className="">
                <FormGroup check>
                  <Input
                    name="size"
                    type="radio"
                    value="Küçük"
                    checked={size === "Küçük"}
                    onChange={handleChange}
                    id="kücük"
                  />
                  <Label check htmlFor="kücük" className="font-w">
                    Küçük
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="size"
                    type="radio"
                    value="Orta"
                    checked={size === "Orta"}
                    onChange={handleChange}
                    id="orta"
                  />{" "}
                  <Label check htmlFor="orta" className="font-w">
                    Orta
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Input
                    name="size"
                    type="radio"
                    value="Büyük"
                    checked={size === "Büyük"}
                    onChange={handleChange}
                    id="büyük"
                  />{" "}
                  <Label check htmlFor="büyük" className="font-w">
                    Büyük
                  </Label>
                </FormGroup>
              </div>
            </FormGroup>
            <FormGroup>
              <p className="font">
                Hamur Seç <span className="red">*</span>
              </p>
              <select
                name="kenar"
                value={kalinlik}
                onChange={handleKalinChange}
              >
                <option value="" disabled>
                  Hamur Kalınlığı
                </option>
                <option value="ince">İnce</option>
                <option value="kalin">Kalın</option>
              </select>
            </FormGroup>
          </div>
          <div className="flex column font-x content-container padding-l">
            <h3>Ek Malzemeler</h3>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          </div>
          <FormGroup>
            <div className="content-container flex column size-boyut3 label-font">
              {malzemeListesi.map((malzeme) => (
                <div className="label-font" key={malzeme.id}>
                  <Input
                    type="checkbox"
                    name={malzeme.id}
                    id={malzeme.id}
                    value={malzeme.value}
                    onChange={handleMalzemeChange}
                    checked={malzemeler.includes(malzeme.value)}
                  />
                  <Label htmlFor={malzeme.id}>{malzeme.value}</Label>
                </div>
              ))}
            </div>
          </FormGroup>
        </Form>
        <div className="orders-note content-container flex column">
          <h2>Sipariş Notu</h2>
          <textarea
            className="radius"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={orderNotes}
            onChange={handleNotesChange}
          ></textarea>
        </div>
        <div className="seperator-container">
          <div className="seperator"></div>
        </div>
        <div className="order-total-container">
          <h2>Sipariş Toplamı</h2>
          <p>
            Seçimler: <span>{selectionPrice.toFixed(2)}₺</span>
          </p>
          <p>
            Toplam: <span>{totalPrice.toFixed(2)}₺</span>
          </p>
          <div className="quantity-order">
            <div className="quantity-control">
              <button className="quantity-button" onClick={decreaseQuantity}>
                -
              </button>
              <span>{quantity}</span>
              <button className="quantity-button" onClick={increaseQuantity}>
                +
              </button>
            </div>
            <button className="order-button" onClick={handleOrder}>
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
