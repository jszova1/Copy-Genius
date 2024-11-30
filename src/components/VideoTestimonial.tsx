import React from 'react';
import { Play } from 'lucide-react';

interface VideoTestimonialProps {
  name: string;
  role: string;
  thumbnail: string;
  videoUrl: string;
}

export default function VideoTestimonial({ name, role, thumbnail, videoUrl }: VideoTestimonialProps) {
  return (
    <div className="relative group">
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-800">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover opacity-75 group-hover:opacity-90 transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 text-white" fill="currentColor" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold text-white">{name}</h4>
        <p className="text-gold-600">{role}</p>
      </div>
    </div>
  );
}