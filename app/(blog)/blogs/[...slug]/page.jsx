import Blog from "@/components/Blog";
import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";

const Page = async ({ params, searchParams }) => {
  const { slug } = await params;
  const { searchBlog } = await searchParams;
  console.log(slug);
  console.log(searchBlog);

  if (slug?.length === 2) {
    return <Blog />;
  } else if (slug?.length === 1) {
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
  }
};

export default Page;
