"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "📦",
    title: "Inventory Management",
    description:
      "Keep track of stock levels, receive alerts for low stock, and manage product details effortlessly.",
  },
  {
    icon: "📊",
    title: "Sales & Reports",
    description:
      "View daily, weekly, and monthly sales data with detailed analytics and performance charts.",
  },
  {
    icon: "👥",
    title: "Customer Management",
    description:
      "Maintain customer details, track purchase history, and reward loyal customers with ease.",
  },
  {
    icon: "💳",
    title: "Payment Solutions",
    description:
      "Accept cash, card, mobile banking, and digital wallet payments smoothly and securely.",
  },
  {
    icon: "🧾",
    title: "Invoice & Billing",
    description:
      "Generate printed or digital invoices instantly with tax, discount, and due tracking.",
  },
  {
    icon: "🔐",
    title: "User Roles & Security",
    description:
      "Secure system access with admin, cashier, and manager roles with advanced permissions.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServiceSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-indigo-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-3 sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Powerful tools and services to grow your business with speed and accuracy.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-5xl mb-5 text-indigo-400">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
