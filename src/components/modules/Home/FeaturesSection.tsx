import React from 'react';

const FeaturesSection = () => {
    return (
       <section className="py-16 px-6 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <h3 className="font-bold mb-2">Inventory Management</h3>
      <p>Track your products and stock easily.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <h3 className="font-bold mb-2">Sales Reports</h3>
      <p>Get detailed insights of your daily, weekly, and monthly sales.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <h3 className="font-bold mb-2">Multi-User Access</h3>
      <p>Allow your staff to use the system with role-based access.</p>
    </div>
  </div>
</section>

    );
};

export default FeaturesSection;