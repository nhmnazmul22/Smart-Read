import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";

const page = () => {
  return (
    <>
      <div className="p-5 rounded-xl col-span-12 lg:col-span-9 min-h-screen">
        <div className="grid grid-cols-12 gap-7">
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
