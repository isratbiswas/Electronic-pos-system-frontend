import React from 'react';

const HowItWorksSection = () => {
    return (
    <section className="py-16 px-6 bg-gray-50" id="how-it-works">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold text-green-600">How It Works</h2>
    <p className="text-gray-600 mt-3">
      Get started with your POS system in just a few simple steps.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

    {/* Step 1 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      <div className="text-5xl mb-4">📝</div>
      <h3 className="text-xl font-semibold mb-2">1. Create Account</h3>
      <p className="text-gray-600">
        Sign up and set up your store details within minutes.
      </p>
    </div>

    {/* Step 2 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      <div className="text-5xl mb-4">📦</div>
      <h3 className="text-xl font-semibold mb-2">2. Add Products</h3>
      <p className="text-gray-600">
        Upload your items with stock, pricing, discounts & barcode.
      </p>
    </div>

    {/* Step 3 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      <div className="text-5xl mb-4">💳</div>
      <h3 className="text-xl font-semibold mb-2">3. Start Selling</h3>
      <p className="text-gray-600">
        Process orders, apply discounts, and accept payments instantly.
      </p>
    </div>

    {/* Step 4 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      <div className="text-5xl mb-4">📊</div>
      <h3 className="text-xl font-semibold mb-2">4. Track Reports</h3>
      <p className="text-gray-600">
        Monitor daily sales, profits, stock levels & performance analytics.
      </p>
    </div>

  </div>
</section>

    );
};

export default HowItWorksSection;