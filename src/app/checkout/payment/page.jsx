import { getServerSession } from "@/lib/utils/auth";
import ClientPayment from "./components/ClientPayment.jsx";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function CheckoutPaymentPage() {
  // Example: get authenticated user (SSR-safe)
  // const user = await getServerSession();
  const sessionUser = await getServerSession();
  // console.log("CheckoutAddressPage sessionUser:", sessionUser);

  const user = sessionUser
    ? {
      _id: sessionUser._id.toString(),
      name: sessionUser.name,
      email: sessionUser.email,
      role: sessionUser.role,
    }
    : null;

  // You can fetch payment methods, wallet balance, etc. here in future — SSR safe

  return (
    <>
      <Navbar user={user} isScrolled={true} />
      <ClientPayment user={user} />
      <Footer />
    </>
  );
}