import { Form, FormGroup, Input, Label } from "reactstrap";
import { Malzemeler } from "./malzemeler";
import { useState } from "react";

export function Orders() {
  const [size, setSize] = useState("");
  const [kalinlik, setKalinlik] = useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleKalinChange = (event) => {
    setKalinlik(event.target.value);
  };

  return (
    <>
      <Form>
        <FormGroup tag="fieldset">
          <Label>
            Boyut Seç <span>*</span>
          </Label>
          <FormGroup check>
            <Input
              name="size"
              type="radio"
              value="Küçük"
              checked={size === "Küçük"}
              onChange={handleChange}
            />
            <Label check>Küçük</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              name="size"
              type="radio"
              value="Orta"
              checked={size === "Orta"}
              onChange={handleChange}
            />{" "}
            <Label check>Orta</Label>
          </FormGroup>
          <FormGroup check disabled>
            <Input
              name="size"
              type="radio"
              value="Büyük"
              checked={size === "Büyük"}
              onChange={handleChange}
            />{" "}
            <Label check>Büyük</Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <p>
            Hamur Seç <span>*</span>
          </p>
          <select name="kenar" value={kalinlik} onChange={handleKalinChange}>
            <option value="" disabled>
              Hamur Kalınlığı
            </option>
            <option value="ince">İnce</option>
            <option value="kalin">Kalın</option>
          </select>
        </FormGroup>
      </Form>
    </>
  );
}
