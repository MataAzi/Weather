import React from "react";
import { useState } from "react";
import SearchResult from "./components/SearchResult";

export default function Search() {
  const [query, setQuery] = useState("");
  return (
    <div
      className="App"
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="flex-grow container">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <img src="/wind.png" width={60} className="me-3" alt="" />
          <h1>Weather App</h1>
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ flexDirection: "column" }}
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter City Name or IP Address"
            type="text"
            className="form-control form-control mt-3 px-4 py-3"
          />
          <SearchResult query={query} />
        </div>
      </div>
    </div>
  );
}
