import React, { useEffect, useState } from 'react';
import { Sprout, Users, Leaf, Tractor, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesSection({ services = [] }) {
  const [selectedService, setSelectedService] = useState(services[0]?.key || null);

  useEffect(() => {
    const handler = (e) => {
      const key = (e?.detail && (e.detail.key || e.detail)) ?? null;
      if (key != null) {
        setSelectedService(key);
      }
    };
    window.addEventListener('activateService', handler);
    return () => window.removeEventListener('activateService', handler);
  }, []);

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

                                {/* Header/Title Section */}
                                <div className="p-6 text-center">
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-800 leading-snug">
                                        {currentService.title}
                                    </h3>

                                    {/* Tagline */}
                                    {currentService.tagline && (
                                        <p className="mt-2 text-sm sm:text-base text-emerald-700 font-medium italic font-[Outfit]">
                                            {currentService.tagline}
                                        </p>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="px-6 sm:px-8 flex-grow">
                                    <div className="mb-6 sm:mb-8">
                                        <p className="text-gray-700 leading-relaxed whitespace-pre-line font-[Outfit] text-sm sm:text-base">
                                            {currentService.description}
                                        </p>
                                    </div>

                                    {/* Details List */}
                                    {currentService.details && currentService.details.length > 0 && (
                                        <ul className="list-disc list-inside space-y-2 text-gray-700 font-[Outfit] text-sm sm:text-base">
                                            {currentService.details.map((point, index) => (
                                                <li key={index} className="leading-relaxed">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}