import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the home page
    window.location.href = '/';
  };

  return (
    <div className="bg-black text-white font-sans leading-relaxed">
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center text-center bg-black overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out transform hover:scale-105" style={{ backgroundImage: "url('https://images.pexels.com/photos/10398687/pexels-photo-10398687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}></div>
          <div className="relative z-10 p-6 sm:p-10 md:p-16 bg-black bg-opacity-60 rounded-lg shadow-xl m-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-wide">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-light">
              We're here to help and answer your questions.
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-gray-500 inline-block pb-2">
              Reach Out to Us
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl mb-8">
              At Milky Drip, we are committed to providing you with the best possible experience. Whether you have a question about an order, a query about our sustainable practices, or an exciting collaboration idea, our team is ready to assist you. Below, you will find different ways to connect with us, ensuring your message gets to the right people. We value your feedback and look forward to hearing from you. Your input helps us grow and improve, so please don't hesitate to reach out. We aim to respond to all inquiries within 24-48 hours.
            </p>
          </div>
        </section>

        {/* Specific Contact Channels Section */}
        <section className="bg-gray-900 px-4 py-16">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Customer Support
                </h2>
                <p className="text-gray-300 text-base sm:text-lg mb-6">
                  Our dedicated support team is available to assist you with any issues or questions related to your purchases. From tracking your order to initiating a return, we're here to ensure a smooth and hassle-free experience. Before reaching out, please check our FAQ section on our website, as many common questions have already been answered there. If you don't find what you're looking for, please email us directly at **support@milkydrip.com**. We are committed to resolving your concerns promptly and efficiently.
                </p>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Collaborations & Press
                </h2>
                <p className="text-gray-300 text-base sm:text-lg">
                  Milky Drip is always excited to connect with like-minded individuals and brands who share our passion for fashion and sustainability. If you are an influencer, a designer, or a media professional interested in collaborating with us or featuring our brand, we would love to hear from you. Please send your proposals or press kits to **collab@milkydrip.com** or **press@milkydrip.com**. We are open to various forms of collaboration, including product reviews, interviews, and partnership opportunities. Our marketing team will review your message and get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6 border-b-2 border-gray-500 inline-block pb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-300 text-base sm:text-lg text-center mb-8">
              Fill out the form below with your details and your message, and we will get back to you as soon as we can. This is the fastest way to get in touch with our team.
            </p>
            <form className="bg-gray-900 p-8 rounded-lg shadow-xl space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-white" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea id="message" name="message" rows="6" className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-white"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-white text-black font-bold py-3 px-12 rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:bg-gray-200">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-white text-black px-4 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Visit Our Headquarters</h2>
            <p className="text-lg sm:text-xl font-light mb-8 max-w-2xl mx-auto">
              You are welcome to visit our physical location for a closer look at our collections.
            </p>
            {/* Image removed from here */}
            <p className="text-sm mt-4 text-gray-700">
              123 Drip Street, Fashion City, DR 45678
            </p>
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

export default Contact;