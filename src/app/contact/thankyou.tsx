import React from "react";
import AuthHeader from '../../components/AuthHeader';
import Footer from '../../components/Footer';

const ThankYou = () => {
  return (
    <div>
        <AuthHeader /> {/*imported*/}
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">

      <div className="bg-white p-8 rounded shadow-lg text-center">
        {/*thank you message*/}
        <h1 className="text-3xl font-bold text-[#1f3b50] mb-4">Thank You!</h1>
        
        
        
      </div>
    </div>
    <Footer /> {/*imported*/}
    </div>
  );
};

export default ThankYou;
