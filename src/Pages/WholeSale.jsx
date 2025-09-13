import React from 'react';

const WholeSale = () => {
  return (
    <div className="bg-black text-white font-sans leading-relaxed min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative h-64 flex items-center justify-center text-center bg-black overflow-hidden">
          <div className="relative z-10 p-6 sm:p-10 md:p-16 bg-black bg-opacity-60 rounded-lg shadow-xl m-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-wide">
              Wholesale Partnerships
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-light">
              Collaborate with us and grow together.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-gray-500 inline-block pb-2">
              Join the Milky Drip Family
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl mb-8">
              At Milky Drip, we are passionate about sharing our unique designs and commitment to quality with partners who share our vision. Our wholesale program is designed to provide you with a seamless and supportive experience, allowing you to bring our premium apparel to your customers. Whether you are a boutique owner, a retail chain, or an online store, we offer flexible solutions to meet your business needs and help you succeed. We are more than just a brand; we are a community built on creativity, quality, and mutual growth.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-900 px-4 py-16">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
                Why Partner with Milky Drip?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-black rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-white mb-4">Quality & Design</h3>
                  <p className="text-gray-400">
                    Offer your customers high-quality, ethically-made apparel with modern designs that stand out from the crowd.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-white mb-4">Competitive Pricing</h3>
                  <p className="text-gray-400">
                    Benefit from exclusive wholesale pricing and flexible order quantities that support your business's growth.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-white mb-4">Dedicated Support</h3>
                  <p className="text-gray-400">
                    Get personalized assistance from our dedicated wholesale team to ensure a smooth and successful partnership.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-white mb-4">Marketing Assets</h3>
                  <p className="text-gray-400">
                    Receive high-resolution product images and marketing materials to effectively showcase our collection.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-white mb-4">Exclusive Access</h3>
                  <p className="text-gray-400">
                    Be the first to know about new collections, seasonal drops, and exclusive wholesale-only products.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-white mb-4">Sustainable Focus</h3>
                  <p className="text-gray-400">
                    Partner with a brand committed to ethical sourcing and sustainable production, a value your customers will appreciate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-gray-500 inline-block pb-2">
              How to Become a Partner
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-gray-900 rounded-lg shadow-xl">
                <span className="text-4xl font-bold text-white mb-2 block">1</span>
                <h3 className="text-xl font-semibold text-white mb-2">Submit Your Application</h3>
                <p className="text-gray-400">
                  Fill out our online wholesale application form with your business details and information about your store.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-900 rounded-lg shadow-xl">
                <span className="text-4xl font-bold text-white mb-2 block">2</span>
                <h3 className="text-xl font-semibold text-white mb-2">Review & Approval</h3>
                <p className="text-gray-400">
                  Our team will review your application and get in touch within 3-5 business days to discuss the next steps.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-900 rounded-lg shadow-xl">
                <span className="text-4xl font-bold text-white mb-2 block">3</span>
                <h3 className="text-xl font-semibold text-white mb-2">Place Your Order</h3>
                <p className="text-gray-400">
                  Once approved, you will get access to our wholesale portal to place your first order and start your partnership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="bg-white text-black px-4 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Partner?</h2>
            <p className="text-lg sm:text-xl font-light mb-8 max-w-2xl mx-auto">
              Fill out the form below to get started, and our team will get back to you shortly.
            </p>
            <a
              href="/"
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

export default WholeSale;
