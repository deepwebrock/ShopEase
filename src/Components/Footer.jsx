import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold">ShopEase</h2>
        <p className="mt-2 text-gray-400">Your one-stop shop for the best deals!</p>

        {/* Navigation Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms & Conditions</a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center space-x-6 text-xl">
          <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
          <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-500"><FaLinkedin /></a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-gray-500">© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
