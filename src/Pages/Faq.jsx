import React, { useState } from 'react';

// FaqItem component for a single FAQ question and answer
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-gray-700 py-6">
      <button
        className="flex justify-between items-center w-full text-left transition-colors duration-300 hover:text-gray-400 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold text-white">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-300 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// Main Faq component
const Faq = () => {
  const faqs = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "What is the expected shipping time?",
          answer: "Our standard shipping typically takes 5-7 business days within the United States. For international orders, shipping times can vary significantly based on the destination and local customs processes. We aim to process all orders within 1-2 business days from the time of purchase. You'll receive a confirmation email with a tracking number once your order has been dispatched. Please note that during peak seasons or holidays, shipping may be delayed due to high demand. We appreciate your patience and understanding as we work to get your Milky Drip apparel to you as quickly as possible. We use reliable carriers to ensure your package arrives safely."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order has shipped, you will receive an email containing a tracking number and a link to the carrier's website. You can use this number to monitor the status and location of your package. The tracking information may take up to 24 hours to update after the package has been picked up by the carrier. If you encounter any issues with tracking or have not received your tracking number within three business days, please contact our customer support team at support@milkydrip.com with your order number, and we will be happy to assist you. We want to make sure you know exactly where your order is at all times."
        },
        {
          question: "Do you offer international shipping?",
          answer: "Yes, we are proud to offer international shipping to a wide range of countries. Please note that international customers are responsible for any customs duties, taxes, or fees that may be incurred upon delivery. The shipping costs will be calculated at checkout based on your location and the weight of your order. Shipping times for international orders can range from 2 to 4 weeks depending on the destination and local customs. We recommend checking with your local customs office for more information on potential fees before placing your order to avoid any surprises."
        },
        {
          question: "What should I do if my package is lost or damaged?",
          answer: "If your package is lost in transit or arrives damaged, please contact us immediately at support@milkydrip.com. Provide your order number and a brief description of the issue. For damaged items, please include photographs of the packaging and the damaged goods so we can file a claim with the shipping carrier. We will work with you to find a solution, which may include a replacement of the item or a refund, depending on the circumstances. Our top priority is ensuring you receive your order in perfect condition."
        }
      ]
    },
    {
      category: "Products & Sizing",
      questions: [
        {
          question: "How do I find my size?",
          answer: "We provide a detailed sizing chart on each product page to help you find the perfect fit. We recommend measuring yourself and comparing your measurements to our chart. The measurements are provided in both inches and centimeters. Keep in mind that our clothes are designed with a variety of fits, from slim to oversized, and this will be specified in the product description. If you are between sizes, we generally suggest sizing up for a more relaxed fit or down for a more tailored look. If you need personalized assistance, our team is available to help you find your ideal size."
        },
        {
          question: "What materials are your clothes made from?",
          answer: "At Milky Drip, we are committed to sustainability. Our garments are crafted from a variety of high-quality, eco-friendly materials, including organic cotton, recycled polyester, and Tencel™ Lyocell. We meticulously select our fabrics for their comfort, durability, and minimal environmental impact. Each product page lists the specific material composition, so you can make an informed choice. We believe in transparency and want our customers to feel good about what they are wearing, knowing it was made with care for both people and the planet."
        },
        {
          question: "How should I care for my garments?",
          answer: "To ensure your Milky Drip apparel lasts as long as possible, we recommend following the care instructions on the inside tag of each garment. Generally, we advise washing items in cold water with like colors and a gentle detergent. To prevent shrinkage and preserve the integrity of the fabric, it's best to air dry or tumble dry on low heat. Avoid using bleach or harsh chemicals. Proper care will help maintain the color, shape, and softness of your clothes, ensuring they remain a favorite in your wardrobe for years to come."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We want you to be completely satisfied with your purchase. If for any reason you are not, we accept returns on unworn, unwashed items with all original tags attached within 30 days of the delivery date. The returned items must be in their original condition. Once we receive and inspect the returned goods, we will process a refund to your original form of payment. Please note that sale items and gift cards are final sale and cannot be returned. Our goal is to make the return process as straightforward as possible for you."
        },
        {
          question: "How do I start a return or exchange?",
          answer: "To initiate a return or exchange, please visit our Returns Portal on our website and follow the simple steps. You will need your order number and the email address used for the purchase. If you are unable to use the portal, you can contact us at returns@milkydrip.com with your order number and a list of the items you wish to return or exchange. Our team will provide you with a return authorization number and detailed instructions on how to send your items back to us. We will guide you through every step to ensure a smooth transaction."
        },
        {
          question: "Do I have to pay for return shipping?",
          answer: "We offer free returns for all orders within the United States. For international returns, the customer is responsible for return shipping costs. We recommend using a trackable shipping service for returns to ensure the package arrives safely. We are not responsible for lost or damaged returns. For international exchanges, please contact our support team to discuss the best way to handle the process. We strive to make the return and exchange process fair and transparent for all of our customers."
        }
      ]
    },
  ];

  return (
    <div className="bg-black text-white font-sans leading-relaxed">
      <main>
        {/* Hero Section */}
        <section className="relative h-64 flex items-center justify-center text-center bg-black overflow-hidden">
          <div className="relative z-10 p-6 sm:p-10 md:p-16 bg-black bg-opacity-60 rounded-lg shadow-xl m-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-wide">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-light">
              Find answers to your most pressing questions about our products, orders, and more.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-gray-500 inline-block pb-2">
              Your Questions, Answered
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl mb-8">
              We've compiled a comprehensive list of questions our customers frequently ask. If you don't find what you're looking for here, please don't hesitate to contact our dedicated support team.
            </p>
          </div>

          <div className="mt-12 space-y-16">
            {faqs.map((faqCategory, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="lg:w-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
                    {faqCategory.category}
                  </h3>
                  {faqCategory.questions.map((item, qIndex) => (
                    <FaqItem key={qIndex} question={item.question} answer={item.answer} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-white text-black px-4 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg sm:text-xl font-light mb-8 max-w-2xl mx-auto">
              Our team is ready to help! Reach out to us directly for a personalized response to your query.
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

export default Faq;
