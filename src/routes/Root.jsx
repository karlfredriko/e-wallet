import { Outlet, useLoaderData } from "react-router-dom";
import { getRandomNumber, randomIntFromInterval } from "../utils/helper";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCreditCard } from "../features/cards/creditCardSlice";

export const Root = () => {
  const data = useLoaderData();
  const { first, last } = data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      addCreditCard({
        number: getRandomNumber(16),
        name: `${first} ${last}`,
        expiry: `${randomIntFromInterval(1, 12)}/${randomIntFromInterval(
          24,
          28
        )}`,
        cvc: getRandomNumber(3),
      })
    );
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet context={data} />
      </main>
      <Footer />
    </>
  );
};
