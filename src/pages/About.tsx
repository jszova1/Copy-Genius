import React from 'react';
import { ArrowRight, Fingerprint, Brain, Rocket, Target, Zap, Shield, BarChart } from 'lucide-react';
import TeamMember from '../components/TeamMember';
import FeatureCard from '../components/FeatureCard';

// Rest of the file remains exactly the same, just update the icon usage
export default function About() {
  const teamMembers = [
    {
      name: "Alexandra Chen",
      title: "Founder & Chief Conversion Strategist",
      bio: "With over 15 years in digital marketing, Alexandra pioneered the Conversion Alchemist™ methodology. Her innovative approach has transformed countless businesses.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&h=500",
      linkedin: "#"
    },
    {
      name: "Marcus Rodriguez",
      title: "Head of AI Innovation",
      bio: "A leader in AI-driven marketing solutions, Marcus combines behavioral psychology with cutting-edge technology to create unprecedented conversion rates.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&h=500",
      linkedin: "#"
    },
    {
      name: "Sarah Williams",
      title: "Director of Client Success",
      bio: "Sarah ensures every client achieves exceptional results through our proven frameworks and personalized strategies.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&h=500",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            <div className="w-24 h-1 bg-gold-600 mx-auto mb-8"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">The Copy Genius Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Born from a vision to revolutionize digital marketing, Copy Genius emerged as the pioneer
              of the Conversion Alchemist™ methodology. We believe that true conversion optimization
              isn't just about writing compelling copy—it's about creating entire ecosystems that
              understand, adapt to, and perfectly serve your audience's needs.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to transform the traditional approach to marketing funnels by combining
              behavioral psychology, AI-driven insights, and human creativity. We don't just optimize
              conversions; we create experiences that resonate deeply with your audience, turning
              every interaction into an opportunity for growth.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              Icon={Fingerprint}
              title="Proprietary Methodology"
              description="Our Conversion Alchemist™ approach combines behavioral science, AI, and proven frameworks for unprecedented results."
            />
            <FeatureCard
              Icon={Brain}
              title="AI-Driven Personalization"
              description="Advanced algorithms that adapt your messaging in real-time based on user behavior and preferences."
            />
            <FeatureCard
              Icon={Rocket}
              title="Launch Optimization Matrix™"
              description="A comprehensive system that ensures every product launch is strategically positioned for success."
            />
            <FeatureCard
              Icon={Target}
              title="Behavioral Funnels"
              description="Dynamic funnels that evolve based on real user interactions and conversion patterns."
            />
            <FeatureCard
              Icon={Zap}
              title="Rapid Implementation"
              description="Get your optimized funnels up and running quickly with our streamlined processes."
            />
            <FeatureCard
              Icon={Shield}
              title="Proven Track Record"
              description="Consistently delivering 2-3x improvement in conversion rates across industries."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Learn How We Can Help You Turn Every Click Into Gold</h2>
          <button className="bg-gold-600 text-black font-semibold px-8 py-4 rounded-lg hover:bg-gold-500 transition-colors duration-300 flex items-center mx-auto space-x-2">
            <span>Schedule Your Strategy Session</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}