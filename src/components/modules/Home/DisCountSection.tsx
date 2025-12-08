import React from 'react';

const DisCountSection = () => {
    return (
      <section className="py-16 px-6 bg-white">
  <h2 className="text-3xl font-bold text-center mb-12">Discounts & Offers</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <div className="border p-6 rounded-lg shadow text-center">
      <h3 className="font-bold mb-2">10% Off Electronics</h3>
      <p>Valid until Dec 31, 2025</p>
    </div>
    <div className="border p-6 rounded-lg shadow text-center">
      <h3 className="font-bold mb-2">Buy 1 Get 1 Free</h3>
      <p>On select items</p>
    </div>
  </div>
</section>

    );
};

export default DisCountSection;