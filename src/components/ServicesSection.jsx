import React, { useState } from 'react';
import { Sprout, Users, Leaf, Tractor, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesSection({ services = [] }) {
  const [selectedService, setSelectedService] = useState(services[0]?.key || null);

  const currentService = services.find(s => s.key === selectedService) || services[0];

  return (
      <section className="px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto font-[Outfit]">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Side - Service List */}
            <div className="md:col-span-5 space-y-3">
              {services.map((service, index) => {
                const isSelected = selectedService === service.key;

                return (
                    <button
                        key={service.key}
                        onClick={() => setSelectedService(service.key)}
                        className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                            isSelected
                                ? 'bg-white shadow-xl scale-105'
                                : 'bg-white/50 hover:bg-white hover:shadow-lg'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Number Badge */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                            isSelected
                                ? 'bg-green-500 text-white scale-110'
                                : 'bg-gray-200 text-gray-600 group-hover:bg-green-100 group-hover:text-green-600'
                        }`}>
                          {String(index + 1).padStart(2)}
                        </div>

                        {/* Service Info */}
                        <div className="flex-1">
                          <h3 className={`text-lg font-bold transition-colors ${
                              isSelected ? 'text-gray-800' : 'text-gray-700 group-hover:text-gray-800'
                          }`}>
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">Click to view details</p>
                        </div>

                      </div>
                    </button>
                );
              })}
            </div>

            {/* Right Side - Service Details */}
            <div className="md:col-span-7">
              {currentService && (
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full flex flex-col">

                    {/* Header/Title Section (Replaces Image) */}
                    <div className="p-8 pb-6 bg-green-500/10 border-b-2 border-green-500/30">
                      <h3 className="text-4xl font-serif font-bold text-teal-900 leading-snug">
                        {currentService.title}
                      </h3>
                    </div>

                    {/* Content Section - Main Description */}
                    <div className="p-8 flex-grow">
                      <div className="mb-8">
                        <h4 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Overview</h4>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line font-[Montserrat]">
                          {currentService.description}
                        </p>
                      </div>

                      {/* Features/Benefits - Structured Grid */}
                      <div>
                        <h4 className="text-2xl font-semibold text-gray-800 mb-5 border-b pb-2">Key Advantages</h4>
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
                          {/* Benefit 1 */}
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
                            <div>
                              <p className="font-bold text-gray-800">Expert Guidance</p>
                              <p className="text-sm text-gray-600">Professional advisory from proven agricultural specialists.</p>
                            </div>
                          </div>

                          {/* Benefit 2 */}
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
                            <div>
                              <p className="font-bold text-gray-800">Proven Quality</p>
                              <p className="text-sm text-gray-600">A track record of high-quality produce and successful projects.</p>
                            </div>
                          </div>

                          {/* Benefit 3 */}
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
                            <div>
                              <p className="font-bold text-gray-800">Sustainable Approach</p>
                              <p className="text-sm text-gray-600">Committed to eco-friendly and responsible farming methods.</p>
                            </div>
                          </div>

                          {/* Benefit 4 */}
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
                            <div>
                              <p className="font-bold text-gray-800">Community Focused</p>
                              <p className="text-sm text-gray-600">Extending value through training, outreach, and local partnership.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      </section>
  );
}