import React from 'react';
import { LucideIcon, CheckCircle2 } from 'lucide-react';

interface IndustryCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  metrics: string[];
}

export default function IndustryCard({ title, description, Icon, metrics }: IndustryCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-gold-600" />
      </div>
      
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-3">
        {metrics.map((metric) => (
          <div key={metric} className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-gold-600" />
            <span className="text-sm text-gray-700">{metric}</span>
          </div>
        ))}
      </div>
    </div>
  );
}