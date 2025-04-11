import Link from 'next/link';

// Description component for bottom text and Sign up button
const Description = () => {
  return (
    <div className="mt-6 px-6 bg-slate-800 max-w-3xl">
      <div className="flex flex-col items-start gap-4">
        <Link
          href="/signup"
          className="px-6 py-3 text-white text-xl font-semibold hover:brightness-110 transition rounded"
            style={{ backgroundColor: '#8fbfda' }}
        >
          Sign up
        </Link>

        <p className="text-lg" style={{ color: '#8fbfda' }}>
          A daily task checker to keep you motivated while also having the bulldog walk the runway.
        </p>
      </div>
    </div>
  );
};

export default Description;