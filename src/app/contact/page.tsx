import React from "react";
import AuthHeader from '../../components/AuthHeader';

const ContactPage = () => {
  return (
    <div>
      <AuthHeader />
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
            <p className="text-sm text-center">45 Baxter St, <br /> Athens, GA 30602</p>
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
            <button>❌</button>
            <button>📷</button>
            <button>📘</button>
            <button>💼</button>
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
                    name="name"
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="email" className="text-sm">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="border border-gray-300 rounded px-3 py-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="self-end bg-[#1f3b50] text-white px-6 py-2 rounded hover:bg-[#163144]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
