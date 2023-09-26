import { Outlet, useLoaderData } from "react-router-dom";
import {
  getRandomNumber,
  randomIntFromInterval,
  randomValue,
} from "../utils/helper";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCreditCard } from "../features/cards/creditCardSlice";

export const Root = () => {
  const data = useLoaderData();
  const { first, last } = data;
  const issuerArr = ["VISA", "MasterCard", "Revolut"];
  const dispatch = useDispatch();
  useEffect(() => {
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
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet context={data} />
      </main>
      {/* <Footer /> */}
    </>
  );
};
