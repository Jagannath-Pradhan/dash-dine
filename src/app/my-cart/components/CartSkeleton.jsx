'use client'

const CartSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Header Skeleton */}
        <div className="mb-6">
          <div className="h-8 w-40 bg-gray-200 rounded-lg mb-4 animate-pulse" />
          <div className="h-10 w-64 bg-gray-200 rounded-lg animate-pulse" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items Skeleton */}
          <div className="lg:col-span-2 space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-5 border border-gray-100"
              >
                <div className="flex gap-4">
                  <div className="w-28 h-28 bg-gray-200 rounded-xl animate-pulse flex-shrink-0" />
                  <div className="flex-1 space-y-3">
                    <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                    <div className="flex gap-2">
                      <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
                      <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-8 w-32 bg-gray-200 rounded-lg animate-pulse" />
                      <div className="h-8 w-24 bg-gray-200 rounded-lg animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bill Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gray-200 h-20 animate-pulse" />
              <div className="p-5 space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex justify-between">
                    <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
                    <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
                  </div>
                ))}
                <div className="h-12 bg-gray-200 rounded-xl animate-pulse mt-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;