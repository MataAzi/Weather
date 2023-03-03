import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_KEY, axiosInstance } from "../../config";
import { useState } from "react";
import SearchResultCity from "./SearchResultCity";

export default function SearchResult({ query }) {
  const [searchResult, setSearchResult] = useState({
    notFound: false,
    cities: [],
  });
  const [loading, setLoading] = useState("");
  useEffect(() => {
    if (query.length >= 3) setLoading("Loading...");
    if (query.length < 3) setLoading("At Least 3 Charachters");
    let x = setTimeout(() => {
      if (query.length >= 3) {
        axiosInstance
          .get(`/search?q=${query}`)
          .then((res) => {
            if (res.data && res.data.length > 0)
              setSearchResult({ cities: res.data, notFound: false });
            else setSearchResult({ cities: res.data, notFound: true });
            setLoading("");
          });
      }
    }, 2000);

    return () => {
      setLoading("");
      setSearchResult({
        notFound: false,
        cities: [],
      });
      clearTimeout(x);
    };
  }, [query]);
  if (query.length > 0)
    return (
      <div
        className="bg-white text-black border shadow"
        style={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          width: "96%",
        }}
      >
        {loading && <h6 className="m-0 p-3">{loading}</h6>}
        {searchResult.notFound && <h6 className="m-0 p-3">Not Found...</h6>}

        {!loading &&
          searchResult.cities.map((value, i) => {
            return (
              <SearchResultCity key={i} name={value.name} country={value.country} />
            );
          })}
      </div>
    );
  else return "";
}
