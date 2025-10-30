'use client'

import { useState } from "react";
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import SearchBar from '../components/SearchBar'
import CategorySection from '../components/CategorySection'
import Banner from '../components/Banner'
import Testimonials from '../components/Testimonials'
import MobileAppBanner from '../components/MobileAppBanner'
import ExclusiveDeals from '../components/ExclusiveDeals'
import Footer from '../components/Footer'

export default function FoodDeliveryApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = () => {
    // This will be replaced with actual authentication
    setIsLoggedIn(true);
    setUserName('JD'); // Short name for John Doe
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <HeroSlider />
      <SearchBar />
      <CategorySection />
      <Banner />
      <Testimonials />
      <MobileAppBanner />
      <ExclusiveDeals />
      <Footer />
    </div>
  );
}