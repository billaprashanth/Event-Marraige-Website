import React from 'react';
// min-h-screen
const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-skyBlue to-peach ">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black-600 text-center mb-8">Contact Us</h2>
        <p className="text-center">Note: This form is currently not functional as we are still working on the backend integration. Thank you for your patience!</p>
        <form className="space-y-4 max-w-lg mx-auto py-6">
          <input name="name" placeholder="Your Name" className="w-full p-2 border rounded" required />
          <input name="phone" placeholder="Your Number" className="w-full p-2 border rounded" required />
          <textarea name="message" placeholder="Message" className="w-full p-2 border rounded" required />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send</button>
          
        </form>
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold text-black-600 text-center">Ganesh Billa</h1>
          <p className="text-3l font-bold text-blue-600 text-center">📞+91 9441701754</p>
          <a href="/" className="hover:underline flex justify-center">Follow Us On Instagram</a>
          <a className="hover:underline">Vemulawada, Road, opposite to substation, Kathlapur, Telangana 505462, India</a>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?..."
            className="w-full h-64 mt-4 border-0 rounded"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;