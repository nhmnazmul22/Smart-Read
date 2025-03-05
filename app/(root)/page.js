import PostCards from "@/components/PostCards";
import PostLists from "@/components/PostLists";
import PostSlider from "@/components/PostSlider";
import "../style.css";

export default function Home() {
  return (
    <div className="col-span-12 lg:col-span-9">
      <PostSlider />
      <PostCards />
      <div className="col-span-12 bg-[#eee] h-[80px] border border-slate-300 rounded flex justify-center items-center w-full mt-5">
        <p className="text-center text-slate-500">Responsive Ads Banner</p>
      </div>
      <PostLists />
    </div>
  );
}
