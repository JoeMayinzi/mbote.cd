"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchPostsWithBasicAuth = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // const username = "Groukam_admin";
  // const password = "P_EY=]@Z#=Tquy&VX6cy.a^28T;P^3P=";
  // const basicAuth = "Basic " + btoa(username + ":" + password);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "Groukam_admin";
        const password = "P_EY=]@Z#=Tquy&VX6cy.a^28T;P^3P=";

        const base64EncodedCredentials = btoa(`${username}:${password}`);
        const authHeader = `Basic ${base64EncodedCredentials}`;

        const response = await axios.get(
          "https://backend.mbote.cd/wp-json/wp/v2/posts",
          { headers: { Authorization: authHeader } }
        );
        setData(response.data);
      } catch (fetchError) {
        setError(fetchError);
      }
    };

    fetchData();
  }, []);

  return [data, error];
};
