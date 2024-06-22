import { v4 as uuidv4 } from "uuid";

export const randomId = () => {
  return uuidv4().replace(/-/g, "");
};

export const timeToSimpleDate = (time: number) => {
  new Date(time)
    .toLocaleDateString("en-GB")
    .replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$1/$2-$3");
};
