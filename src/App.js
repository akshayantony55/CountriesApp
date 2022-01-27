import React from "react";
import "./style.css";
import Footer from "./Footer";
import Header from "./Header";
import CountriesList from "./CountriesList";
import Router from "./Router";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Router />
      <Footer></Footer>
    </div>
  );
}
