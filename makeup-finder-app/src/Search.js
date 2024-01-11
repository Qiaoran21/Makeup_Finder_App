import React, { useState, useEffect } from "react";

export const Search = ({ setResults }) => {
  const [searchItem, setSearchItem] = useState("");
  // const [products, setProducts] = useState([]);

  const handleChange = (value) => {
    setSearchItem(value);
    fetchData(value);
  };

  const fetchData = (value) => {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        const results = data.filter((product) => {
          return product.product_type.toLowerCase().includes(value);
        });
        setResults(results);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <input
        type="text"
        value={searchItem}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="type product name... "
      />
    </div>
  );
};

export default Search;
