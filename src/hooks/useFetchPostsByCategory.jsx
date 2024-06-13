import axios from "axios";
import { useEffect, useState } from "react";

const useFetchPostsByCategory = (categoryId) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://backend.mbote.cd/wp-json/wp/v2/posts?categories=${categoryId}`
        );
        const fetchedPosts = response.data;
        setPosts(fetchedPosts);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
        console.error("Error fetching posts by category:", err);
      }
    };

    fetchData();
  }, [categoryId]);

  return [posts, isLoading, error];
};

export default useFetchPostsByCategory;
