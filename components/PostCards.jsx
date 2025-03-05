import PostCard from "./PostCard";

const PostCards = () => {
  return (
    <div className="grid grid-cols-12 mt-10 md:gap-8">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default PostCards;
