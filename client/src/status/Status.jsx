import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../config";

export default function Status() {
  const { name } = useParams();
  const [state, setState] = useState({
    loading: true,
    data: {
      name: "",
      wind: 0,
      status: "",
      temp: 0,
      aqi: "",
    },
  });
  useEffect(() => {
    axiosInstance.get(`/city/${name}`).then((res) => {
      setState({
        loading: false,
        data: res.data,
      });
    });
  }, []);
  if (state.loading) return <h3 className="py-4 text-center">Loading...</h3>;
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold h1 mb-4">
              Showing Status For: {state.data.name}
            </h2>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="card glass shadow">
              <div className="card-body p-4 text-center">
                <img className="mb-4" src="/sun.png" width={80} alt="" />
                <h3>
                  Current Status:
                  <span className="text-warning fw-bold mt-3 d-block">
                    {state.data.status}
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="card glass shadow">
              <div className="card-body p-4 text-center">
                <img
                  className="mb-4"
                  src="/temperature.png"
                  width={80}
                  alt=""
                />
                <h3>
                  Temperature:
                  <span className="fw-bold mt-3 d-block">
                    {state.data.temp}°
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-2">
            <div className="card glass shadow">
              <div className="card-body p-4 text-center">
                <img className="mb-2" src="/wind-2.png" width={90} alt="" />
                <h3>
                  Wind Speed:
                  <span className="fw-bold mt-3 d-block">
                    {state.data.wind} KM/H
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-2 mt-md-0">
            <div className="card glass shadow">
              <div className="card-body p-2 text-center">
                <div className="d-flex ms-4">
                  <div style={{ flex: 1 }}>
                    <img
                      className="mb-2"
                      src="/air-pollution.png"
                      width={90}
                      alt=""
                    />
                    <h3 className="mt-2">
                      Air Pollution:
                      <span className="fw-bold mt-2 d-block">
                        {state.data.aqi}
                      </span>
                    </h3>
                  </div>
                  <div style={{ flex: 2 }} className="p-4 text-start">
                    <h5 className="fw-bold">Describe:</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reiciendis sint vel delectus quis corporis recusandae,
                      iure in repudiandae ex temporibus natus doloribus magnam
                      provident omnis obcaecati facilis fugiat quidem cum?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-2 mt-md-0">
            <div className="card glass shadow">
              <div className="card-body p-2 text-center">
                <div className="d-flex ms-4">
                  <div style={{ flex: 1 }}>
                    <img
                      className="mb-2"
                      src="/electric-vehicle.png"
                      width={90}
                      alt=""
                    />
                    <h3 className="mt-2">
                      Tips:
                      <span className="fw-bold mt-2 d-block">Vehicles</span>
                    </h3>
                  </div>
                  <div style={{ flex: 2 }} className="p-4 text-start">
                    <h5 className="fw-bold">Describe:</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reiciendis sint vel delectus quis corporis recusandae,
                      iure in repudiandae ex temporibus natus doloribus magnam
                      provident omnis obcaecati facilis fugiat quidem cum?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
