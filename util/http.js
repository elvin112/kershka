import axios from "axios";

const BASE_URL =
  "https://kershka-1cfed-default-rtdb.europe-west1.firebasedatabase.app/";

export const fetchItems = async (filter) => {
  const response = await axios.get(`${BASE_URL}/${filter}.json`);

  return response;
};
