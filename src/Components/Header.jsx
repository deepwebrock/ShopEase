// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold text-gray-900">ShopEase</Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6">
//           <Link to="/" className="hover:text-blue-600">Home</Link>
//           <Link to="/products" className="hover:text-blue-600">Products</Link>
//           <Link to="/contact" className="hover:text-blue-600">Contact</Link>
//         </nav>

//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hidden md:block">
//           Shop Now
//         </button>

//         {/* Mobile Menu Toggle */}
//         <button className="md:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
//           ☰
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md absolute w-full">
//           <Link to="/" className="block px-6 py-2">Home</Link>
//           <Link to="/products" className="block px-6 py-2">Products</Link>
//           <Link to="/contact" className="block px-6 py-2">Contact</Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on mobile
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 cursor-pointer" onClick={() => scrollToSection("hero")}>
          ShopEase
        </h2>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection("hero")} className="hover:text-blue-600">Home</button>
          <button onClick={() => scrollToSection("products")} className="hover:text-blue-600">Products</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-blue-600">Contact</button>
        </nav>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hidden md:block" onClick={() => scrollToSection("products")}>
          Shop Now
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full">
          <button onClick={() => scrollToSection("hero")} className="block px-6 py-2">Home</button>
          <button onClick={() => scrollToSection("products")} className="block px-6 py-2">Products</button>
          <button onClick={() => scrollToSection("contact")} className="block px-6 py-2">Contact</button>
        </div>
      )}
    </header>
  );
};

export default Header;
