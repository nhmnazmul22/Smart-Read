const Header = () => {
  return (
    <div className="grid grid-cols-12 justify-between items-center gap-5">
      <div className="col-span-12 sm:col-span-6 xl:col-span-3 bg-white shadow-md rounded-xl  flex justify-between items-center p-5">
        <div className="">
          <p className="text-base text-gray-500 font-semibold">Total Users</p>
          <h3 className="text-4xl font-medium mt-3">5,069</h3>
        </div>
        <div>
          <img src="/user-icon.svg" alt="User Icon" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 xl:col-span-3 bg-white shadow-md rounded-xl  flex justify-between items-center p-5">
        <div className="">
          <p className="text-base text-gray-500 font-semibold">Total Views</p>
          <h3 className="text-4xl font-medium mt-3">50,069</h3>
        </div>
        <div>
          <img src="/growing-chart.svg" alt="User Icon" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 xl:col-span-3 bg-white shadow-md rounded-xl  flex justify-between items-center p-5">
        <div className="">
          <p className="text-base text-gray-500 font-semibold">Total Blogs</p>
          <h3 className="text-4xl font-medium mt-3">59</h3>
        </div>
        <div>
          <img src="/box-icon.svg" alt="User Icon" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 xl:col-span-3 bg-white shadow-md rounded-xl  flex justify-between items-center p-5">
        <div className="">
          <p className="text-base text-gray-500 font-semibold">Pending Blogs</p>
          <h3 className="text-4xl font-medium mt-3">13</h3>
        </div>
        <div>
          <img src="/pending-icon.svg" alt="User Icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
