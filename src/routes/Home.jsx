import { useSelector } from "react-redux";
import { PreviewCard } from "../features/cards/PreviewCard";

export const Home = () => {
  const creditCards = useSelector((state) => state.creditCard.creditCards);
  return (
    <>
      <h2>My Active Card</h2>
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
    </>
  );
};
