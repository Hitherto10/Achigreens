import React, { useState } from 'react';
import { Sprout, Users, Leaf, Tractor, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesSection({ services = [] }) {
  const [selectedService, setSelectedService] = useState(services[0]?.key || null);

  const currentService = services.find(s => s.key === selectedService) || services[0];

  return (
      <section className="px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto font-[Outfit]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Left Side - Service List */}
            <div className="md:col-span-5 m-auto space-y-3">
              {services.map((service, index) => {
                const isSelected = selectedService === service.key;

                return (
                    <>
                        {/* CHANGED FOR MOBILE: tighter padding */}
                        <button
                            key={service.key}
                            onClick={() => setSelectedService(service.key)}
                            className={`md:max-w-full sm:border md:border-none  border-gray-100 w-auto text-left py-1 px-3 m-2 md:p-6 rounded-2xl transition-all duration-300 group ${
                                isSelected
                                    ? 'bg-white shadow-xl scale-105'
                                    : 'bg-white/50 hover:bg-white hover:shadow-lg'
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                {/* Number Badge */}
                                <div className={`hidden md:block`}>
                                    <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                                        isSelected
                                            ? 'bg-green-500 text-white scale-110'
                                            : 'bg-gray-200 text-gray-600 group-hover:bg-green-100 group-hover:text-green-600'
                                    }`}>
                                        {String(index + 1).padStart(2)}
                                    </div>
                                </div>


                                {/* Service Info */}
                                <div className="flex-1 block">
                                    <h3 className={`text-md md:text-lg  font-bold transition-colors ${
                                        isSelected ? 'text-gray-800' : 'text-gray-700 group-hover:text-gray-800'
                                    }`}>
                                        {service.title}
                                    </h3>
                                    <p className="text-sm hidden md:block text-gray-500 mt-1">Click to view details</p>
                                </div>

                            </div>
                        </button>
                    </>
                );
              })}
            </div>

            {/* Right Side - Service Details */}
            <div className="md:col-span-7">
              {currentService && (
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full flex flex-col">

                    {/* Header/Title Section (Replaces Image) */}
                    <div className="p-6 sm:p-8 pb-4 sm:pb-6">{/* CHANGED FOR MOBILE: tighter padding */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-800 leading-snug">{/* CHANGED FOR MOBILE: responsive heading */}
                        {currentService.title}
                      </h3>
                    </div>

                    {/* Content Section - Main Description */}
                    <div className="p-6 sm:p-8 flex-grow">{/* CHANGED FOR MOBILE: tighter padding */}
                      <div className="mb-6 sm:mb-8">{/* CHANGED FOR MOBILE: reduced margin */}
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line font-[Montserrat] text-sm sm:text-base">{/* CHANGED FOR MOBILE: font size */}
                          {currentService.description}
                        </p>
                      </div>

                      {/* Features/Benefits - Structured Grid */}
                      <div>
                        <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-5 border-b pb-2">{/* CHANGED FOR MOBILE: responsive subheading */}Key Advantages</h4>
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
                          {/* Benefit 1 */}
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />{/* CHANGED FOR MOBILE: smaller icon */}
                            <div>
                              <p className="font-bold text-gray-800">Expert Guidance</p>
                              <p className="text-sm text-gray-600">Professional advisory from proven agricultural specialists.</p>
                            </div>
                          </div>

                          {/* Benefit 2 */}
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />{/* CHANGED FOR MOBILE: smaller icon */}
                            <div>
                              <p className="font-bold text-gray-800">Proven Quality</p>
                              <p className="text-sm text-gray-600">A track record of high-quality produce and successful projects.</p>
                            </div>
                          </div>

                          {/* Benefit 3 */}
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />{/* CHANGED FOR MOBILE: smaller icon */}
                            <div>
                              <p className="font-bold text-gray-800">Sustainable Approach</p>
                              <p className="text-sm text-gray-600">Committed to eco-friendly and responsible farming methods.</p>
                            </div>
                          </div>

                          {/* Benefit 4 */}
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />{/* CHANGED FOR MOBILE: smaller icon */}
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