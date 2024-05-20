import React from 'react';

const Dashboard = () => {
  // Örnek verileri kullanabilirsiniz
  const dailySales = "₺10,000";
  const orderCount = 35;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold my-4">Dashboard</h1>
      <div className="flex flex-wrap justify-around w-full">
        <div className="bg-white shadow-md rounded p-4 m-4 w-1/4">
          <h2 className="text-xl font-semibold">Günlük Satış Cirosu</h2>
          <p className="text-gray-600">{dailySales}</p>
        </div>
        <div className="bg-white shadow-md rounded p-4 m-4 w-1/4">
          <h2 className="text-xl font-semibold">Sipariş Adeti</h2>
          <p className="text-gray-600">{orderCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;