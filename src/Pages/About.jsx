import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-white font-sans leading-relaxed min-h-screen">
      <main>
        {/* Hero Section with Image */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out transform hover:scale-105" style={{ backgroundImage: "url('https://images.pexels.com/photos/1769165/pexels-photo-1769165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}></div>
          <div className="relative z-10 p-6 sm:p-10 md:p-16 bg-black bg-opacity-60 rounded-lg shadow-xl m-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-wide">
              Our Story
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-light">
              From a vision to reality, every thread tells a tale.
            </p>
          </div>
        </section>

        {/* Introduction Section with Image */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-gray-500 inline-block pb-2 animate-fade-in-up">
                The Milky Drip Difference
              </h2>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 animate-fade-in-up-delay-1">
                Welcome to Milky Drip, where we believe clothing is more than just fabric—it's a canvas for self-expression. Our brand was born from a simple idea: to create high-quality, sustainable, and stylish apparel that inspires confidence and celebrates individuality. We are a small team with a big heart, dedicated to crafting pieces that feel as good as they look. Every stitch, every detail, is a testament to our commitment to excellence and our love for design.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 relative group overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-fade-in-up-delay-2">
              <img
                src="https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="The Milky Drip Difference"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-xl font-semibold">Our Philosophy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision - Alternating Image/Text Layout */}
        <section className="bg-gray-900 px-4 py-16">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12 mb-16">
              <div className="lg:w-1/2 mb-8 lg:mb-0 transform translate-y-8 opacity-0 animate-fade-in-up">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 border-l-4 pl-4 border-gray-500">
                  Our Mission
                </h2>
                <p className="text-gray-300 text-base sm:text-lg">
                  Our mission is to empower individuals to express their unique identity through fashion that is both beautiful and responsible. We are committed to a design process that prioritizes ethical sourcing, sustainable practices, and a minimal environmental footprint. We believe in creating clothes that not only look good but also do good, fostering a community that values conscious consumerism and creativity.
                </p>
              </div>
              <div className="lg:w-1/2 relative group overflow-hidden rounded-lg shadow-xl transform translate-y-8 opacity-0 animate-fade-in-up-delay-2">
                <img
                  src="https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our Mission"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0 transform translate-y-8 opacity-0 animate-fade-in-up-delay-3 order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 border-l-4 pl-4 border-gray-500">
                  Our Vision
                </h2>
                <p className="text-gray-300 text-base sm:text-lg">
                  We envision a future where fashion is synonymous with sustainability and authenticity. Our goal is to become a leading voice in the conscious fashion movement, inspiring other brands and consumers to make more mindful choices. We strive to build a community around shared values, where our customers feel a connection to the products they wear and the story behind them.
                </p>
              </div>
              <div className="lg:w-1/2 relative group overflow-hidden rounded-lg shadow-xl transform translate-y-8 opacity-0 animate-fade-in-up-delay-4 order-1 lg:order-2">
                <img
                  src="https://images.pexels.com/photos/8137278/pexels-photo-8137278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our Vision"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Behind the Seams - Image Grid with Text */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center animate-fade-in-up">
              Behind the Seams
            </h2>
            <p className="text-gray-300 text-base sm:text-lg text-center mb-12 animate-fade-in-up-delay-1">
              Every garment at Milky Drip is the result of meticulous design and ethical production. We are proud to share our journey with you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="relative group rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 animate-fade-in-up-delay-2">
                <img src="https://images.pexels.com/photos/5926388/pexels-photo-5926388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Creative Design" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-lg font-semibold">Creative Design</p>
                </div>
              </div>
              <div className="relative group rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 animate-fade-in-up-delay-3">
                <img src="https://images.pexels.com/photos/4100650/pexels-photo-4100650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Ethical Production" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-lg font-semibold">Ethical Production</p>
                </div>
              </div>
              <div className="relative group rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 animate-fade-in-up-delay-4">
                <img src="https://images.pexels.com/photos/7161839/pexels-photo-7161839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Quality Control" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-lg font-semibold">Quality Control</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-white text-black px-4 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join the Milky Drip Family</h2>
            <p className="text-lg sm:text-xl font-light mb-8 max-w-2xl mx-auto">
              We're more than a brand; we're a community. Thank you for being a part of our story and helping us make a positive impact, one stylish garment at a time.
            </p>
            <a
              href="/"
              className="inline-block bg-black text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:bg-gray-800"
            >
              Shop Our Collection
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
        @keyframes fadeInNoY {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in-up {
          animation: fadeIn 1s ease-out;
        }
        .animate-fade-in-up-delay {
          animation: fadeIn 1.2s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-up-delay-1 {
          animation: fadeIn 1.2s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-fade-in-up-delay-2 {
          animation: fadeIn 1.2s ease-out 0.9s forwards;
          opacity: 0;
        }
        .animate-fade-in-up-delay-3 {
          animation: fadeIn 1.2s ease-out 1.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-up-delay-4 {
          animation: fadeIn 1.2s ease-out 1.5s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default About;
