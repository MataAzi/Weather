import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const [state, setState] = useState(false);
  useEffect(() => {
    if (!document) return;
    var hasVerticalScrollbar =
      document.body.scrollHeight > document.body.clientHeight;
    if (!hasVerticalScrollbar) setState(true);
  }, [document.body.scrollHeight, document.body.clientHeight]);
  return (
    <>
      <header className="card glass" style={{ borderRadius: 0 }}>
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand href="/">Weather Api</Navbar.Brand>
            <Nav className="me-auto">
              <Link to='/' className="nav-link">Home</Link>
              <Link to='/' className="nav-link">Github</Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Outlet />
      {children}
      <footer
        className="card glass py-3"
        style={{
          borderRadius: 0,
          bottom: 0,
          width: "100%",
          position: state ? "absolute" : "relative",
        }}
      >
        <div className="container">
          <div className="d-flex justify-conent-between align-items-center">
            <div className="col-lg-6 d-flex align-items-center gap-3">
              <img src="/github.png" width={40} alt="" />
              <span>
                {new Date().getFullYear()}© This project is open source with
                Apache licence.
              </span>
            </div>
            <div>
              <span>Designed And Developed By: Matin Azizi</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
