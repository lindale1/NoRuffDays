"use client";
import * as React from "react";

function WelcomeUser (){
    return (
        <section
        style= {{ backgroundColor: '#8FBFDA' }}
        className="flex flex-col justify-center items-center px-6 py-40 leading-tight text-center whitespace-nowrap max-md:px-5 max-md:py-24">
          <div className="max-w-full w-[316px]">
            <h1 className="text-7xl font-bold tracking-tighter text-stone-900 max-md:text-4xl">
              Welcome
            </h1>
            <p className="mt-2 text-3xl text-neutral-500">
              (FETCH USERNAME)
            </p>
          </div>
          <TasksorJournal/>
        </section>
      );   
}
function TasksorJournal() {
    return (
        <>
        <div className="flex gap-3 items-center ml-6 max-sm:hidden">
          <button className="p-2 text-base font-bold rounded-lg border border-solid bg-white bg-opacity-90 text-stone-900">Tasks</button>
          <button className="p-2 text-base font-bold text-white rounded-lg border border-solid bg-stone-900 border-stone-900">Journal</button>
        </div>
        <button
            className="hidden absolute right-4 max-sm:block"
            aria-label="Menu"
          >
            <i className="ti ti-menu-2 text-2xl text-white" />
          </button>
        </>
      );
  }
export default WelcomeUser;