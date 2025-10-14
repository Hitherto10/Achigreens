import React, { memo } from 'react';
import { Star } from 'lucide-react';

function ProductCardBase({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300" role="article" aria-label={`Product ${product.name}`}>
      <div className="relative">
          {/* CHANGED FOR MOBILE: responsive image height */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-48 sm:h-64 lg:h-[450px] object-cover"
        />
        {product.featured && (
          <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full" aria-label="Featured">
            Featured
          </span>
        )}
      </div>
      <div className="p-4 sm:p-6">{/* CHANGED FOR MOBILE: tighter padding */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{product.name}</h3>{/* CHANGED FOR MOBILE: responsive text */}
        </div>
        <p className="text-gray-500 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-bold text-gray-900">₦{product.price}</span>{/* CHANGED FOR MOBILE: responsive price */}
            {/* CHANGED FOR MOBILE: tighter padding */}
          <button
            type="button"
            className="px-3 py-2 sm:px-4 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            onClick={() => onAddToCart?.(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export const ProductCard = memo(ProductCardBase);
export default ProductCard;
