import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="mx-auto my-12 max-w-[69.375rem] w-[90%]">{children}</div>
  );
};

export default Container;
