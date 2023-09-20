import { useSelector, useDispatch } from "react-redux";
import Cards from "react-credit-cards-2";
import { useOutletContext } from "react-router-dom";

export const Home = () => {
  const creditCards = useSelector((state) => state.creditCard.creditCards);
  const { first, last } = useOutletContext();
  const handleClick = async () => {
    creditCards.map((creditCard) => console.log(creditCard));
  };
  return (
    <>
      <h2>Dis ma Main space rite'ere</h2>
      <button onClick={handleClick}>Get a User</button>
      {/* <Cards /> */}
    </>
  );
};
