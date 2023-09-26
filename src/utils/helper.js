import axios from "axios";

export const getData = async (baseUrl) => {
  try {
    const res = await axios.get(baseUrl);
    console.log("fetching data");
    return res.data.results[0].name;
  } catch (err) {
    console.log("getData ERROR " + err);
  }
};

export const getRandomNumber = (digit) => {
  return Math.random().toFixed(digit).split(".")[1];
};

export const randomIntFromInterval = (min, max) => {
  const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
  return randomInt.toString();
};

export const loader = async () => {
  const username = await getData("https://randomuser.me/api");
  console.log(username);
  return username;
};

export const checkExpiry = (cardMonth, cardYear) => {
  const date = new Date();
  const year = date.toLocaleString("default", { year: "2-digit" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  if (cardYear === year) {
    return cardMonth > month;
  } else {
    return true;
  }
};

export const formatCardNumber = (number) => {
  const groups = number.match(/.{1,4}/g);
  const formattedNumber = groups ? groups.join(" ") : "";
  return formattedNumber;
};

export const randomValue = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
