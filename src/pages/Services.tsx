import React from 'react';
import { ArrowRight, Brain, Target, Rocket, Repeat, CheckCircle2, Users, BarChart, Zap } from 'lucide-react';
import ServiceDetail from '../components/ServiceDetail';

export default function Services() {
  const services = [
    {
      id: 'behavioral-funnels',
      Icon: Brain,
      title: 'Behavioral Funnels',
      description: 'Funnels optimized with behavioral psychology to guide users naturally.',
      features: [
        'Real-time behavior tracking and adaptation',
        'Personalized user journeys',
        'Scarcity and urgency triggers',
        'A/B testing and optimization'
      ],
      stats: {
        value: '247%',
        label: 'Average Conversion Increase'
      }
    },
    {
      id: 'ai-copy',
      Icon: Target,
      title: 'AI-Powered Copy Personalization',
      description: 'Dynamic copy that adjusts to audience behavior.',
      features: [
        'Personalized email sequences',
        'Dynamic sales page content',
        'Automated A/B testing',
        'Engagement-based optimization'
      ],
      stats: {
        value: '30%+',
        label: 'Engagement Boost'
      }
    },
    {
      id: 'launch-matrix',
      Icon: Rocket,
      title: 'Launch Optimization Matrix™',
      description: 'Proprietary system for analyzing and optimizing launches.',
      features: [
        'Pre-launch audience analysis',
        'Competition research',
        'Launch timing optimization',
        'Multi-channel coordination'
      ],
      stats: {
        value: '185%',
        label: 'Launch Revenue Increase'
      }
    },
    {
      id: 'evergreen-engine',
      Icon: Repeat,
      title: 'Evergreen Conversion Engine',
      description: 'Funnels that generate revenue post-launch.',
      features: [
        'Automated lead nurturing',
        'Dynamic offer presentation',
        'Continuous optimization',
        'Performance analytics'
      ],
      stats: {
        value: '24/7',
        label: 'Revenue Generation'
      }
    }
  ];

  const benefits = [
    {
      Icon: Users,
      title: 'Deeper Customer Understanding',
      description: "Gain insights into your audience's behavior and preferences."
    },
    {
      Icon: BarChart,
      title: 'Measurable Results',
      description: 'Track and optimize your ROI with detailed analytics.'
    },
    {
      Icon: Zap,
      title: 'Rapid Implementation',
      description: 'Get your optimized funnels up and running quickly.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Designed to Maximize Your ROI and Simplify Your Growth
            </p>
            <div className="w-24 h-1 bg-gold-600 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-50 mb-4">
                  <benefit.Icon className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <ServiceDetail
                key={service.id}
                {...service}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Explore Which Service Is Right for You</h2>
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-gray-300 mb-8">
              Our team of experts will analyze your needs and recommend the perfect combination of
              services to achieve your goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
              {[
                'Personalized Strategy',
                'Flexible Implementation',
                'Ongoing Support',
                'Results Guarantee'
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-gold-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="bg-gold-600 text-black font-semibold px-8 py-4 rounded-lg hover:bg-gold-500 transition-colors duration-300 flex items-center mx-auto space-x-2">
            <span>Schedule Your Free Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}