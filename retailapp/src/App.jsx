// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import OfferBanner from "./components/OfferBanner/OfferBanner";
import Header from "./components/Header/Header";
import AppDownload from "./components/AppDownload/AppDownload";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import GudiPadwaOffer from "./components/GudiPadwaOffer/GudiPadwaOffer";
import CardBestSeller from "./components/CardBestSeller/CardBestSeller";
import BestQualitySlider from "./components/BestQualitySlider/BestQualitySlider";
import ExploreMenu from "./components/ExploreMenu/ExploreMenu";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />

        {isHome && (
          <>
            <OfferBanner />
            <Header />
          </>
        )}

        <main>
          <Routes>
            <Route path="/" element={<ExploreMenu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
          </Routes>
        </main>

        {isHome && (
          <>
            <Slider />
            <CardBestSeller />
            <GudiPadwaOffer />
            <BestQualitySlider />
            <AppDownload />
          </>
        )}

        <Footer />
      </div>
    </>
  );
};

export default App;
