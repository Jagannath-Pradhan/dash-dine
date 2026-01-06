import { getServerSession } from "@/lib/utils/auth";
import { redirect } from "next/navigation";
import ClientMyOrders from "./components/ClientMyOrders";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function MyOrdersPage({ searchParams }) {
  const sessionUser = await getServerSession();

  if (!sessionUser) {
    redirect("/login");
  }

  const user = {
    _id: sessionUser._id.toString(),
    name: sessionUser.name,
    email: sessionUser.email,
    role: sessionUser.role,
  };

  // TODO: Fetch orders from MongoDB
  // const page = searchParams.page ? parseInt(searchParams.page) : 1;
  // const status = searchParams.status || null;
  // const ordersData = await fetchUserOrders(user._id, { page, status });

  return (
    <>
      <Navbar user={user} isScrolled={true} />
      <ClientMyOrders user={user} />
      <Footer />
    </>
  );
}