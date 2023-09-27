import { useSelector, useDispatch } from "react-redux";
import { PreviewCard } from "../features/cards/PreviewCard";
import { useState } from "react";
import { ModalComponent } from "../features/cards/Modal";
import {
  removeCreditCard,
  setAllToFalse,
  setToActive,
} from "../features/cards/creditCardSlice";

export const Cards = () => {
  const creditCards = useSelector((state) => state.creditCard.creditCards);
  const dispatch = useDispatch();

  const [selectedCard, setSelectedCard] = useState(null); // Håller reda på det valda kortet
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (cardId) => {
    const selected = creditCards.find((card) => card.id === cardId);
    setSelectedCard(selected.id);
    setShowModal(true);
  };

  const handleMakeActive = () => {
    dispatch(setAllToFalse());
    dispatch(setToActive(selectedCard));
    setShowModal(false);
  };

  const handleDelete = () => {
    dispatch(removeCreditCard(selectedCard));
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <h2>Active</h2>
      {creditCards
        .filter((creditCard) => creditCard.isActive)
        .map((activeCard, i) => (
          <div key={i}>
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
        .filter((creditCard) => !creditCard.isActive)
        .map((inactiveCard, i) => (
          <div
            onClick={() => {
              handleCardClick(inactiveCard.id);
            }}
            id={inactiveCard.id}
            key={i}
          >
            <PreviewCard
              name={inactiveCard.name}
              issuer={inactiveCard.issuer}
              number={inactiveCard.number}
              month={inactiveCard.month}
              year={inactiveCard.year}
              cvc={inactiveCard.cvc}
            />
          </div>
        ))}
      <ModalComponent
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        onMakeActive={handleMakeActive}
        onDelete={handleDelete}
        cardId={selectedCard}
      />
    </>
  );
};
