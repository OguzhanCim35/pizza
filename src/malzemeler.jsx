import { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

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

export function Malzemeler() {
  const [malzemeler, setMalzemeler] = useState([]);

  const handleMalzemeChange = (event) => {
    const { value, checked } = event.target;

    console.log(`Value: ${value}, Checked: ${checked}`);
    if (checked) {
      setMalzemeler((prevMalzemeler) => [...prevMalzemeler, value]);
    } else {
      setMalzemeler((prevMalzemeler) =>
        prevMalzemeler.filter((item) => item !== value)
      );
    }
  };

  return (
    <>
      <Form>
        <FormGroup>
          {malzemeListesi.map((malzeme) => (
            <div key={malzeme.id}>
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
        </FormGroup>
      </Form>
    </>
  );
}
