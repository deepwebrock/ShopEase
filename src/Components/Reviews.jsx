import { motion } from "framer-motion";

const reviews = [
  { id: 1, name: "Amit Sharma", rating: 5, review: "Absolutely love this smartwatch! The battery life is amazing.", img: "https://randomuser.me/api/portraits/men/11.jpg" },
  { id: 2, name: "Pooja Verma", rating: 4, review: "The earbuds sound quality is fantastic. Worth the price!", img: "https://randomuser.me/api/portraits/women/5.jpg" },
  { id: 3, name: "Rahul Singh", rating: 5, review: "The gaming mouse is so smooth and responsive. Highly recommend!", img: "https://randomuser.me/api/portraits/men/3.jpg" }
];

const Reviews = () => {
  return (
    <section className="py-12 bg-gray-100">
      <motion.h2 
        className="text-center text-3xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Customer Reviews
      </motion.h2>

      <div className="flex flex-wrap justify-center mt-6 gap-6">
        {reviews.map(({ id, name, rating, review, img }) => (
          <motion.div 
            key={id} 
            className="bg-white p-6 rounded-lg shadow-lg w-80 transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-4">
              <img src={img} alt={name} className="h-14 w-14 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{name}</h3>
                <div className="text-yellow-500">
                  {"★".repeat(rating)}{"☆".repeat(5 - rating)}
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">"{review}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;


// import { motion } from "framer-motion";

// const reviews = [
//   {
//     id: 1,
//     name: "Amit Sharma",
//     rating: 5,
//     review: "Absolutely love this smartwatch! The battery life is amazing.",
//     img: "https://randomuser.me/api/portraits/men/11.jpg",
//   },
//   {
//     id: 2,
//     name: "Pooja Verma",
//     rating: 4,
//     review: "The earbuds sound quality is fantastic. Worth the price!",
//     img: "https://randomuser.me/api/portraits/women/5.jpg",
//   },
//   {
//     id: 3,
//     name: "Rahul Singh",
//     rating: 5,
//     review: "The gaming mouse is so smooth and responsive. Highly recommend!",
//     img: "https://randomuser.me/api/portraits/men/3.jpg",
//   }
// ];

// const Reviews = () => {
//   return (
//     <section className="py-12 bg-gray-100 px-4 md:px-12 lg:px-24">
//       <motion.h2 
//         className="text-center text-3xl font-bold"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Customer Reviews
//       </motion.h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
//         {reviews.map(({ id, name, rating, review, img }) => (
//           <motion.div 
//             key={id} 
//             className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 text-center"
//             whileHover={{ scale: 1.05 }}
//           >
//             <div className="flex items-center justify-center space-x-4">
//               <img src={img} alt={name} className="h-16 w-16 rounded-full" />
//               <div>
//                 <h3 className="text-lg font-semibold">{name}</h3>
//                 <div className="text-yellow-500 text-lg">
//                   {"★".repeat(rating)}{"☆".repeat(5 - rating)}
//                 </div>
//               </div>
//             </div>
//             <p className="mt-4 text-gray-600">"{review}"</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Reviews;
