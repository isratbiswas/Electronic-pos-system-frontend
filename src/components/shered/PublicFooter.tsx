export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            POS <span className="text-green-400">System</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Fast, reliable & modern POS software for shops, restaurants, and businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">Dashboard</li>
            <li className="hover:text-green-400 cursor-pointer">Products</li>
            <li className="hover:text-green-400 cursor-pointer">Sales</li>
            <li className="hover:text-green-400 cursor-pointer">Inventory</li>
            <li className="hover:text-green-400 cursor-pointer">Reports</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Email: support@pos.com</li>
            <li>Phone: +880 1700-000000</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        © {new Date().getFullYear()} POS System. All rights reserved.
      </div>
    </footer>
  );
}
