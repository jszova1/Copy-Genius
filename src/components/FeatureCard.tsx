import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  return (
    <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-gold-600" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}