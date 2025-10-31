import { Clock, MapPin } from 'lucide-react';

const Banner = () => {
  return (
    <div className="bg-linear-to-r from-orange-100 to-red-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Fast & Fresh Delivery
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Get your favorite meals delivered hot and fresh within 30 minutes
            </p>
            <div className="flex items-center space-x-8 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-orange-500" />
                <div>
                  <p className="font-semibold">30 Min</p>
                  <p className="text-sm text-gray-600">Delivery</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-orange-500" />
                <div>
                  <p className="font-semibold">Live Tracking</p>
                  <p className="text-sm text-gray-600">Real-time</p>
                </div>
              </div>
            </div>
            <button className="px-8 py-3 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
              Order Now
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=600&fit=crop"
              alt="Delivery Person"
              className="rounded-2xl shadow-2xl max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;