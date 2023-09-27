import { Outlet } from "react-router-dom";
import {
  getRandomNumber,
  randomIntFromInterval,
  randomValue,
} from "../utils/helper";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCreditCard, getUser } from "../features/cards/creditCardSlice";

export const Root = () => {
  const [issuerArr, setIssuerArr] = useState(["VISA", "MasterCard", "Revolut"]);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
      .then((res) => {
        const { first, last } = res.payload;
        setUser(res.payload);
        dispatch(
          addCreditCard({
            name: `${first.toUpperCase()} ${last.toUpperCase()}`,
            issuer: randomValue(issuerArr),
            number: getRandomNumber(16),
            month: randomIntFromInterval(1, 12),
            year: randomIntFromInterval(24, 28),
            cvc: getRandomNumber(3),
            isActive: true,
          })
        );
      })
      .catch((error) => {
        console.error("Fel vid hämtning av användardata:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet context={user} />
      </main>
      <Footer />
    </>
  );
};
