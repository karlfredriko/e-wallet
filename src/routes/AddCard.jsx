import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { RenderOpt } from "../features/cards/RenderOpt";
import { checkExpiry } from "../utils/helper";
import { PreviewCard } from "../features/cards/PreviewCard";

export const AddCard = () => {
  const { first, last } = useOutletContext();
  const initialValues = {
    number: "",
    name: `${first.toUpperCase()} ${last.toUpperCase()}`,
    cvc: "",
    month: "01",
    year: "23",
    issuer: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { number, name, cvc, month, year, issuer } = formValues;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "issuer") {
      setFormValues({ ...formValues, [name]: value });
    } else {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormValues({ ...formValues, [name]: numericValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const validate = (val) => {
    const errors = {};
    console.log("validate is running");
    if (!val.number) {
      errors.number = "*Card Number is required";
    } else if (val.number.length < 16) {
      errors.number = "*Card Number is incomplete";
    }
    if (!val.cvc) {
      errors.cvc = "*Cvc is required";
    } else if (val.cvc.length < 3) {
      errors.cvc = "*Cvc is incomplete";
    }
    if (!checkExpiry(val.month, val.year)) {
      errors.expiry = "*Expiry Date is invalid";
    }
    if (!val.issuer) {
      errors.issuer = "*Card Vendor is required";
    }
    // console.log(errors);
    return errors;
  };

  return (
    <>
      <p>/addcard - route</p>
      <PreviewCard
        name={name}
        issuer={issuer}
        number={number}
        month={month}
        year={year}
        cvc={cvc}
      />

      <form className="relative" onSubmit={handleSubmit}>
        <label htmlFor="numberInput">Card Number</label>
        <input
          id="numberInput"
          type="text"
          name="number"
          value={number}
          placeholder="xxxx xxxx xxxx xxxx"
          onChange={handleInputChange}
          maxLength={16}
        />
        <p className="form-error">{formErrors.number}</p>
        <label htmlFor="nameInput">Full Name</label>
        <input id="nameInput" type="text" name="name" value={name} readOnly />
        <div className="row">
          <div className="col relative">
            <label htmlFor="cvcInput">Cvc</label>
            <input
              id="cvcInput"
              type="text"
              name="cvc"
              value={cvc}
              placeholder="xxx"
              onChange={handleInputChange}
              maxLength={3}
            />
            <p className="form-error">{formErrors.cvc}</p>
          </div>
          <div className="col relative">
            <label>Valid Thru</label>
            <div className="row">
              <select name="month" value={month} onChange={handleInputChange}>
                <RenderOpt total={12} startVal={1} context={"monthVal"} />
              </select>
              <select name="year" value={year} onChange={handleInputChange}>
                <RenderOpt total={8} startVal={23} context={"yearVal"} />
              </select>
            </div>
            <p className="form-error">{formErrors.expiry}</p>
          </div>
        </div>
        <label htmlFor="issuerSelection">Card Vendor</label>
        <select
          id="issuerSelection"
          name="issuer"
          value={issuer}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Choose One
          </option>
          <option>VISA</option>
          <option>MasterCard</option>
          <option>Revolut</option>
        </select>
        <p className="form-error issuer-error">{formErrors.issuer}</p>
        <button>Save Card</button>
      </form>
    </>
  );
};
