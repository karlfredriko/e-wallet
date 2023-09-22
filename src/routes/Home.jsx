import React from "react";
import Cards from "react-credit-cards-2";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import "react-credit-cards-2/dist/es/styles-compiled.css";

export const Home = () => {
  const creditCards = useSelector((state) => state.creditCard.creditCards);
  const { first, last } = useOutletContext();

  return (
    <>
      <h2>Dis ma Main space rite'ere</h2>
      {creditCards.map((creditCard, index) => (
        <div key={index}>
          <Cards
            number={creditCard.number}
            name={creditCard.name}
            expiry={creditCard.expiry}
            cvc={creditCard.cvc}
            issuer={creditCard.issuer}
          />
        </div>
      ))}
    </>
  );
};
