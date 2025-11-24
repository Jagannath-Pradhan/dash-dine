import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
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
      <CategorySection />
      <Banner />
      <Testimonials />
      <MobileAppBanner />
      <ExclusiveDeals />
      <Footer />
    </div>
  );
}
