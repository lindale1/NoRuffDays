'use client';
import Image from 'next/image';
import dog from '../app/assets/dog.png';

// Welcome component contains title, small description, and image
const Welcome = () => { 
    
    return (
    // Adding from Title Splash
    <section className="flex relative flex-col gap-8 items-center px-6 py-12 bg-slate-800 h-auto pb-16">
    <div className="flex relative flex-col gap-2 items-center">
      <h1 className="relative text-7xl font-bold tracking-tighter text-center leading-[86.4px] text-neutral-200 max-md:text-6xl max-sm:text-4xl">
        No Ruff Days
      </h1>
      <p className="relative text-3xl leading-10 text-center text-blue-300 max-md:text-3xl max-sm:text-2xl">
        Dress up the bulldog for every task you finish!
      </p>
    </div>
    <div className="flex justify-center items-center">
      <Image 
        src={dog}
        width={313}
        height={339}
        alt="UGA dog"
      />
    </div>
  </section>
    )};
export default Welcome;