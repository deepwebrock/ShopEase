// import { useState } from "react";

// const Newsletter = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email) {
//       setMessage("Please enter a valid email.");
//       return;
//     }

//     // Simulating email submission
//     setTimeout(() => {
//       setMessage("Thank you for subscribing!");
//       setEmail(""); // Clear input field after submission
//     }, 1000);
//   };

//   return (
//     <section className="py-12 bg-blue-600 text-white text-center">
//       <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
//       <p className="mt-2">Get exclusive deals and updates on our latest products.</p>

//       <form onSubmit={handleSubmit} className="mt-6 flex justify-center">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="p-3 rounded-l-lg w-80 text-gray-800"
//           required
//         />
//         <button type="submit" className="bg-yellow-400 px-6 py-3 rounded-r-lg text-gray-900 font-semibold hover:bg-yellow-500 transition">
//           Subscribe
//         </button>
//       </form>

//       {message && <p className="mt-4 text-lg">{message}</p>}
//     </section>
//   );
// };

// export default Newsletter;


import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    setTimeout(() => {
      setMessage("Thank you for subscribing!");
      setEmail(""); // Clear input field after submission
    }, 1000);
  };

  return (
    <section id="contact" className="py-12 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
      <p className="mt-2">Get exclusive deals and updates on our latest products.</p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col md:flex-row justify-center px-6">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-t-lg md:rounded-l-lg md:rounded-t-none w-full md:w-80 text-gray-800"
          required
        />
        <button type="submit" className="bg-yellow-400 px-6 py-3 rounded-b-lg md:rounded-r-lg md:rounded-b-none text-gray-900 font-semibold hover:bg-yellow-500 transition">
          Subscribe
        </button>
      </form>

      {message && <p className="mt-4 text-lg">{message}</p>}
    </section>
  );
};

export default Newsletter;

