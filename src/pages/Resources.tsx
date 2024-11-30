import React from 'react';
import { FileText, Play, Video, Download, ArrowRight, BookOpen, Clock, Users } from 'lucide-react';
import ResourceCard from '../components/ResourceCard';
import WebinarCard from '../components/WebinarCard';
import TutorialCard from '../components/TutorialCard';

export default function Resources() {
  const freeResources = [
    {
      title: "Behavioral Funnel Checklist",
      description: "A comprehensive guide to creating high-converting funnels using behavioral psychology principles.",
      icon: FileText,
      downloadUrl: "#",
      format: "PDF",
      size: "2.4 MB"
    },
    {
      title: "Secrets of AI-Powered Copy",
      description: "Learn how to leverage AI to create personalized, converting copy at scale.",
      icon: BookOpen,
      downloadUrl: "#",
      format: "PDF",
      size: "3.1 MB"
    },
    {
      title: "Launch Matrix Template",
      description: "Our proven template for planning and executing successful product launches.",
      icon: FileText,
      downloadUrl: "#",
      format: "Excel",
      size: "1.8 MB"
    }
  ];

  const tutorials = [
    {
      title: "Sales Page Optimization Masterclass",
      description: "Learn the exact process we use to create high-converting sales pages.",
      duration: "45 minutes",
      level: "Intermediate",
      thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Email Sequence Blueprint",
      description: "Create engaging email sequences that convert subscribers into customers.",
      duration: "35 minutes",
      level: "Beginner",
      thumbnail: "https://images.unsplash.com/photo-1579389083395-4507e98b5b67?auto=format&fit=crop&w=800&h=400"
    }
  ];

  const webinars = [
    {
      title: "The Future of AI in Copywriting",
      description: "Discover how AI is transforming the copywriting landscape and how to stay ahead.",
      date: "March 15, 2024",
      duration: "90 minutes",
      speakers: ["Alexandra Chen", "Marcus Rodriguez"],
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Behavioral Psychology in Digital Marketing",
      description: "Understanding and leveraging customer psychology for better conversions.",
      date: "March 1, 2024",
      duration: "60 minutes",
      speakers: ["Sarah Williams"],
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Free Resources</h1>
            <p className="text-xl text-gray-300">
              Transform your marketing with our proven frameworks and guides
            </p>
            <div className="w-24 h-1 bg-gold-600 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold-600 mb-2">10K+</div>
              <p className="text-gray-600">Downloads</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-600 mb-2">50+</div>
              <p className="text-gray-600">Video Tutorials</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-600 mb-2">25+</div>
              <p className="text-gray-600">Webinar Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Free Downloadable Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeResources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tutorials.map((tutorial) => (
              <TutorialCard key={tutorial.title} {...tutorial} />
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Webinar Replays</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webinars.map((webinar) => (
              <WebinarCard key={webinar.title} {...webinar} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gold-900 to-black p-12 rounded-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Get New Resources First</h2>
              <p className="text-lg text-gray-300 mb-8">
                Subscribe to our newsletter and get instant access to all resources
                plus exclusive content delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-600"
                />
                <button className="bg-gold-600 text-black font-semibold px-6 py-3 rounded-lg hover:bg-gold-500 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}