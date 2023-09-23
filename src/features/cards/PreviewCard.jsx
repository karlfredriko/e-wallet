import React from "react";
import { formatCardNumber } from "../../utils/helper";
import s from "./PreviewCard.module.css";

export const PreviewCard = ({ name, issuer, number, month, year, cvc }) => {
  return (
    <div className={s.cardContainer}>
      <div className={s.cardStripe}></div>
      <p className={s.cardName}>{name}</p>
      <p className={s.cardIssuer}>{issuer}</p>
      <div className={s.cardNumberContainer}>
        <p className={s.cardNumberTitle}>CARD NUMBER</p>
        <p className={s.cardNumber}>{formatCardNumber(number)}</p>
      </div>
      <div className={s.cardExpiryContainer}>
        <p className={s.cardExpiryTitle}>VALID THRU</p>
        <p className={s.cardExpiry}>{`${month}/${year}`}</p>
      </div>
      <div className={s.cardCvcContainer}>
        <p className={s.cardCvcTitle}>SECURITY CODE</p>
        <p className={s.cardCvc}>{cvc}</p>
      </div>
    </div>
  );
};
