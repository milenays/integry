"use client"; // En üst satıra ekleyin

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [orderNumber, setOrderNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await axios.get('/api/orders');
    setOrders(response.data.data);
  };

  const addOrder = async () => {
    const response = await axios.post('/api/orders', { orderNumber, customerName, status });
    setOrders([...orders, response.data.data]);
    setOrderNumber('');
    setCustomerName('');
    setStatus('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold my-4">Sipariş Yönetimi</h1>
      <div className="mb-4">
        <input
          className="border p-2 m-2"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="Sipariş Numarası"
        />
        <input
          className="border p-2 m-2"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Müşteri Adı"
        />
        <input
          className="border p-2 m-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Durum"
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={addOrder}>
          Sipariş Ekle
        </button>
      </div>
      <table className="table-auto bg-white shadow-md rounded w-1/2">
        <thead>
          <tr>
            <th className="px-4 py-2">Sipariş Numarası</th>
            <th className="px-4 py-2">Müşteri Adı</th>
            <th className="px-4 py-2">Durum</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{order.orderNumber}</td>
              <td className="border px-4 py-2">{order.customerName}</td>
              <td className="border px-4 py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;