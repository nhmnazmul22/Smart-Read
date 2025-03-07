import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";

const Page = async ({ params }) => {
  const { category } = await params;
  console.log(category);

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

export default Page;
