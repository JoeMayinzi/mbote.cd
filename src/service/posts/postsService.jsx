import { fetchWithBasicAuth } from "../baseservice";

export const fetchData = async () => {
  const API_URL = "https://backend.mbote.cd/wp-json/wp/v2/posts";
  const USERNAME = "Groukam_admin";
  const PASSWORD = "P_EY=]@Z#=Tquy&VX6cy.a^28T;P^3P=";

  const data = await fetchWithBasicAuth(API_URL, USERNAME, PASSWORD);
  console.log("Fetched data:", data);
};
