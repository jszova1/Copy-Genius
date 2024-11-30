import React from 'react';
import { ArrowRight, TrendingUp, Users, Target, BarChart3, Play } from 'lucide-react';
import CaseStudy from '../components/CaseStudy';
import IndustryCard from '../components/IndustryCard';
import VideoTestimonial from '../components/VideoTestimonial';

export default function Portfolio() {
  const caseStudies = [
    {
      id: 1,
      client: "MindfulGrowth Academy",
      industry: "Course Creator",
      before: {
        metric: "$50k",
        label: "Monthly Revenue"
      },
      after: {
        metric: "$175k",
        label: "Monthly Revenue"
      },
      improvement: "250%",
      description: "Transformed a struggling online course into a thriving education platform through behavioral funnels and AI-powered copy optimization.",
      results: [
        "3.5x increase in monthly revenue",
        "68% improvement in course completion rates",
        "47% reduction in customer acquisition cost"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 2,
      client: "Elite Business Consulting",
      industry: "B2B Services",
      before: {
        metric: "12%",
        label: "Conversion Rate"
      },
      after: {
        metric: "38%",
        label: "Conversion Rate"
      },
      improvement: "216%",
      description: "Revolutionized lead generation and nurturing process with our Evergreen Conversion Engine.",
      results: [
        "216% increase in conversion rates",
        "185% boost in qualified leads",
        "152% growth in annual revenue"
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&h=400"
    }
  ];

  const industries = [
    {
      title: "Course Creators",
      description: "Transform your expertise into high-converting online courses with our proven funnel strategies.",
      Icon: Users,
      metrics: ["Average 200% revenue increase", "45% higher completion rates"]
    },
    {
      title: "Coaches",
      description: "Scale your coaching practice with automated systems that maintain the personal touch.",
      Icon: Target,
      metrics: ["3x client acquisition", "65% reduced admin time"]
    },
    {
      title: "Consultants",
      description: "Convert more high-ticket clients with sophisticated nurture sequences and positioning.",
      Icon: BarChart3,
      metrics: ["180% more qualified leads", "2.5x proposal acceptance rate"]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Founder, Growth Academy",
      thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
      videoUrl: "#"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "CEO, Elite Consulting",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
      videoUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Success Stories</h1>
            <p className="text-xl text-gray-300">
              Real results from real clients who transformed their businesses with Copy Genius
            </p>
            <div className="w-24 h-1 bg-gold-600 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold-600 mb-2">200%+</div>
              <p className="text-gray-600">Average Revenue Growth</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-600 mb-2">150+</div>
              <p className="text-gray-600">Successful Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-600 mb-2">45%</div>
              <p className="text-gray-600">Cost Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Case Studies</h2>
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <CaseStudy key={study.id} {...study} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Hear From Our Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <VideoTestimonial key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Be Our Next Success Story?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-black font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2">
              <span>View More Examples</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-gold-600 text-black font-semibold px-8 py-4 rounded-lg hover:bg-gold-500 transition-colors duration-300 flex items-center space-x-2">
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}