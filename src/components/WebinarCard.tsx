import React from 'react';
import { Calendar, Clock, Users, Play } from 'lucide-react';

interface WebinarCardProps {
  title: string;
  description: string;
  date: string;
  duration: string;
  speakers: string[];
  thumbnail: string;
}

export default function WebinarCard({
  title,
  description,
  date,
  duration,
  speakers,
  thumbnail
}: WebinarCardProps) {
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
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            <span>{speakers.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}