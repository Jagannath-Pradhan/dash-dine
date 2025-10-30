const deals = [
  { id: 1, title: 'Free Delivery Above ₹199', subtitle: 'On all orders', icon: '🚚', color: 'bg-gradient-to-br from-blue-500 to-blue-600' },
  { id: 2, title: '50% Off on First Order', subtitle: 'New users only', icon: '🎉', color: 'bg-gradient-to-br from-orange-500 to-orange-600' },
  { id: 3, title: 'Flat ₹100 Off', subtitle: 'On orders above ₹399', icon: '💰', color: 'bg-gradient-to-br from-green-500 to-green-600' },
  { id: 4, title: 'Buy 1 Get 1 Free', subtitle: 'Selected items', icon: '🍕', color: 'bg-gradient-to-br from-purple-500 to-purple-600' }
];

const ExclusiveDeals = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Exclusive Deals Just for You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className={`${deal.color} rounded-xl p-6 text-white hover:shadow-xl transition transform hover:scale-105 cursor-pointer`}
          >
            <div className="text-5xl mb-4">{deal.icon}</div>
            <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
            <p className="opacity-90">{deal.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveDeals;