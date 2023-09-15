import axios from "axios";

export const getData = async (baseUrl) => {
  try {
    const res = await axios.get(baseUrl);
    console.log("fetching data");
    console.log(res.data.results[0].name);
    return res.data;
  } catch (err) {
    console.log("fetch fail" + err);
  }
};
