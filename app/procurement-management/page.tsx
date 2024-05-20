"use client"; // En üst satıra ekleyin

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProcurementManagement = () => {
  const [procurements, setProcurements] = useState([]);
  const [supplierName, setSupplierName] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    fetchProcurements();
  }, []);

  const fetchProcurements = async () => {
    const response = await axios.get('/api/procurements');
    setProcurements(response.data.data);
  };

  const addProcurement = async () => {
    const response = await axios.post('/api/procurements', { supplierName, productName, quantity });
    setProcurements([...procurements, response.data.data]);
    setSupplierName('');
    setProductName('');
    setQuantity('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold my-4">Tedarik Yönetimi</h1>
      <div className="mb-4">
        <input
          className="border p-2 m-2"
          value={supplierName}
          onChange={(e) => setSupplierName(e.target.value)}
          placeholder="Tedarikçi Adı"
        />
        <input
          className="border p-2 m-2"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Ürün Adı"
        />
        <input
          className="border p-2 m-2"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Miktar"
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={addProcurement}>
          Tedarik Ekle
        </button>
      </div>
      <table className="table-auto bg-white shadow-md rounded w-1/2">
        <thead>
          <tr>
            <th className="px-4 py-2">Tedarikçi</th>
            <th className="px-4 py-2">Ürün</th>
            <th className="px-4 py-2">Miktar</th>
          </tr>
        </thead>
        <tbody>
          {procurements.map((procurement, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{procurement.supplierName}</td>
              <td className="border px-4 py-2">{procurement.productName}</td>
              <td className="border px-4 py-2">{procurement.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProcurementManagement;