import Link from 'next/link';

// Description component for bottom text and Sign up button
const Description = () => {
  return (
    <section className="w-full bg-slate-800 px-6 py-12">
      <div className="max-w-4xl mx-auto flex flex-col items-start gap-4">
      <div className="flex flex-col items-start gap-4">
        <Link
          href="/signup"
          className="px-6 py-3 text-white text-xl font-semibold hover:brightness-110 transition rounded"
            style={{ backgroundColor: '#8fbfda' }}
        >
          Sign up
        </Link>

        <p className="text-lg" style={{ color: '#8fbfda' }}>
          No Ruff Days is a simple, clean to-do list built for UGA students. Stay organized and manage tasks in one place.
        </p>
      </div>
      </div>
    </section>
  );
};

export default Description;