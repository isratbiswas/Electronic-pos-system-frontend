import React from 'react';

const WhyChooseUs = () => {
    return (
       <section className="py-16 px-6 bg-gray-50" id="why-choose-us">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold text-green-600">Why Choose Us</h2>
    <p className="text-gray-600 mt-3">
      Our POS system is trusted because it delivers speed, accuracy, and growth.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

    {/* Card 1 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      <div className="text-5xl mb-4">⚡</div>
      <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
      <p className="text-gray-600">
        Lightning-fast billing and stock updates ensures smooth workflow.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      <div className="text-5xl mb-4">🔒</div>
      <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
      <p className="text-gray-600">
        Role-based access, safe data storage, and advanced security protection.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      <div className="text-5xl mb-4">📊</div>
      <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
      <p className="text-gray-600">
        Real-time reports help you understand sales, profits, and stock levels.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      <div className="text-5xl mb-4">🤝</div>
      <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
      <p className="text-gray-600">
        Our support team is always ready to help you anytime, anywhere.
      </p>
    </div>

  </div>
</section>

    );
};

export default WhyChooseUs;