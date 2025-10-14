import React, { useState, useCallback, memo } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

function TestimonialsBase({ items = [] }) {
  const [current, setCurrent] = useState(0);
  const total = items.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  if (!total) return null;
  const t = items[current];

  return (
    <div className="relative" aria-roledescription="carousel" aria-label="Testimonials">
      <div className="bg-white rounded-3xl shadow-md p-8 md:p-12">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={t.image}
            alt={`${t.name} avatar`}
            loading="lazy"
            decoding="async"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-yellow-400 mb-4" aria-label={`Rating ${t.rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} fill={i < t.rating ? 'currentColor' : 'none'} />
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed">{t.text}</p>
      </div>
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex gap-3">
        <button
          type="button"
          className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={next}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default memo(TestimonialsBase);
