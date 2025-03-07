import AdsBar from "@/components/AdsBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 min-h-screen py-10">
        <AdsBar />
        <section className="container grid grid-cols-12 gap-5 py-10 relative">
          {children}
          <Sidebar />
        </section>
        <AdsBar />
      </main>
      <Footer />
    </>
  );
};

export default layout;
