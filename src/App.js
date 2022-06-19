import "./App.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Roots/Home";
import List from "./Roots/List";
import Detail from "./Components/Details/Detail";
import { Helmet } from "react-helmet";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
 import PageNotFound from "./Components/PageNotFound/PageNotFound";
 function App() {
 
  return (
    <BrowserRouter>
      <Header />
      <Helmet> 
      <title>Eatzy</title>
      <meta name="description"
      content="Get info for all your favourite products "
      />
       <meta name="keywords"
      content="products,gift"
      />
      </Helmet>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Portfolio" element={<List />}></Route>
        <Route exact path="/Portfolio/:id" element={<Detail />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


 
