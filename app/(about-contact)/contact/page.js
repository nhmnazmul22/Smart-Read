const Contact = () => {
  return (
    <div className="col-span-12 lg:col-span-9 bg-white shadow-lg rounded-lg p-10 h-fit">
      <h3 className="text-left text-4xl">Contact us</h3>
      <div className="input-container mt-5">
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
          <input
            type="text"
            placeholder="Name"
            className="border border-slate-300 outline-none px-2 py-1 w-full sm:w-[49%] rounded"
          />
          <input
            type="email"
            placeholder="Email *"
            className="border border-slate-300 outline-none px-2 py-1 w-full sm:w-[49%] rounded"
          />
        </div>
        <textarea
          placeholder="Message *"
          className="w-full border border-slate-300 outline-none px-2 py-1 rounded mt-3 h-[200px]"
        ></textarea>
        <button className="bg-[#5e17eb] p-2 w-full text-white hover:opacity-90 duration-150 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
