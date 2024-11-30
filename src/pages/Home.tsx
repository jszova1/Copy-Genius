import React from 'react';
import { Brain, Target, Rocket, Repeat, ArrowRight, CheckCircle2, X } from 'lucide-react';
import TestimonialCarousel from '../components/TestimonialCarousel';

export default function Home() {
  const uniqueApproaches = [
    {
      Icon: Brain,
      title: 'Behavioral Funnels',
      description: 'Funnels built using principles of psychology to naturally guide users through the decision-making process.',
      example: 'We use scarcity, urgency, and personalization to make your offers irresistible.'
    },
    {
      Icon: Target,
      title: 'AI-Powered Copy Personalization',
      description: 'Dynamic copy tailored to your audience\'s behavior, creating a personal connection at scale.',
      example: 'Imagine an email that adjusts its tone and offer based on your reader\'s preferences—boosting engagement by 30% or more.'
    },
    {
      Icon: Rocket,
      title: 'Launch Optimization Matrix™',
      description: 'A proprietary system to analyze and fine-tune every element of your launch.',
      example: 'We identify what\'s working—and what isn\'t—to ensure your next launch outperforms the last.'
    },
    {
      Icon: Repeat,
      title: 'Evergreen Conversion Engine',
      description: 'Post-launch systems designed to generate revenue consistently, long after the initial push.',
      example: 'Your funnel continues to work for you, bringing in leads and sales 24/7.'
    }
  ];

  const comparisonFeatures = [
    {
      feature: 'Behavioral Funnels',
      copyGenius: 'Integrated and psychology-driven',
      traditional: 'Generic templates'
    },
    {
      feature: 'AI-Powered Copy Personalization',
      copyGenius: 'Tailored to audience behavior',
      traditional: 'One-size-fits-all messaging'
    },
    {
      feature: 'Evergreen Conversion Engine',
      copyGenius: 'Automated systems for lasting results',
      traditional: 'Single-use campaigns'
    },
    {
      feature: 'Launch Optimization Matrix™',
      copyGenius: 'Data-driven and ROI-focused',
      traditional: 'Minimal performance tracking'
    },
    {
      feature: 'Holistic Conversion System',
      copyGenius: 'Full ecosystem for seamless results',
      traditional: 'Piecemeal deliverables'
    },
    {
      feature: 'Results-Oriented Partnership',
      copyGenius: 'Focused on long-term success',
      traditional: 'Short-term, transactional focus'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-12">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-lg font-semibold mb-4">
              Attention Course Creators, Coaches, and Consultants Who Want Consistent Sales Without Endless Hustle!
            </p>
            <h1 className="text-5xl font-bold mb-6">
              Turn Every Click Into Gold with Funnels and Copy That Sell for You—Effortlessly!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Unlock the secrets of behavioral psychology and AI-driven personalization to create systems that transform visitors into buyers 24/7.
            </p>
            <button className="bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-light transition-colors duration-300 flex items-center space-x-2 mx-auto">
              <span>Schedule Your Free Strategy Call Now!</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Your Expertise Deserves Better Results Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Why Your Expertise Deserves Better Results</h2>
          <p className="text-xl mb-6">
            You've got the expertise. You've built the product. So why aren't the sales rolling in?
          </p>
          <p className="text-gray-300 mb-8">
            You've poured everything into creating something extraordinary—late nights, countless brainstorms, and relentless passion. But the results aren't reflecting the effort.
          </p>
          <h3 className="text-2xl font-semibold mb-6">Does this sound familiar?</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span>You're tired of low launch conversions that leave you wondering what went wrong.</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span>You've tried every "marketing hack" only to see mediocre results.</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span>You're watching others succeed while your hard work gets overlooked.</span>
            </li>
          </ul>
          <p className="text-xl text-primary">
            It's not your fault. The problem isn't your product—it's the way it's being communicated.
          </p>
        </div>
      </section>

      {/* Imagine This Section */}
      <section className="bg-dark-secondary text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Imagine This...</h2>
          <p className="text-xl mb-8">
            Picture waking up to your inbox filled with notifications: new enrollments, high-ticket inquiries, and glowing feedback. Imagine a sales funnel so seamless it feels like magic—guiding your audience from curiosity to commitment.
          </p>
          <h3 className="text-2xl font-semibold mb-6">What if you could:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span>Transform your expertise into consistent income without burning out.</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span>Create a customer journey that feels natural and persuasive—without being pushy.</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span>Scale your business effortlessly with systems that work for you around the clock.</span>
            </li>
          </ul>
          <p className="text-xl text-primary font-semibold">
            This isn't a dream. It's exactly what COPYGENIUS delivers.
          </p>
        </div>
      </section>

      {/* Introducing COPYGENIUS Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Introducing COPYGENIUS: The Conversion Alchemist™</h2>
          <p className="text-xl mb-6">
            At COPYGENIUS, we specialize in creating conversion ecosystems—systems that combine psychology, AI, and proven marketing strategies to optimize every step of your customer journey.
          </p>
          <p className="text-gray-300">
            We don't just build funnels or write copy. We craft experiences that resonate, inspire trust, and turn leads into lifelong customers.
          </p>
        </div>
      </section>

      {/* What Makes Our Approach Unique Section */}
      <section className="bg-dark-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Our Approach Unique?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uniqueApproaches.map((approach) => (
              <div key={approach.title} className="bg-black p-6 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center">
                    <approach.Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{approach.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{approach.description}</p>
                <p className="text-primary italic">{approach.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How COPYGENIUS Stands Out Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How COPYGENIUS Stands Out</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-800">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-left">COPYGENIUS: The Conversion Alchemist™</th>
                  <th className="py-4 px-6 text-left">Traditional Services</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item) => (
                  <tr key={item.feature} className="border-b border-gray-800">
                    <td className="py-4 px-6 font-medium">{item.feature}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>{item.copyGenius}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <X className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-400">{item.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <button className="bg-black text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center space-x-2 mx-auto">
            <span>Schedule Your Free Strategy Call Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}