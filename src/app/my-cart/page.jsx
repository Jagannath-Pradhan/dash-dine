import { Suspense } from 'react';
import CartClientWrapper from './components/CartClientWrapper';
import CartSkeleton from './components/CartSkeleton';
import { getServerSession } from '@/lib/utils/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Server Component - Can fetch data here
async function getCartData(userId) {
  try {
    // Replace with your actual API endpoint
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/${userId}`, {
      cache: 'no-store', // Always fetch fresh data
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error('Failed to fetch cart:', error);
    return null;
  }
}

async function getDeliveryConfig() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/config/delivery`, {
      cache: 'force-cache', // Can cache delivery config
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      return {
        deliveryFee: 40,
        freeDeliveryThreshold: 399,
        packagingCharges: 10,
      };
    }
    return await res.json();
  } catch (error) {
    return {
      deliveryFee: 40,
      freeDeliveryThreshold: 399,
      packagingCharges: 10,
    };
  }
}

export const metadata = {
  title: 'My Cart - Food Delivery',
  description: 'Review your cart and proceed to checkout',
};

export default async function CartPage(props) {
  // Get userId from session/cookie in real app
  const { searchParams } = props;
  const resolvedParams = await searchParams
  const userId = resolvedParams?.userId || 'guest';

  // Fetch data on server
  const [serverCart, deliveryConfig] = await Promise.all([
    getCartData(userId),
    getDeliveryConfig(),
  ]);

  const user = await getServerSession();    // SSR Auth

  return (
    <>
      <Navbar user={user} isScrolled={true} />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-14">
        <Suspense fallback={<CartSkeleton />}>
          <CartClientWrapper
            initialCart={serverCart}
            deliveryConfig={deliveryConfig}
            userId={userId}
          />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}