export const apiBaseUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:8081"
    : "https://hub.catenda.com";
