// 'use client'

// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from '../components/Navbar'
// import HeroSlider from '../components/HeroSlider'
// import SearchBar from '../components/SearchBar'
// import CategorySection from '../components/CategorySection'
// import Banner from '../components/Banner'
// import Testimonials from '../components/Testimonials'
// import MobileAppBanner from '../components/MobileAppBanner'
// import ExclusiveDeals from '../components/ExclusiveDeals'
// import Footer from '../components/Footer'
// import ResetPasswordModal from '../components/ResetPasswordModal'

// export default function FoodDeliveryApp() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [userRole, setUserRole] = useState('');
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showResetPassword, setShowResetPassword] = useState(false);

//   // 🟢 Check logged-in user
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get("/api/auth/me");
//         const data = res.data;
//         if (data.success) {
//           setIsLoggedIn(true);
//           setUserName(data.user.name);
//           setUserRole(data.user.role);
//         }
//       } catch (err) {
//         setIsLoggedIn(false);
//         setUserName('');
//         setUserRole('');
//       }
//     };

//     fetchUser();
//   }, []);

//   // Navbar scroll handling
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 100);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await axios.get("/api/auth/logout");
//       setIsLoggedIn(false);
//       setUserName('');
//       setUserRole('');
//     } catch (err) {
//       console.error("Logout failed:", err);
//     }
//   };

//   const handleResetSuccess = () => setShowResetPassword(false);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar
//         isLoggedIn={isLoggedIn}
//         userName={userName}
//         userRole={userRole}
//         onLogout={handleLogout}
//         isScrolled={isScrolled}
//       />
//       <ResetPasswordModal
//         isOpen={showResetPassword}
//         onClose={() => setShowResetPassword(false)}
//         onSuccess={handleResetSuccess}
//       />
//       <HeroSlider />
//       <SearchBar />
//       <CategorySection />
//       <Banner />
//       <Testimonials />
//       <MobileAppBanner />
//       <ExclusiveDeals />
//       <Footer />
//     </div>
//   );
// }



// app/page.jsx  (SERVER COMPONENT)
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import SearchBar from "../components/SearchBar";
import CategorySection from "../components/CategorySection";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import MobileAppBanner from "../components/MobileAppBanner";
import ExclusiveDeals from "../components/ExclusiveDeals";
import Footer from "../components/Footer";

import { getServerSession } from "@/lib/utils/auth";
import ScrollNavbarWrapper from "../components/ScrollNavbarWrapper";

export default async function HomePage() {
  // 🟢 SERVER-SIDE AUTH
  const user = await getServerSession();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar with scroll effect */}
      <ScrollNavbarWrapper>
        <Navbar user={user} />
      </ScrollNavbarWrapper>

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
