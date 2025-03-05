import PostList from "./PostList";

const PostLists = () => {
  return (
    <>
      <div className="grid grid-cols-12 mt-10 md:gap-8">
        <PostList />
        <PostList />
        <PostList />
        <PostList />
      </div>
    </>
  );
};

export default PostLists;
