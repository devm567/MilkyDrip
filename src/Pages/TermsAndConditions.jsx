import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-black text-white font-sans leading-relaxed min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex flex-col items-center justify-center text-center bg-black overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Terms and conditions"
              className="w-full h-full object-cover opacity-60 transition-transform duration-1000 ease-in-out hover:scale-105"
            />
          </div>
          <div className="relative z-10 p-6 sm:p-10 md:p-16 bg-black bg-opacity-60 rounded-lg shadow-xl m-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-wide">
              Terms & Conditions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-light">
              Your guide to a smooth experience.
            </p>
          </div>
        </section>

        {/* Content Section with new design */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 border-b-2 border-gray-500 inline-block pb-2">
                Introduction
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-6">
                Welcome to Milky Drip. These Terms and Conditions govern your use of our website and the services we offer. By accessing or using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our website.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 border-b-2 border-gray-700 inline-block pb-1">
                Use of the Website
              </h3>
              <ul className="list-disc list-inside space-y-4 text-gray-300 text-base sm:text-lg">
                <li>You must be at least 18 years old to use our website.</li>
                <li>You agree to use our website only for lawful purposes.</li>
                <li>We reserve the right to terminate your access to our website at our discretion.</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 border-b-2 border-gray-500 inline-block pb-1">
                  Intellectual Property
                </h3>
                <p className="text-gray-300 text-base sm:text-lg">
                  All content on this website, including text, graphics, logos, images, and software, is the property of Milky Drip and is protected by copyright and intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.
                </p>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Intellectual Property"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xl font-semibold">Our Designs, Your Style</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4 border-b-2 border-gray-500 inline-block pb-1">
                Limitation of Liability
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">
                Milky Drip is not liable for any damages that may arise from the use of this website. We do not guarantee the accuracy or completeness of any information on the site. Your use of this website is at your own risk.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 border-b-2 border-gray-700 inline-block pb-1">
                User Conduct
              </h3>
              <p className="text-gray-300 text-base sm:text-lg mb-4">
                You agree not to use the website for any of the following:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-base sm:text-lg">
                <li>Posting illegal or offensive content.</li>
                <li>Harassing or threatening other users.</li>
                <li>Attempting to gain unauthorized access to the website or its servers.</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
              <div className="md:order-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 border-b-2 border-gray-500 inline-block pb-1">
                  Contact
                </h3>
                <p className="text-gray-300 text-base sm:text-lg">
                  If you have any questions about these Terms and Conditions, please contact us.
                </p>
              </div>
              <div className="md:order-2 relative group overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/10398687/pexels-photo-10398687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Contact Us"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xl font-semibold">We're Here for You</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl text-black">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Thank You for Reading
              </h3>
              <p className="text-gray-700 text-base sm:text-lg">
                Your understanding and adherence to these terms help us provide a safe and enjoyable experience for everyone on our platform.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TermsAndConditions;
