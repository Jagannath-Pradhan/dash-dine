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
import AuthModal from '../components/AuthModal'
import ForgotPasswordModal from '../components/ForgotPasswordModal'
import ResetPasswordModal from '../components/ResetPasswordModal'

export default function FoodDeliveryApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
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

  const handleLogin = () => {
    setShowAuthModal(true);
  };

  const handleLoginSuccess = (name) => {
    setIsLoggedIn(true);
    setUserName(name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2));
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  const handleForgotPassword = () => {
    setShowAuthModal(false);
    setShowForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
    setShowAuthModal(true);
  };

  const handleResetSuccess = () => {
    setShowResetPassword(false);
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogin={handleLogin}
        onLogout={handleLogout}
        isScrolled={isScrolled}
      />
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={handleLoginSuccess}
        onForgotPassword={handleForgotPassword}
      />
      <ForgotPasswordModal
        isOpen={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
        onBackToLogin={handleBackToLogin}
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