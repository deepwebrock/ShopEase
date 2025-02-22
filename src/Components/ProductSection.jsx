




// import { motion } from "framer-motion";

// const products = [
//     { id: 1, name: "Smartwatch", price: "₹2999", img: "watch1.jpg" },
//     { id: 2, name: "Wireless Earbuds", price: "₹1449", img: "earbud.jpg" },
//     { id: 3, name: "Gaming Mouse", price: "₹1129", img: "mouse3.jpg" }
// ];

// const ProductSection = () => {
//   return (
//     <section className="py-12 px-4 md:px-12 lg:px-24">
//       <h2 className="text-center text-3xl font-bold">Featured Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
//         {products.map(product => (
//           <motion.div 
//             key={product.id} 
//             className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <img src={product.img} alt={product.name} className="h-56 w-56 object-cover rounded" />
//             <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
//             <p className="text-blue-600 font-bold mt-2">{product.price}</p>
//             <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
//               Buy Now
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductSection;



import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Smartwatch", price: "₹2,999", img: "watch1.jpg" },
  { id: 2, name: "Wireless Earbuds", price: "₹1,449", img: "earbud.jpg" },
  { id: 3, name: "Gaming Mouse", price: "₹1,129", img: "mouse3.jpg" },
  { id: 4, name: "Laptop", price: "₹1,11,129", img: "laptop.jpg" }
];

const ProductSection = () => {
  return (
    <section id="products" className="py-12 px-4 md:px-12 lg:px-24 bg-gray-100">
      <h2 className="text-center text-3xl font-bold">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {products.map(product => (
          <motion.div 
            key={product.id} 
            className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={product.img} alt={product.name} className="h-48 w-48 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-blue-600 font-bold mt-2">{product.price}</p>
            <motion.button 
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              whileTap={{ scale: 0.9 }}
            >
              Buy Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;

