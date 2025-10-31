const MobileAppBanner = () => {
  return (
    <div className="bg-linear-to-r from-purple-600 to-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between text-white">
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get the App Now!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Order faster and easier with our mobile app. Available on iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-black hover:bg-gray-900 px-6 py-3 rounded-lg flex items-center space-x-3 transition">
                <div className="text-2xl">📱</div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
              <button className="bg-black hover:bg-gray-900 px-6 py-3 rounded-lg flex items-center space-x-3 transition">
                <div className="text-2xl">🤖</div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop"
              alt="Mobile App"
              className="rounded-2xl shadow-2xl max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppBanner;