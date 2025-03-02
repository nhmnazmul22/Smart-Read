import Link from "next/link";

const Tags = ({ tag }) => {
  return (
    <Link
      href="/"
      className="bg-gray-100 p-2 rounded text-[12px] hover:bg-[#5e17eb] hover:text-white duration-200 border border-slate-200"
    >
      <span>{tag.title}</span>
    </Link>
  );
};

export default Tags;
