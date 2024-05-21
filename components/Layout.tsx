import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default Layout;