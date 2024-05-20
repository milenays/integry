"use client"; // En üst satıra ekleyin

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('/api/products');
    setProducts(response.data.data);
  };

  const addProduct = async () => {
    const response = await axios.post('/api/products', { name, category, price });
    setProducts([...products, response.data.data]);
    setName('');
    setCategory('');
    setPrice('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold my-4">Ürün Yönetimi</h1>
      <div className="mb-4">
        <input
          className="border p-2 m-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ürün Adı"
        />
        <input
          className="border p-2 m-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Kategori"
        />
        <input
          className="border p-2 m-2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Fiyat"
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={addProduct}>
          Ürün Ekle
        </button>
      </div>
      <table className="table-auto bg-white shadow-md rounded w-1/2">
        <thead>
          <tr>
            <th className="px-4 py-2">Ad</th>
            <th className="px-4 py-2">Kategori</th>
            <th className="px-4 py-2">Fiyat</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;