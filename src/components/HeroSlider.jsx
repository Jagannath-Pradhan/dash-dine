import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sliderData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=600&fit=crop',
    title: 'Delicious Food Delivered to Your Doorstep',
    subtitle: 'Order from your favorite restaurants',
    cta1: 'Order Now',
    cta2: 'View Menu'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=600&fit=crop',
    title: 'Fresh & Fast Delivery',
    subtitle: 'Get your meals in 30 minutes or less',
    cta1: 'Order Now',
    cta2: 'View Menu'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&h=600&fit=crop',
    title: 'Special Deals & Offers',
    subtitle: 'Save more on every order',
    cta1: 'Order Now',
    cta2: 'View Menu'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {sliderData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-linear-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:shadow-2xl transition transform hover:scale-105">
                    {slide.cta1}
                  </button>
                  <button className="px-8 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:shadow-2xl transition transform hover:scale-105">
                    {slide.cta2}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;