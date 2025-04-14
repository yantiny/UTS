'use client';

import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Brand Section */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-xl font-bold">Panto</h2>
          <p className="text-gray-600 mt-2">
            The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
          </p>
        </div>

        {/* Services & Furniture */}
        <div className="flex gap-10 md:gap-20">
          <div> 
            <h3 className="text-orange-500 font-semibold mb-2">Services</h3>
            <ul className="text-gray-600">
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
            </ul>
          </div>
          <div>
            <h3 className="text-orange-500 font-semibold mb-2">Furniture</h3>
            <ul className="text-gray-600">
              <li>Beds</li>
              <li>Chair</li>
              <li>All</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-2">Follow Us</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-center gap-2">
              <Facebook size={18} /> Facebook
            </li>
            <li className="flex items-center gap-2">
              <Twitter size={18} /> Twitter
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={18} /> Instagram
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t pt-4">
        <p>Copyright &copy; 2021</p>
        <div className="flex gap-6">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
