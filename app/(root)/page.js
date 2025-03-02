import PostSlider from "@/components/PostSlider";
import "../style.css";

export default function Home() {
  return (
    <div className="col-span-12 lg:col-span-9 bg-slate-400 ">
      <PostSlider />
    </div>
  );
}
