import React from 'react';
import Image from 'next/image'; //i have not used Image comp because it's not making fit to the Image

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4 relative">
        <button className="absolute top-1 right-2 text-gray-600 hover:text-gray-900 text-4xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#4a4a4a' }}>{product.title}</h2>
        <img src={product.image} alt={product.title} className="h-32 w-full object-contain mb-4 rounded" />
        {/* <Image src={product.image} alt={product.title} height={32} width={100} className="mx-auto object-contain mb-4 rounded" />       */}
        <div className="overflow-y-auto mb-4" style={{ maxHeight: '4rem' }}>
          <p className="text-gray-700">{product.description}</p>
        </div>
        <p className="text-gray-700 mb-4">Category: {product.category}</p>
        <p className="text-gray-700 mb-4">Price: ${product.price}</p>
        <p className="text-gray-700 mb-4">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        <button
          className="mt-2 bg-[#e27daa] text-white py-2 px-4 rounded hover:bg-[#ba4d7e]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
