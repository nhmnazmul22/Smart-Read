import Navbar from "@/components/Admin/Navbar";
import Sidebar from "@/components/Admin/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="flex justify-start items-start relative">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
