import { Star } from "lucide-react";

const testimonials = [
  { id: 1, name: 'Priya Sharma', rating: 5, text: 'Amazing service! Food arrived hot and fresh. The delivery was super fast!', avatar: 'PS' },
  { id: 2, name: 'Rahul Kumar', rating: 5, text: 'Best food delivery app I have used. Great variety of restaurants and quick delivery.', avatar: 'RK' },
  { id: 3, name: 'Anita Patel', rating: 4, text: 'Love the deals and offers. The app is very easy to use and navigate.', avatar: 'AP' }
];

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        What Users Say About Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-linear-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;