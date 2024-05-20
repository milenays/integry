"use client"; // En üst satıra ekleyin

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WarehouseManagement = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');

  useEffect(() => {
    fetchWarehouses();
  }, []);

  const fetchWarehouses = async () => {
    const response = await axios.get('/api/warehouses');
    setWarehouses(response.data.data);
  };

  const addWarehouse = async () => {
    const response = await axios.post('/api/warehouses', { location, capacity });
    setWarehouses([...warehouses, response.data.data]);
    setLocation('');
    setCapacity('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold my-4">Depo Yönetimi</h1>
      <div className="mb-4">
        <input
          className="border p-2 m-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Depo Lokasyonu"
        />
        <input
          className="border p-2 m-2"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          placeholder="Kapasite"
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={addWarehouse}>
          Depo Ekle
        </button>
      </div>
      <table className="table-auto bg-white shadow-md rounded w-1/2">
        <thead>
          <tr>
            <th className="px-4 py-2">Lokasyon</th>
            <th className="px-4 py-2">Kapasite</th>
          </tr>
        </thead>
        <tbody>
          {warehouses.map((warehouse, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{warehouse.location}</td>
              <td className="border px-4 py-2">{warehouse.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WarehouseManagement;