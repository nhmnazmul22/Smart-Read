"use client";
import { useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchForm = () => {
  const inputRef = useRef();

  const handleSearchInput = () => {
    inputRef.current.classList.toggle("opacity-0");
  };

  return (
    <div className="flex items-center relative">
      <div
        ref={inputRef}
        className="absolute top-[60px] right-0 w-[300px] z-[99999] opacity-0 duration-300"
      >
        <input
          type="search"
          placeholder="Search now..."
          className="outline-none border border-slate-200 p-2 rounded-s shadow w-full"
        />
      </div>
      <button onClick={handleSearchInput}>
        <IoSearchSharp className="text-xl cursor-pointer" />
      </button>
    </div>
  );
};

export default SearchForm;
