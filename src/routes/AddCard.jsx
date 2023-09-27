import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { RenderOpt } from "../features/cards/RenderOpt";
import { checkExpiry } from "../utils/helper";
import { PreviewCard } from "../features/cards/PreviewCard";
import { useDispatch, useSelector } from "react-redux";
import {
  addCreditCard,
  setAllToFalse,
} from "../features/cards/creditCardSlice";
import { TooManyCards } from "../features/cards/TooManyCards";

export const AddCard = () => {
  const { first, last } = useOutletContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const creditCards = useSelector((state) => state.creditCard.creditCards);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [formValues, setFormValues] = useState({
    number: "",
    name: `${first.toUpperCase()} ${last.toUpperCase()}`,
    cvc: "",
    month: "01",
    year: "23",
    issuer: "",
  });

  const { number, name, cvc, month, year, issuer } = formValues;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    name === "isActive" ? setIsActive((preVal) => !preVal) : null;
    name === "issuer"
      ? setFormValues({ ...formValues, [name]: value })
      : setFormValues({ ...formValues, [name]: value.replace(/[^0-9]/g, "") });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      if (isActive) {
        dispatch(setAllToFalse());
      }
      dispatch(addCreditCard({ ...formValues, isActive }));
      navigate("/cards");
    }
  }, [formErrors]);

  const validate = (val) => {
    const errors = {};
    // console.log("validate is running");
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
    return errors;
  };

  return creditCards.length < 4 ? (
    <>
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
            <label>
              Valid Thru
              <div className="row">
                <select name="month" value={month} onChange={handleInputChange}>
                  <RenderOpt total={12} startVal={1} context={"monthVal"} />
                </select>
                <select name="year" value={year} onChange={handleInputChange}>
                  <RenderOpt total={8} startVal={23} context={"yearVal"} />
                </select>
              </div>
            </label>
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
          <option value={"fa-brands fa-cc-visa"}>Visa</option>
          <option value={"fa-brands fa-cc-mastercard"}>MasterCard</option>
          <option value={"fa-brands fa-cc-paypal"}>PayPal</option>
        </select>
        <p className="form-error issuer-error">{formErrors.issuer}</p>
        <div className="row no-gap">
          <input
            type="checkbox"
            name="isActive"
            id="isActive"
            checked={isActive}
            onChange={handleInputChange}
          />
          <label htmlFor="isActive">Set as Active?</label>
          <button>Save Card</button>
        </div>
      </form>
    </>
  ) : (
    <TooManyCards />
  );
};
