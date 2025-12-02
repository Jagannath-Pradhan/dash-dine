// 'use client'

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { MapPin, Plus, Home, Briefcase, ArrowLeft, ArrowRight, Edit2, Trash2 } from 'lucide-react';
// import Footer from '@/components/Footer';

// const CheckoutAddressPage = () => {
//   const router = useRouter();
//   const [addresses, setAddresses] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [checkoutData, setCheckoutData] = useState(null);

//   useEffect(() => {
//     // Load checkout data from session
//     const data = sessionStorage.getItem('checkoutData');
//     if (!data) {
//       router.push('/my-cart');
//       return;
//     }
//     setCheckoutData(JSON.parse(data));

//     // Load saved addresses (mock data - replace with API)
//     const savedAddresses = [
//       {
//         id: 1,
//         type: 'home',
//         name: 'Home',
//         line1: '123, MG Road',
//         line2: 'Near Central Mall',
//         city: 'Angul',
//         state: 'Odisha',
//         pincode: '759103',
//         phone: '+91 83389 01176',
//         isDefault: true,
//       },
//       {
//         id: 2,
//         type: 'work',
//         name: 'Office',
//         line1: 'Tech Park, Building 4',
//         line2: 'Rajiv Gandhi Salai',
//         city: 'BBSR',
//         state: 'Odisha',
//         pincode: '759103',
//         phone: '+91 83389 01176',
//         isDefault: false,
//       },
//     ];
//     setAddresses(savedAddresses);
//     setSelectedAddress(savedAddresses.find(a => a.isDefault) || savedAddresses[0]);
//   }, [router]);

//   const handleProceedToPayment = () => {
//     if (!selectedAddress) {
//       alert('Please select a delivery address');
//       return;
//     }

//     // Update checkout data with address
//     const updatedCheckout = {
//       ...checkoutData,
//       deliveryAddress: selectedAddress,
//     };
//     sessionStorage.setItem('checkoutData', JSON.stringify(updatedCheckout));
//     router.push('/checkout/payment');
//   };

//   if (!checkoutData) {
//     return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
//   }

//   return (
//     <>
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         {/* Header */}
//         <button
//           onClick={() => router.back()}
//           className="flex items-center gap-2 text-gray-700 hover:text-orange-600 mb-6 transition-colors"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           <span className="font-medium">Back to Cart</span>
//         </button>

//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Delivery Address</h1>
//           <p className="text-gray-600">Choose where you want your order delivered</p>
//         </div>

//         {/* Progress Indicator */}
//         <div className="flex items-center justify-center mb-8">
//           <div className="flex items-center">
//             <div className="flex items-center">
//               <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
//                 ✓
//               </div>
//               <span className="ml-2 font-semibold text-green-600">Cart</span>
//             </div>
//             <div className="w-20 h-1 bg-orange-500 mx-2" />
//             <div className="flex items-center">
//               <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
//                 2
//               </div>
//               <span className="ml-2 font-semibold text-orange-600">Address</span>
//             </div>
//             <div className="w-20 h-1 bg-gray-300 mx-2" />
//             <div className="flex items-center">
//               <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">
//                 3
//               </div>
//               <span className="ml-2 text-gray-500">Payment</span>
//             </div>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-6">
//           {/* Addresses Section */}
//           <div className="lg:col-span-2 space-y-4">
//             {/* Add New Address Button */}
//             <button
//               onClick={() => setShowAddForm(true)}
//               className="w-full border-2 border-dashed border-orange-300 hover:border-orange-500 rounded-xl p-6 flex items-center justify-center gap-3 transition-colors group"
//             >
//               <Plus className="w-6 h-6 text-orange-500" />
//               <span className="font-semibold text-gray-700 group-hover:text-orange-600">
//                 Add New Address
//               </span>
//             </button>

//             {/* Saved Addresses */}
//             {addresses.map((address) => (
//               <div
//                 key={address.id}
//                 onClick={() => setSelectedAddress(address)}
//                 className={`bg-white rounded-xl p-5 cursor-pointer transition-all border-2 ${
//                   selectedAddress?.id === address.id
//                     ? 'border-orange-500 shadow-lg'
//                     : 'border-gray-200 hover:border-orange-300'
//                 }`}
//               >
//                 <div className="flex items-start justify-between mb-3">
//                   <div className="flex items-center gap-3">
//                     <div className={`p-2 rounded-lg ${
//                       address.type === 'home' ? 'bg-blue-100' : 'bg-purple-100'
//                     }`}>
//                       {address.type === 'home' ? (
//                         <Home className="w-5 h-5 text-blue-600" />
//                       ) : (
//                         <Briefcase className="w-5 h-5 text-purple-600" />
//                       )}
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-900">{address.name}</h3>
//                       {address.isDefault && (
//                         <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
//                           Default
//                         </span>
//                       )}
//                     </div>
//                   </div>
                  
//                   <div className="flex gap-2">
//                     <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//                       <Edit2 className="w-4 h-4 text-gray-600" />
//                     </button>
//                     <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
//                       <Trash2 className="w-4 h-4 text-red-600" />
//                     </button>
//                   </div>
//                 </div>

//                 <p className="text-gray-700 text-sm mb-1">{address.line1}</p>
//                 {address.line2 && (
//                   <p className="text-gray-700 text-sm mb-1">{address.line2}</p>
//                 )}
//                 <p className="text-gray-600 text-sm mb-2">
//                   {address.city}, {address.state} - {address.pincode}
//                 </p>
//                 <p className="text-gray-600 text-sm font-medium">
//                   Phone: {address.phone}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Order Summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-lg p-5 sticky top-6">
//               <h3 className="font-bold text-lg mb-4">Order Summary</h3>
              
//               <div className="space-y-2 text-sm mb-4">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Items ({checkoutData.items.length})</span>
//                   <span className="font-semibold">₹{checkoutData.subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Delivery Fee</span>
//                   <span className="font-semibold">
//                     {checkoutData.deliveryFee === 0 ? (
//                       <span className="text-green-600">FREE</span>
//                     ) : (
//                       `₹${checkoutData.deliveryFee.toFixed(2)}`
//                     )}
//                   </span>
//                 </div>
//                 {checkoutData.discount > 0 && (
//                   <div className="flex justify-between text-green-600">
//                     <span>Discount</span>
//                     <span className="font-semibold">-₹{checkoutData.discount.toFixed(2)}</span>
//                   </div>
//                 )}
//               </div>

//               <div className="border-t pt-3 mb-4">
//                 <div className="flex justify-between items-center">
//                   <span className="font-bold">Total Amount</span>
//                   <span className="text-2xl font-bold text-orange-600">
//                     ₹{checkoutData.total.toFixed(2)}
//                   </span>
//                 </div>
//               </div>

//               <button
//                 onClick={handleProceedToPayment}
//                 disabled={!selectedAddress}
//                 className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-300 disabled:to-gray-300 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg disabled:cursor-not-allowed"
//               >
//                 <span>Proceed to Payment</span>
//                 <ArrowRight className="w-5 h-5" />
//               </button>

//               <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
//                 <MapPin className="w-4 h-4" />
//                 <span>Delivering to {selectedAddress?.city || 'your location'}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default CheckoutAddressPage;



import { getServerSession } from "@/lib/utils/auth";
import ClientAddress from "./components/ClientAddress";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function CheckoutAddressPage() {
  // Example: get authenticated user (SSR-safe)
  const user = await getServerSession();

  // You can fetch backend address list here in future — SSR safe

  return (
    <>
    <Navbar user={user} isScrolled={true} />
      <ClientAddress user={user} />
      <Footer />
    </>
  );
}
