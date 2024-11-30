import React from 'react';
import { Play, Clock, ChevronRight } from 'lucide-react';

interface TutorialCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  thumbnail: string;
}

export default function TutorialCard({
  title,
  description,
  duration,
  level,
  thumbnail
}: TutorialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="bg-gold-600 text-black p-4 rounded-full transform hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6" fill="currentColor" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-gold-50 text-gold-600 px-3 py-1 rounded-full text-sm font-medium">
            {level}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {duration}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="inline-flex items-center text-gold-600 hover:text-gold-500 transition-colors duration-300">
          <span>Watch Now</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}