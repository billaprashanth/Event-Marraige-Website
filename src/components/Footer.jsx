import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} SRR Events. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a target='_blank' href="https://wa.me/919441701754" className="hover:underline">WhatsApp</a>
        </div>
        <h3 className="text-center md:text-right text-xs mt-4 md:mt-0">Designed & Developed by Prashanth Billa</h3>
      </div>
    </footer>
  );
};

export default Footer;
