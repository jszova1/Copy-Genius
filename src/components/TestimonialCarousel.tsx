import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "The Launch Optimization Matrix™ transformed our product launch. We saw a 312% increase in conversion rates within the first month.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthPro",
    content: "Copy Genius's behavioral funnels helped us understand our customers better than ever. Our ROI improved by 280%.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Emma Davis",
    role: "Marketing Director, ScaleUp",
    content: "The Evergreen Conversion Engine completely revolutionized our approach to customer acquisition. Simply brilliant!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
  }
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="relative p-8">
          <div className="flex items-center space-x-8">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-gray-600 italic mb-4">{testimonials[current].content}</p>
              <h4 className="font-semibold text-gray-900">{testimonials[current].name}</h4>
              <p className="text-gold-600">{testimonials[current].role}</p>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
}