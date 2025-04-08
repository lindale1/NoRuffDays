"use client";
import * as React from "react";

/**
 * Title splash component displaying a motivational message
 * about dressing up a bulldog for completed tasks
 */
function TitleSplash() {
  return (
    <section className="flex relative flex-col gap-8 items-center px-6 py-12 bg-slate-800 flex-[shrink] h-[300px] max-md:px-5 max-md:py-8 max-sm:px-4 max-sm:py-6">
      <div className="flex relative flex-col gap-2 items-center">
        <h1 className="relative text-7xl font-bold tracking-tighter text-center leading-[86.4px] text-neutral-200 max-md:text-6xl max-sm:text-4xl">
          No Ruff Days
        </h1>
        <p className="relative text-3xl leading-10 text-center text-blue-300 max-md:text-3xl max-sm:text-2xl">
          Dress up the bulldog for every task you finish!
        </p>
      </div>
    </section>
  );
}

export default TitleSplash;