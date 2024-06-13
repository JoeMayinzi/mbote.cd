import { useState, useEffect } from "react";
import axios from "axios";

const useFallySearchResults = (searchQuery) => {
  const [fallyPosts, setFallyPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFallyPosts = async () => {
      try {
        const response = await axios.get(
          "https://backend.mbote.cd/wp-json/wp/v2/posts",
          {
            params: {
              search: "Fally",
            },
          }
        );
        const filteredPosts = response.data.filter((post) =>
          post.title.rendered.toLowerCase().includes(searchQuery)
        );
        setFallyPosts(filteredPosts);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFallyPosts();
  }, [searchQuery]);

  return { fallyPosts, loading, error };
};

export default useFallySearchResults;
