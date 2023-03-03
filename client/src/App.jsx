import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Search from "./search/Search";
import Status from "./status/Status";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Search />
        </Layout>
      ),
    },
    {
      path: "/city/:name",
      element: (
        <Layout>
          <Status />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
