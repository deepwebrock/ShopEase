// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center px-4"
//       style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}>
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       <motion.div 
//         className="relative z-10 text-white px-6"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//           Find the Best Deals on Quality Products
//         </h1>
//         <p className="mt-2 text-sm md:text-lg">
//           Exclusive offers on the latest trends, delivered to your doorstep.
//         </p>
//         <button 
//           className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
//           onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })}
//         >
//           Start Shopping
//         </button>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div 
        className="relative z-10 text-white px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Discover the Best Deals Online!
        </h1>
        <p className="mt-2 text-sm md:text-lg">
          Get exclusive offers on premium products, delivered to your doorstep.
        </p>
        <button 
          className="mt-6 bg-yellow-400 px-6 py-3 rounded-lg text-lg font-semibold text-gray-900 hover:bg-yellow-500 transition"
          onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })}
        >
          Start Shopping
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
