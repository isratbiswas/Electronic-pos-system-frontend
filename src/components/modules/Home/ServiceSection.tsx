import React from 'react';

const ServiceSection = () => {
    return (
       <section className="py-16 px-6 bg-white" id="services">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold text-green-600">Our Services</h2>
    <p className="text-gray-600 mt-3">
      Powerful tools and services to grow your business with speed and accuracy.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {/* Service Card 1 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">📦</div>
      <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
      <p className="text-gray-600">
        Keep track of stock levels, receive alerts for low stock, and manage product details effortlessly.
      </p>
    </div>

    {/* Service Card 2 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">📊</div>
      <h3 className="text-xl font-semibold mb-2">Sales & Reports</h3>
      <p className="text-gray-600">
        View daily, weekly, and monthly sales data with detailed analytics and performance charts.
      </p>
    </div>

    {/* Service Card 3 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">👥</div>
      <h3 className="text-xl font-semibold mb-2">Customer Management</h3>
      <p className="text-gray-600">
        Maintain customer details, track purchase history, and reward loyal customers with ease.
      </p>
    </div>

    {/* Service Card 4 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">💳</div>
      <h3 className="text-xl font-semibold mb-2">Payment Solutions</h3>
      <p className="text-gray-600">
        Accept cash, card, mobile banking, and digital wallet payments smoothly and securely.
      </p>
    </div>

    {/* Service Card 5 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">🧾</div>
      <h3 className="text-xl font-semibold mb-2">Invoice & Billing</h3>
      <p className="text-gray-600">
        Generate printed or digital invoices instantly with tax, discount, and due tracking.
      </p>
    </div>

    {/* Service Card 6 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">🔐</div>
      <h3 className="text-xl font-semibold mb-2">User Roles & Security</h3>
      <p className="text-gray-600">
        Secure system access with admin, cashier, and manager roles with advanced permissions.
      </p>
    </div>

  </div>
</section>

    );
};

export default ServiceSection;