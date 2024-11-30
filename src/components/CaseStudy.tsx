import React from 'react';
import { TrendingUp, CheckCircle2 } from 'lucide-react';

interface CaseStudyProps {
  client: string;
  industry: string;
  before: {
    metric: string;
    label: string;
  };
  after: {
    metric: string;
    label: string;
  };
  improvement: string;
  description: string;
  results: string[];
  image: string;
  reverse?: boolean;
}

export default function CaseStudy({
  client,
  industry,
  before,
  after,
  improvement,
  description,
  results,
  image,
  reverse = false
}: CaseStudyProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12`}>
      <div className="flex-1">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{client}</h3>
          <span className="inline-block bg-gold-50 text-gold-600 px-3 py-1 rounded-full text-sm font-medium">
            {industry}
          </span>
        </div>
        
        <p className="text-lg text-gray-600 mb-8">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-gray-600 text-sm mb-1">Before</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{before.metric}</div>
            <div className="text-sm text-gray-600">{before.label}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-gray-600 text-sm mb-1">After</div>
            <div className="text-2xl font-bold text-gold-600 mb-1">{after.metric}</div>
            <div className="text-sm text-gray-600">{after.label}</div>
          </div>
        </div>
        
        <div className="space-y-3">
          {results.map((result) => (
            <div key={result} className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
              <span className="text-gray-700">{result}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex-1">
        <div className="relative">
          <img
            src={image}
            alt={client}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-4 right-4 bg-black bg-opacity-90 text-white px-4 py-2 rounded-full flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>{improvement} Growth</span>
          </div>
        </div>
      </div>
    </div>
  );
}