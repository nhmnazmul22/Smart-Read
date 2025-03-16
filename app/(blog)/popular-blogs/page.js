import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";

const page = () => {
  return (
    <>
      <div className="col-span-12 lg:col-span-9">
        <div className="grid grid-cols-12 gap-7">
          <div className="bg-white mt-3 p-5 h-[50px] col-span-12 shadow flex items-center">
            <p className="w-full">
              Search Result of{" "}
              <span className="text-[#5e17eb]">{`"Popular Blogs"`}</span>
            </p>
          </div>
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default page;
