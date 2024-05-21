"use client";

import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white text-gray-800 shadow-md rounded p-4">
          <h2 className="text-xl font-semibold">Günlük Satış Cirosu</h2>
          <p className="text-gray-600">₺10,000</p>
        </div>
        <div className="bg-white text-gray-800 shadow-md rounded p-4">
          <h2 className="text-xl font-semibold">Sipariş Adeti</h2>
          <p className="text-gray-600">35</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;