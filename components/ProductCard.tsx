import React from 'react';
import { Cookie } from '../types';

interface ProductCardProps {
  product: Cookie;
  onAddToCart: (product: Cookie) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white border border-slate-100 rounded-3xl p-6 hover:shadow-2xl hover:shadow-purple-100 transition-all duration-300 flex flex-col relative overflow-hidden">
      
      {/* IMAGE AREA */}
      <div className="mb-6 relative overflow-hidden rounded-2xl bg-slate-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/cookies/placeholder.jpg';
          }}
        />

        {/* TAGS */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {product.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-white/90 backdrop-blur rounded-lg text-[10px] font-bold text-purple-600 border border-purple-100 uppercase tracking-wider shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* BATCH BADGE */}
        <div className="absolute bottom-3 right-3">
          <div className="bg-slate-900/80 text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-widest backdrop-blur">
            {product.category}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="space-y-2 flex-grow">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
            {product.category}
          </span>
          <span className="text-sm font-bold text-slate-800">
            Rp {product.price.toLocaleString()}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* CTA — sekarang NETRAL (bukan experience) */}
      <button
        onClick={() => onAddToCart(product)}
        className="mt-6 w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-purple-600 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-purple-200"
      >
        Lihat Detail
      </button>
    </div>
  );
};

export default ProductCard;