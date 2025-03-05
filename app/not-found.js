import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container">
      <div className="flex flex-col w-full justify-center items-center min-h-screen">
        <Image
          src="/no-results.png"
          width={1024}
          height={1024}
          alt="Not -found"
          className="max-w-[600px] max-h-[600px] object-contain"
        />
        <h3 className="text-3xl max-w-[500px] text-gray-500">Page not found</h3>
        <Link
          href="/"
          className="px-4 py-2 bg-[#5e17eb] text-white rounded-md mt-5 hover:opacity-90 duration-150"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
