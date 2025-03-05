import AdsBar from "@/components/AdsBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 min-h-screen py-10">
        <AdsBar />
        <section className="container grid grid-cols-12 gap-5 py-10 relative">
          {children}
        </section>
        <AdsBar />
      </main>
      <Footer />
    </>
  );
};

export default layout;
