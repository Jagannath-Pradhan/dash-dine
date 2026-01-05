import { getServerSession } from "@/lib/utils/auth";
import ClientOrderConfirmation from "./components/ClientOrderConfirmation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function OrderConfirmationPage() {
  const sessionUser = await getServerSession();

  const user = sessionUser
    ? {
        _id: sessionUser._id.toString(),
        name: sessionUser.name,
        email: sessionUser.email,
        role: sessionUser.role,
      }
    : null;

  // TODO: In future, fetch order details from MongoDB using orderId from URL params
  // Example:
  // const orderId = searchParams.orderId;
  // const orderDetails = await fetchOrderFromDB(orderId, user._id);

  return (
    <>
      <Navbar user={user} isScrolled={true} />
      <ClientOrderConfirmation user={user} />
      <Footer />
    </>
  );
}