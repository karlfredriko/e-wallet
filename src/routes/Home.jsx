import React from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { PreviewCard } from "../features/cards/PreviewCard";

export const Home = () => {
  const creditCards = useSelector((state) => state.creditCard.creditCards);
  const { first, last } = useOutletContext();

  return (
    <>
      <h2>Dis ma Main space rite'ere</h2>
      {creditCards.map((creditCard, index) => (
        <div key={index}>
          <PreviewCard
            name={creditCard.name}
            issuer={creditCard.issuer}
            number={creditCard.number}
            month={creditCard.month}
            year={creditCard.year}
            cvc={creditCard.cvc}
          />
        </div>
      ))}
    </>
  );
};
