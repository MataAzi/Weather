import React from "react";
import "animate.css";
import { Link } from "react-router-dom";

export default function SearchResultCity({ name, country }) {
  return (
    <Link
      to={`/city/${name}`}
      className="border p-3 border d-flex align-items-center animate__animated animate__fadeIn"
    >
      <img src="/city.png" width={30} alt="" />
      <div className="ms-4">
        <h5 className="m-0 text-black">{name}</h5>
        <small className="text-black">{country}</small>
      </div>
    </Link>
  );
}
