import React from 'react';
import { LucideIcon, CheckCircle2 } from 'lucide-react';

interface ServiceDetailProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  stats: {
    value: string;
    label: string;
  };
  reverse?: boolean;
}

export default function ServiceDetail({
  Icon,
  title,
  description,
  features,
  stats,
  reverse = false
}: ServiceDetailProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
      <div className="flex-1">
        <div className="w-16 h-16 bg-gold-50 rounded-2xl flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-gold-600" />
        </div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        <div className="space-y-3 mb-8">
          {features.map((feature) => (
            <div key={feature} className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md inline-block">
          <div className="text-3xl font-bold text-gold-600 mb-1">{stats.value}</div>
          <div className="text-sm text-gray-600">{stats.label}</div>
        </div>
      </div>
      <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
          {/* Placeholder for service-specific illustration or screenshot */}
          <div className="w-full h-full bg-gradient-to-br from-gold-50 to-gray-100 flex items-center justify-center">
            <Icon className="w-16 h-16 text-gold-600 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}