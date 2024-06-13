"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  const handleSubmitSearchKeyWord = () => {
    router.push(`/searchpage?q=${searchTerm}`);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="tapez ci"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={handleSubmitSearchKeyWord}>search</button>
    </div>
  );
};

export default Search;
