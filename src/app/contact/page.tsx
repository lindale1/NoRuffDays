// Page for contact client-route
'use client';

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from '../../components/Footer';

const ContactPage = () => {
  

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);


  {/*chnages what is inside text boxes based on what is typed in boxes when program run*/}
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageInput(e.target.value);
  };

  const handleClear = () => {
    setNameInput('');
    setEmailInput('');
    setMessageInput('');
    setShowThankYou(true);
   
  };

  return (
    <div>
      <Header />

      {/* GET IN TOUCH SECTION */}
      <section className="bg-[#1f3b50] text-white py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">GET IN TOUCH</h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">📧</div>
            <p className="font-semibold">Email:</p>
            <p className="text-sm">help@noruftdays.com</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">📍</div>
            <p className="font-semibold">Address:</p>
            <p className="text-sm text-center">
              45 Baxter St, <br /> Athens, GA 30602
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">📞</div>
            <p className="font-semibold">Phone:</p>
            <p className="text-sm">(706) 542-3816</p>
          </div>
        </div>
      </section>

      {/* MESSAGE US SECTION */}
      <section className="bg-gray-100 py-10 px-6">
        <div className="flex justify-between items-start max-w-5xl mx-auto gap-6 flex-col md:flex-row">
          {/* Social Icons */}
          <div className="text-2xl flex gap-4 mb-4 md:mb-0">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-[#1f3b50] mb-4">Message Us:</h3>
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label htmlFor="name" className="text-sm">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={nameInput}
                    onChange={handleNameChange}
                    required
                    className="border border-gray-300 rounded text-sm px-2 py-1"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="email" className="text-sm">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={emailInput}
                    onChange={handleEmailChange}
                    required
                    className="border border-gray-300 rounded text-sm px-2 py-1"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm">Message:</label>
                <textarea
                  id="message"
                  value={messageInput}
                  onChange={handleMessageChange}
                  rows={3}
                  required
                  className="border border-gray-300 rounded text-sm px-2 py-1"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <div className="flex justify-end items-center gap-4">
                {showThankYou && (
                 <div className="text-green-600 text-sm border border-green-300 bg-green-50 px-3 py-1 rounded shadow">
                   Thank you for your response!
                 </div>
               )}
               <button
                  type="button"
                 onClick={handleClear}
                 className="bg-[#1f3b50] text-white px-6 py-2 rounded hover:bg-[#163144]"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
