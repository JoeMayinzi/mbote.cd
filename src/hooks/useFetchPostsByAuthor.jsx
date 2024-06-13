import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchPostsByAuthor = (authorId) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://backend.mbote.cd/wp-json/wp/v2/posts?author=${authorId}`
        );
        const data = response.data;
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [authorId]);

  return posts;
};

export default useFetchPostsByAuthor;
