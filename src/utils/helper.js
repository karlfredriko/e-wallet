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
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const loader = async () => {
  const username = await getData("https://randomuser.me/api");
  console.log(username);
  return username;
};