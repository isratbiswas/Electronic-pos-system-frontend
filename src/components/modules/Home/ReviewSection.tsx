import Image from "next/image";
import React from "react";

const ReviewSection = () => {
  return (
    <section className="py-16 px-6 bg-white" id="reviews">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-green-600">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-3">
          Trusted by businesses of all sizes across the country.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Review 1 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="mb-4">⭐⭐⭐⭐⭐</div>
          <p className="text-gray-700 mb-4">
            “This POS system has transformed my business. Sales tracking and
            inventory management are now effortless!”
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="https://i.pinimg.com/736x/6b/b6/d0/6bb6d094147301f3ccce198b6d6179bc.jpg"
              width={500}
              height={500}
              alt="customer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Rahim Uddin</h4>
              <p className="text-sm text-gray-500">Shop Owner</p>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="mb-4">⭐⭐⭐⭐</div>
          <p className="text-gray-700 mb-4">
            “Simple, fast, reliable. The profit reports help me understand my
            business better. Highly recommended!”
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="https://i.pinimg.com/736x/36/af/73/36af73ef3cd451d1e60d45899ee15043.jpg"
              alt="customer"
              width={500}
              height={500}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Afsana Mim</h4>
              <p className="text-sm text-gray-500">Boutique Owner</p>
            </div>
          </div>
        </div>

        {/* Review 3 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="mb-4">⭐⭐⭐⭐⭐</div>
          <p className="text-gray-700 mb-4">
            “Managing staff roles and invoices has never been this easy. Best
            POS solution for any retail shop!”
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="https://i.pinimg.com/736x/84/8f/3b/848f3b92a3e2a6040faccad5888f851e.jpg"
              alt="customer"
              width={500}
              height={500}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Sajid Hasan</h4>
              <p className="text-sm text-gray-500">Electronics Store</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
