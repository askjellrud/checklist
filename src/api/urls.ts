import Cookies from "js-cookie";

export const apiBaseUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:8081"
    : "https://hub.catenda.com";

export const baseUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000/checklist"
    : "https://hub.catenda.com/checklist";

export const apiHeader = () => {
  return {
    withCredentials: true,
    headers: {
      "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"), // Replace with your CSRF token header name
      "Content-Type": "application/json", // Adjust content type as needed
      Authorization: "Bearer " + Cookies.get("_bs_v2_sess"),
    },
  };
};
