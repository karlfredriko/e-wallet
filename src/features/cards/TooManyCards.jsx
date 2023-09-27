import { useNavigate } from "react-router-dom";

export const TooManyCards = () => {
  const navigate = useNavigate();

  return (
    <>
      <strong>
        Wallet is full!
        <br /> Remove a card before adding new.
      </strong>
      <img
        onClick={() => {
          navigate("/cards");
        }}
        src="../src/assets/overflowing-wallet-2.png"
        alt="Picture of an overflowing wallet"
      />
    </>
  );
};
