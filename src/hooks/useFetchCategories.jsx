import { useState, useEffect } from "react";

function useFetchCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://backend.mbote.cd/wp-json/wp/v2/categories"
      );
      const categoriesData = await response.json();
      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);

  return categories;
}

export default useFetchCategories;
