import React from 'react';
import { LucideIcon, CheckCircle2 } from 'lucide-react';

interface AudienceCardProps {
  icon: LucideIcon;
  title: string;
  benefits: string[];
}

export default function AudienceCard({ icon: Icon, title, benefits }: AudienceCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-gold-600" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}