import React from 'react';

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export default function TeamMember({ name, title, bio, image, linkedin }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-gold-600 font-medium mb-3">{title}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gold-600 transition-colors"
          >
            Connect on LinkedIn →
          </a>
        )}
      </div>
    </div>
  );
}