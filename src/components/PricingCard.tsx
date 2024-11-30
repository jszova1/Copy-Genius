import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
  cta
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
        highlighted
          ? 'bg-black text-white shadow-xl scale-105 z-10'
          : 'bg-white text-gray-900 shadow-lg'
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gold-600 text-black px-4 py-1 rounded-b-lg text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">${price}</span>
          <span className={highlighted ? 'text-gray-300' : 'text-gray-600'}>+</span>
        </div>
        <p className={`mb-8 ${highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
        
        <div className="space-y-4 mb-8">
          {features.map((feature) => (
            <div key={feature} className="flex items-center space-x-3">
              <Check className={`w-5 h-5 ${highlighted ? 'text-gold-600' : 'text-gold-600'}`} />
              <span className={highlighted ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
            </div>
          ))}
        </div>
        
        <button
          className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-300 ${
            highlighted
              ? 'bg-gold-600 text-black hover:bg-gold-500'
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          <span>{cta}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}