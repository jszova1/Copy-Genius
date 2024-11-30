import React from 'react';
import { Download, LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  downloadUrl: string;
  format: string;
  size: string;
}

export default function ResourceCard({
  title,
  description,
  icon: Icon,
  downloadUrl,
  format,
  size
}: ResourceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-gold-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{format}</span>
          <span>{size}</span>
        </div>
        <a
          href={downloadUrl}
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
        >
          <Download className="w-4 h-4 mr-2" />
          <span>Download Now</span>
        </a>
      </div>
    </div>
  );
}