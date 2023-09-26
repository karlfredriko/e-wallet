import { useSelector } from "react-redux";
import { PreviewCard } from "../features/cards/PreviewCard";

export const Cards = () => {
  const creditCards = useSelector((state) => state.creditCard.creditCards);
  return (
    <>
      <h2>Active</h2>
      {creditCards
        .filter((creditCard) => creditCard.isActive === true)
        .map((activeCard, index) => (
          <div key={index}>
            <PreviewCard
              name={activeCard.name}
              issuer={activeCard.issuer}
              number={activeCard.number}
              month={activeCard.month}
              year={activeCard.year}
              cvc={activeCard.cvc}
            />
          </div>
        ))}
      {creditCards.length > 1 && <h2>Inactive</h2>}
      {creditCards
        .filter((creditCard) => creditCard.isActive === false)
        .map((activeCard, index) => (
          <div key={index}>
            <PreviewCard
              name={activeCard.name}
              issuer={activeCard.issuer}
              number={activeCard.number}
              month={activeCard.month}
              year={activeCard.year}
              cvc={activeCard.cvc}
            />
          </div>
        ))}
    </>
  );
};
