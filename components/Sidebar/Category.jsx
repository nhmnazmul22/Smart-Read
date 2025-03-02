import { IoIosArrowForward } from "react-icons/io";

const Category = ({ category }) => {
  return (
    <div className="flex justify-between items-center border-b-[1px] border-slate-200 last:border-0 pb-1 group cursor-pointer">
      <p className="flex gap-1 items-center">
        <IoIosArrowForward size={10} />
        <span className="text-[12px] group-hover:text-[#5e17eb] duration-200">
          {category.title}
        </span>
      </p>
      <p className="text-[12px] group-hover:text-[#5e17eb] duration-200">{`(${category.post})`}</p>
    </div>
  );
};

export default Category;
