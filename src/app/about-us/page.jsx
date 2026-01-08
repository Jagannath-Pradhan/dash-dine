import { Users, Target, Award, Heart, TrendingUp, Clock } from 'lucide-react';
import Image from 'next/image';

const AboutUs = () => {
  const stats = [
    { label: 'Active Users', value: '50K+', icon: Users },
    { label: 'Partner Restaurants', value: '500+', icon: TrendingUp },
    { label: 'Deliveries Made', value: '1M+', icon: Clock },
    { label: 'Cities Covered', value: '20+', icon: Award }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To connect food lovers with their favorite restaurants, delivering happiness one meal at a time with unmatched speed and service.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction above all else, ensuring every order is handled with care and delivered with a smile.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'We partner only with verified restaurants that meet our strict quality standards to ensure the best dining experience.'
    }
  ];

  const team = [
    {
      name: 'Jagannath Pradhan',
      role: 'Founder & CEO',
      image: '/team/ceo.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      image: '/team/operations.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '/team/cto.jpg'
    },
    {
      name: 'Priya Sharma',
      role: 'Customer Success Lead',
      image: '/team/success.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] bg-gradient-to-r from-orange-500 to-red-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About DashDine</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Revolutionizing food delivery with speed, quality, and care. Your favorite meals, delivered fresh to your door.
            </p>
          </div>
        </div>
        {/* Decorative Food Icons */}
        <div className="absolute bottom-0 right-0 opacity-10 text-white text-9xl">🍕</div>
        <div className="absolute top-10 right-20 opacity-10 text-white text-7xl">🍔</div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                DashDine was born from a simple idea: great food should be accessible to everyone, anytime, anywhere. 
                Founded in 2022, we started with a small team and a big dream to transform the food delivery experience.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Today, we're proud to serve thousands of customers daily, connecting them with the best local restaurants 
                and ensuring every meal arrives fresh, hot, and on time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our technology-driven approach combined with a human touch has made us one of the fastest-growing 
                food delivery platforms in the region.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center text-6xl">
                🍽️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Passionate individuals working together to bring you the best food delivery experience
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-orange-300 to-red-300 flex items-center justify-center text-4xl md:text-5xl group-hover:scale-105 transition shadow-lg">
                  👤
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-white text-lg mb-8">
            Join thousands of satisfied customers and experience the DashDine difference today
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;