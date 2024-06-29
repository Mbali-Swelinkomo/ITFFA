import React from "react";

type Props = {
  children?: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
        <div className="min-h-screen">
        {children}
        </div>
    </>
  );
};
export default Layout;