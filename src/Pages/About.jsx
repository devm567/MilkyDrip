import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-white font-sans leading-relaxed">
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center text-center bg-black overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out transform hover:scale-105" style={{ backgroundImage: "url('https://images.pexels.com/photos/10398675/pexels-photo-10398675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}></div>
          <div className="relative z-10 p-6 sm:p-10 md:p-16 bg-black bg-opacity-60 rounded-lg shadow-xl m-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-wide">
              Our Journey
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-light">
              From a small dream to a global movement.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-gray-500 inline-block pb-2">
              The Milky Drip Difference
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl mb-8">
              Welcome to Milky Drip, where we believe clothing is more than just fabric—it's a canvas for self-expression. Our brand was born from a simple idea: to create high-quality, sustainable, and stylish apparel that inspires confidence and celebrates individuality. We're a small team with a big heart, dedicated to crafting pieces that feel as good as they look. Every stitch, every detail, is a testament to our commitment to excellence and our love for design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <img
                src="https://images.pexels.com/photos/5699476/pexels-photo-5699476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our Creative Process"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-xl font-semibold">Our Creative Process</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <img
                src="https://images.pexels.com/photos/7161839/pexels-photo-7161839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Sustainable Fabrics"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-xl font-semibold">Sustainable Fabrics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="bg-gray-900 px-4 py-16">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-300 text-base sm:text-lg mb-6">
                  Our mission is to empower individuals to express their unique identity through fashion that is both beautiful and responsible. We are committed to a design process that prioritizes ethical sourcing, sustainable practices, and a minimal environmental footprint. We believe in creating clothes that not only look good but also do good, fostering a community that values conscious consumerism and creativity.
                </p>
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Our Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-300 text-base sm:text-lg">
                  We envision a future where fashion is synonymous with sustainability and authenticity. Our goal is to become a leading voice in the conscious fashion movement, inspiring other brands and consumers to make more mindful choices. We strive to build a community around shared values, where our customers feel a connection to the products they wear and the story behind them. We will continue to innovate, pushing the boundaries of what is possible in design and production, all while staying true to our core principles.
                </p>
                <div className="relative w-full h-64 mt-6 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/10398687/pexels-photo-10398687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Our Vision"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Behind the Scenes Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-gray-500 inline-block pb-2">
              Behind the Seams
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-8">
              Every garment at Milky Drip is a result of meticulous design and ethical production. We partner with local artisans and sustainable manufacturers to ensure that every step of our process, from initial sketch to final product, is handled with care and respect for people and the planet. We believe in full transparency and are proud to share our journey with you. Our fabrics are sourced from eco-friendly suppliers, and we continuously seek new ways to reduce waste and conserve resources.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="relative group rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
              <img src="https://images.pexels.com/photos/5926388/pexels-photo-5926388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Design Studio" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-lg font-semibold">The Design Studio</p>
              </div>
            </div>
            <div className="relative group rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
              <img src="https://images.pexels.com/photos/4100650/pexels-photo-4100650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Ethical Production" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-lg font-semibold">Ethical Production</p>
              </div>
            </div>
            <div className="relative group rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
              <img src="https://images.pexels.com/photos/8137278/pexels-photo-8137278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Quality Control" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-lg font-semibold">Quality Control</p>
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
              href="#"
              className="inline-block bg-black text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:bg-gray-800"
            >
              Shop Our Collection
            </a>
          </div>
        </section>
      </main>
      
      {/* CSS for animations */}
      <style jsx>{`
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

export default About;
