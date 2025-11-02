'use client'

import { useEffect, useState } from "react";
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import SearchBar from '../components/SearchBar'
import CategorySection from '../components/CategorySection'
import Banner from '../components/Banner'
import Testimonials from '../components/Testimonials'
import MobileAppBanner from '../components/MobileAppBanner'
import ExclusiveDeals from '../components/ExclusiveDeals'
import Footer from '../components/Footer'
import ResetPasswordModal from '../components/ResetPasswordModal'

export default function FoodDeliveryApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  const handleResetSuccess = () => {
    setShowResetPassword(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogout={handleLogout}
        isScrolled={isScrolled}
      />
      <ResetPasswordModal
        isOpen={showResetPassword}
        onClose={() => setShowResetPassword(false)}
        onSuccess={handleResetSuccess}
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