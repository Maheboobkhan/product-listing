// 'use client'
// import { useState, useEffect } from 'react';
// import ProductModal from './components/ProductModel';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => setProducts(data));
//   }, []);

//   const filteredProducts = products.filter(product =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="mb-4 p-2 border rounded w-full"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map(product => (
//             <div key={product.id} className="bg-white p-4 rounded shadow-md">
//               <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-4" />
//               <h2 className="text-lg font-bold">{product.title}</h2>
//               <p className="text-gray-700">${product.price}</p>
//               <button
//                 className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
//                 onClick={() => setSelectedProduct(product)}
//               >
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//         {selectedProduct && (
//           <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;















// 'use client'
// import { useState, useEffect } from 'react';
// import ProductModal from './components/ProductModel';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => setProducts(data));
//   }, []);

//   const filteredProducts = products.filter(product =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-2xl font-bold mb-4 text-center">Product Listing</h1>
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="mb-4 p-2 border rounded w-full"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map(product => (
//             <div
//               key={product.id}
//               className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
//             >
//               <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4 rounded" />
//               <h2 className="text-lg font-bold">{product.title}</h2>
//               <p className="text-gray-700">${product.price}</p>
//               <button
//                 className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//                 onClick={() => setSelectedProduct(product)}
//               >
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//         {selectedProduct && (
//           <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;










'use client'
import { useState, useEffect } from 'react';
import ProductModal from './components/ProductModel';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-Montserrat">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center" style={{ color: '#4a4a4a' }}>Product Listing</h1>
        <input
          type="text"
          placeholder="Search products..."
          className="mb-4 p-2 border rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ borderColor: '#4a4a4a', color: '#4a4a4a' }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col justify-between"
              onClick={() => setSelectedProduct(product)}
              style={{ borderColor: '#e27daa', borderWidth: '1px' }}
            >
              <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4 rounded" />
              <div className="flex-grow mb-6">
                <h2 className="text-lg font-bold mb-8 text-center" style={{ color: '#e27daa' }}>{product.title}</h2>
                <p className="text-[#4a4a4a] text-lg font-bold absolute bottom-2">${product.price}</p>
              </div>
              <button className='bg-[#e27daa] text-white p-2 rounded-md hover:bg-gray-100 hover:text-[#e27daa] absolute right-2 bottom-2 cursor-pointer'>Add to Cart</button>
            </div>
          ))}
        </div>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </div>
    </div>
  );
};

export default Home;
