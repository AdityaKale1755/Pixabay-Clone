import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const api_key = "48089719-8d39fa641841eeade492716ca";
  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const apiData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits);
      console.log(data.hits);
    };
    apiData();
  }, [query]);

  const fetchDataByCategory = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    const data = await api.json();
    setImageData(data.hits);
    console.log(data.hits);
  };
  return (
    <PixabayContext.Provider
      value={{
        imageData,
        fetchDataByCategory,
        setQuery,
      }}
    >
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
