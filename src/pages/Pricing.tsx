import React from 'react';
import { ArrowRight, Check, HelpCircle, X } from 'lucide-react';
import PricingCard from '../components/PricingCard';
import FAQ from '../components/FAQ';

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Bronze",
      price: "497",
      description: "Perfect for businesses just starting their optimization journey",
      features: [
        "Email sequence templates",
        "Sales page templates",
        "Ad copy templates",
        "1-hour strategy session",
        "Basic optimization guidelines"
      ],
      highlighted: false,
      cta: "Get Started"
    },
    {
      name: "Silver",
      price: "1,997",
      description: "Ideal for businesses ready to scale their conversions",
      features: [
        "Full sales page copy",
        "3-email pre-launch sequence",
        "3 retargeting ad scripts",
        "2 revision rounds",
        "30-day email support",
        "Basic analytics setup",
        "Conversion tracking"
      ],
      highlighted: true,
      cta: "Most Popular Choice"
    },
    {
      name: "Gold",
      price: "3,997",
      description: "Complete solution for maximum conversion optimization",
      features: [
        "Custom behavioral funnels",
        "7 AI-personalized emails",
        "Full sales page copy",
        "Retargeting ad copy suite",
        "Unlimited revisions",
        "Priority support",
        "Advanced analytics",
        "Monthly strategy calls",
        "Custom reporting dashboard"
      ],
      highlighted: false,
      cta: "Get Maximum Results"
    }
  ];

  const comparisonFeatures = [
    {
      name: "Email Sequences",
      bronze: "Templates Only",
      silver: "3 Custom Emails",
      gold: "7 AI-Personalized"
    },
    {
      name: "Sales Page",
      bronze: "Template",
      silver: "Full Custom",
      gold: "Full Custom + A/B Testing"
    },
    {
      name: "Ad Copy",
      bronze: "Templates",
      silver: "3 Scripts",
      gold: "Full Suite"
    },
    {
      name: "Support",
      bronze: "Email Only",
      silver: "Email + Chat",
      gold: "Priority 24/7"
    },
    {
      name: "Revisions",
      bronze: "1 Round",
      silver: "2 Rounds",
      gold: "Unlimited"
    },
    {
      name: "Analytics",
      bronze: false,
      silver: "Basic",
      gold: "Advanced"
    },
    {
      name: "Strategy Calls",
      bronze: "1 Hour",
      silver: "2 Hours",
      gold: "Monthly"
    }
  ];

  const faqs = [
    {
      question: "Which package is right for my business?",
      answer: "The best package depends on your current stage and goals. Bronze is perfect for businesses just starting out, Silver for those ready to scale, and Gold for businesses seeking maximum optimization and results."
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Absolutely! You can upgrade to a higher tier at any time. We'll even credit a portion of your current package towards the upgrade."
    },
    {
      question: "What's included in the AI-personalized emails?",
      answer: "Our AI-personalized emails use advanced algorithms to adapt content based on subscriber behavior, interests, and engagement patterns, ensuring higher open and click-through rates."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation typically takes 2-4 weeks depending on your package and specific needs. Gold package implementations may take longer due to the comprehensive nature of the service."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-300">
              Choose the perfect package to transform your conversion rates
            </p>
            <div className="w-24 h-1 bg-gold-600 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <div className="bg-gold-600 text-black py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-semibold">
            🎉 First 10 clients get a complimentary Launch Audit ($500 value)!
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Features</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Bronze</th>
                  <th className="py-4 px-6 text-center">Silver</th>
                  <th className="py-4 px-6 text-center">Gold</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature) => (
                  <tr key={feature.name} className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">{feature.name}</td>
                    <td className="py-4 px-6 text-center">
                      {feature.bronze === false ? (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      ) : feature.bronze === true ? (
                        <Check className="w-5 h-5 text-gold-600 mx-auto" />
                      ) : (
                        <span className="text-sm text-gray-600">{feature.bronze}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.silver === false ? (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      ) : feature.silver === true ? (
                        <Check className="w-5 h-5 text-gold-600 mx-auto" />
                      ) : (
                        <span className="text-sm text-gray-600">{feature.silver}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.gold === false ? (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      ) : feature.gold === true ? (
                        <Check className="w-5 h-5 text-gold-600 mx-auto" />
                      ) : (
                        <span className="text-sm text-gray-600">{feature.gold}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <FAQ key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Choose Your Package and Let's Get Started!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Not sure which package is right for you? Schedule a free consultation and we'll help you choose.
          </p>
          <button className="bg-gold-600 text-black font-semibold px-8 py-4 rounded-lg hover:bg-gold-500 transition-colors duration-300 flex items-center mx-auto space-x-2">
            <span>Schedule Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}