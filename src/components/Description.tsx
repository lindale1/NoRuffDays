import Link from 'next/link';

// Description component for bottom text and Sign up button
const Description = () => {
    return(
        <div className="mt-16 flex justify-center">
         <Link
                 href="/signup"
                 className="inline-block px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition rounded"
          >
                 Sign up
        </Link>
        </div>
    )};
export default Description;