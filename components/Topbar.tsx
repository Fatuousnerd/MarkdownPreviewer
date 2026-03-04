import React from "react";

const Topbar = () => {
  return (
    <>
      <div className="w-full h-15 flex items-center justify-between px-5 fixed z-99 bg-background border-b border-border">
        <h1 className="font-bold text-2xl">Markdown Previewer</h1>
      </div>
    </>
  );
};

export default Topbar;
