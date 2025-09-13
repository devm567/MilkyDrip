import React from 'react';

const Affiliates = () => {
  return (
    <div className="bg-black text-white font-sans leading-relaxed min-h-screen">
      <main>
        {/* Hero Section with Dynamic Image and Text */}
        <section className="relative h-96 flex flex-col items-center justify-center text-center bg-black overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3762883/pexels-photo-3762883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team Collaboration"
              className="w-full h-full object-cover opacity-60 transition-transform duration-1000 ease-in-out hover:scale-105"
            />
          </div>
          <div className="relative z-10 p-6 sm:p-10 md:p-16 bg-black bg-opacity-60 rounded-lg shadow-xl m-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-wide">
              Our Affiliate Program
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-light">
              Join us to share the style and earn rewards.
            </p>
          </div>
        </section>

        {/* Introduction Section with a Fresh Layout */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-gray-500 inline-block pb-2">
                The Milky Drip Partnership
              </h2>
              <p className="text-gray-300 text-lg sm:text-xl mb-8">
                Milky Drip is more than just a clothing brand; it's a community built on creativity and quality. Our Affiliate Program is designed for trendsetters, creators, and fashion lovers who want to turn their passion into profit. By joining our program, you'll become a key part of our growth story, connecting your audience with high-quality, unique apparel that they'll love.
              </p>
            </div>
            <div className="md:order-1 relative group overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <img
                src="https://images.pexels.com/photos/5699476/pexels-photo-5699476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Creative Process"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-xl font-semibold">Our Creative Process</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Benefits Section with Images */}
        <section className="bg-gray-900 px-4 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Exclusive Benefits Await
            </h2>
            <div className="flex flex-col gap-16">
              {/* Benefit 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                  <img
                    src="https://images.pexels.com/photos/7161839/pexels-photo-7161839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Competitive Commission"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-xl font-semibold">Competitive Commission</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Earn More</h3>
                  <p className="text-gray-400">
                    We believe in fair compensation for your hard work. Our competitive commission structure ensures you get a generous percentage of every sale made through your unique affiliate link. The more you sell, the more you earn, with no hidden fees or complicated tiers.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2 relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                  <img
                    src="https://images.pexels.com/photos/5926388/pexels-photo-5926388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Marketing Resources"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-xl font-semibold">Marketing Resources</p>
                  </div>
                </div>
                <div className="md:order-1 p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Grow with Our Assets</h3>
                  <p className="text-gray-400">
                    We provide you with all the tools you need to succeed. Get access to a library of professional, high-resolution images, eye-catching banners, and creative content ideas that will help you promote our products effectively to your audience.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                  <img
                    src="https://images.pexels.com/photos/4100650/pexels-photo-4100650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Dedicated Support"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-xl font-semibold">Dedicated Support</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Your Success is Our Priority</h3>
                  <p className="text-gray-400">
                    Our dedicated affiliate team is here to support you every step of the way. Whether you have questions about the program, need help with a campaign, or want to discuss a new idea, we are just an email away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Join Section - Simplified */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-gray-500 inline-block pb-2">
            How to Get Started
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg sm:text-xl mb-8">
              Joining our affiliate program is quick, easy, and free. Follow these simple steps to begin your journey with Milky Drip.
            </p>
            <div className="flex flex-col items-center space-y-8">
              <div className="relative flex items-center justify-center w-24 h-24 bg-gray-900 rounded-full text-white text-5xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-white">Apply Online</h3>
              <p className="text-gray-400 max-w-sm">
                Fill out our quick online application form with your details.
              </p>
              <div className="relative flex items-center justify-center w-24 h-24 bg-gray-900 rounded-full text-white text-5xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-white">Get Approved</h3>
              <p className="text-gray-400 max-w-sm">
                Our team will review your application and send you a confirmation.
              </p>
              <div className="relative flex items-center justify-center w-24 h-24 bg-gray-900 rounded-full text-white text-5xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-white">Start Earning</h3>
              <p className="text-gray-400 max-w-sm">
                Get your unique link and start promoting to earn commissions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white text-black px-4 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Partner?</h2>
            <p className="text-lg sm:text-xl font-light mb-8 max-w-2xl mx-auto">
              Join our team and start earning commission today.
            </p>
            <a
              href="/"
              className="inline-block bg-black text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:bg-gray-800"
            >
              Sign Up Now
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

export default Affiliates;
