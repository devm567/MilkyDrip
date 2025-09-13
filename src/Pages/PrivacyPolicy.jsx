import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white font-sans leading-relaxed min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex flex-col items-center justify-center text-center bg-black overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Protecting your data"
              className="w-full h-full object-cover opacity-60 transition-transform duration-1000 ease-in-out hover:scale-105"
            />
          </div>
          <div className="relative z-10 p-6 sm:p-10 md:p-16 bg-black bg-opacity-60 rounded-lg shadow-xl m-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-wide">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-light">
              Your trust is our top priority.
            </p>
          </div>
        </section>

        {/* Policy Content Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 border-b-2 border-gray-500 inline-block pb-2">
              Our Commitment to Your Privacy
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-6">
              At Milky Drip, we are committed to protecting your privacy and personal information. This Privacy Policy outlines how we collect, use, and protect your data when you visit our website, make a purchase, or interact with our services. By using our website, you agree to the terms of this policy.
            </p>
            <p className="text-gray-300 text-base sm:text-lg mb-6">
              We collect information you provide directly to us, such as your name, email address, shipping address, and payment information when you make a purchase. We may also collect data about your interactions with our website, including your browsing history and purchase preferences, to improve our services and offer you a more personalized shopping experience.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">
              How We Use Your Information
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-6">
              We use the information we collect to process your orders, communicate with you about your purchases, and provide customer support. We may also use your data to send you promotional emails about our new products and special offers, but you can opt out of these communications at any time. We do not sell or rent your personal information to third parties.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">
              Data Security
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
              <div className="md:order-2">
                <p className="text-gray-300 text-base sm:text-lg">
                  We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard security protocols to encrypt sensitive data, such as payment information, during transmission. While no method of transmission over the Internet is 100% secure, we strive to use commercially acceptable means to protect your data.
                </p>
              </div>
              <div className="md:order-1 relative group overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/5431322/pexels-photo-5431322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Data security"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xl font-semibold">Your Data is Safe</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">
              Changes to This Policy
            </h3>
            <p className="text-gray-300 text-base sm:text-lg">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
            </p>
          </div>
        </section>

        {/* CTA Section - Learn More */}
        <section className="bg-white text-black px-4 py-16 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Questions?</h2>
            <p className="text-lg sm:text-xl font-light mb-8 max-w-2xl mx-auto">
              If you have any questions or concerns about our Privacy Policy, please contact us.
            </p>
            <a
              href="/contact"
              className="inline-block bg-black text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:bg-gray-800"
            >
              Contact Us
            </a>
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

export default PrivacyPolicy;
