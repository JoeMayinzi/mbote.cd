import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios library

function useFetchTags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get(
          "https://backend.mbote.cd/wp-json/wp/v2/tags"
        );
        const tagsData = response.data; // Access data directly from Axios response
        setTags(tagsData);
      } catch (error) {
        console.error("Error fetching tags:", error); // Log error for debugging
      }
    };

    fetchTags();
  }, []);

  return tags;
}

export default useFetchTags;
