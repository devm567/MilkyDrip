import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="bg-black text-white font-sans leading-relaxed min-h-screen">
      <main>
        {/* Hero Section with Image */}
        <section className="relative h-96 flex items-center justify-center text-center bg-black overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out transform hover:scale-105" style={{ backgroundImage: "url('https://images.pexels.com/photos/4391471/pexels-photo-4391471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}></div>
          <div className="relative z-10 p-6 sm:p-10 md:p-16 bg-black bg-opacity-60 rounded-lg shadow-xl m-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-wide">
              Returns & Exchanges
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-light">
              Your satisfaction is our top priority.
            </p>
          </div>
        </section>

        {/* Policy Details Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-gray-500 inline-block pb-2">
              Our Commitment
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl mb-8">
              At Milky Drip, we stand behind the quality of our products and want you to be completely satisfied with your purchase. We understand that sometimes things don't work out, and we're here to help. This return policy is designed to be as clear and straightforward as possible, ensuring a smooth and hassle-free experience for you. We value your trust and strive to handle every return and exchange with care and efficiency. Our goal is to make sure you find the perfect fit and style that you'll love.
            </p>

            <div className="space-y-12 mt-12">
              {/* General Return Policy */}
              <div className="p-6 bg-gray-900 rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.01]">
                <h3 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                  General Return Policy
                </h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  You may return unworn, unwashed, and undamaged items with all original tags still attached within <span className="text-white font-semibold">30 days</span> of the delivery date. Items must be in their original, resalable condition. Please note that we reserve the right to refuse a return if the item appears to have been worn, used, or damaged. Returns for store credit are free of charge. If you opt for a refund to your original payment method, a return shipping fee of $5 will be deducted from your refund.
                </p>
              </div>

              {/* How to Initiate a Return */}
              <div className="p-6 bg-gray-900 rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.01]">
                <h3 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                  How to Initiate a Return
                </h3>
                <ol className="list-decimal list-inside text-gray-400 space-y-4 text-base sm:text-lg">
                  <li>
                    <span className="text-white font-semibold">Visit our Returns Portal:</span> Go to our dedicated Returns Portal on our website. You will need your order number and the email address used for the purchase.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Select Items to Return:</span> Choose the items you wish to return and specify the reason for the return from the provided options. This helps us understand your needs and improve our products.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Print Your Shipping Label:</span> After submitting your request, you will be provided with a prepaid return shipping label. Pack your items securely in the original packaging, if possible, and attach the label.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Drop Off Your Package:</span> Take your package to the nearest designated drop-off location for the carrier specified on the label.
                  </li>
                </ol>
                <p className="text-gray-400 text-base sm:text-lg mt-4">
                  Once we receive and inspect your return, we will process your refund or store credit within 5-7 business days. You will receive an email notification once the process is complete.
                </p>
              </div>

              {/* Exchanges */}
              <div className="p-6 bg-gray-900 rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.01]">
                <h3 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                  Exchanges
                </h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  We offer free exchanges for all orders within the United States. If you would like to exchange an item for a different size or color, please follow the same steps as a return through our Returns Portal. When you select 'Exchange' as your reason, you will be able to choose the new item you would like to receive. We will ship the new item to you at no additional cost as soon as your original item is received and inspected.
                </p>
              </div>

              {/* Final Sale & Special Items */}
              <div className="p-6 bg-gray-900 rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.01]">
                <h3 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                  Final Sale & Special Items
                </h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  Please be aware that certain items, such as those marked "Final Sale," are not eligible for returns or exchanges. This policy is clearly stated on the product page. Additionally, gift cards are non-refundable and cannot be exchanged for cash. We appreciate your understanding and encourage you to review all product details carefully before making a purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white text-black px-4 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need More Help?</h2>
            <p className="text-lg sm:text-xl font-light mb-8 max-w-2xl mx-auto">
              Our customer support team is here to assist you with any questions you may have about our return policy or your order.
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

export default ReturnPolicy;
