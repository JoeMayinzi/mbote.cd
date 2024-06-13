import { useState, useEffect } from "react";
import axios from "axios";

function useFetchPostsByTag(tagId) {
  const [postsByTag, setPostsByTag] = useState([]);
  const [haserror, setHasError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true); // Set loading state to true before fetch
        const response = await axios.get(
          `https://backend.mbote.cd/wp-json/wp/v2/posts?tags=${tagId}`
        );
        const data = response.data;

        setPostsByTag(data);
      } catch (error) {
        setHasError(error);
        console.error("Error fetching posts by tag:", error);
      } finally {
        setLoading(false); // Set loading state to false after fetch (always)
      }
    };

    fetchPosts();
  }, [tagId]); // Only re-fetch when tagId changes

  return { postsByTag, haserror, loading };
}

export default useFetchPostsByTag;
