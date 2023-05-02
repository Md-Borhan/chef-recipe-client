import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-160px)]">
      <p className="font-thin text-7xl text-slate-900">L</p>
      <div className="border-8 border-dashed border-[#FB834A] mt-3 w-10 h-10 rounded-full animate-spin"></div>
      <p className="font-thin text-7xl text-slate-900">ading</p>
      <p className="font-thin text-7xl text-[#FB834A]">...</p>
    </div>
  );
};

export default Loader;
