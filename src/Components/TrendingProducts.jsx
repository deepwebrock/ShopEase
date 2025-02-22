import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const trendingProducts = [
  { id: 1, name: "Chin-pullup", price: "₹4,999", img: "exercise.jpg" },
  { id: 2, name: "Jacket", price: "₹3,499", img: "jacket.jpg" },
  { id: 3, name: "Shoes", price: "₹2,999", img: "shoes.jpg" },
  { id: 4, name: "Boxing Gloves", price: "₹599", img: "gloves.jpg" }
];

const TrendingProducts = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-10">Trending Products</h2>
      <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
        {trendingProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src={product.img} alt={product.name} className="mx-auto h-48 w-48 object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-blue-600 font-bold">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingProducts;
