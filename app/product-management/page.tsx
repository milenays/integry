"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { name: "asdf", category: "asdf", price: 123 },
    { name: "kj", category: "kj", price: 78 },
  ]);
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowAddProductForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Ürün Yönetimi</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded mb-4"
        onClick={() => setShowAddProductForm(!showAddProductForm)}
      >
        Ürün Ekle
      </button>
      {showAddProductForm && <AddProductForm onAddProduct={handleAddProduct} />}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Ad</th>
            <th className="py-2 px-4 border-b">Kategori</th>
            <th className="py-2 px-4 border-b">Fiyat</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [stockCode, setStockCode] = useState('');
  const [barcode, setBarcode] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [desi, setDesi] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [fakeStockQuantity, setFakeStockQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      category,
      price: stockQuantity,
    };
    onAddProduct(newProduct);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Adı (0/100):</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          maxLength={150}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Stok Kodu:</label>
        <input
          type="text"
          value={stockCode}
          onChange={(e) => setStockCode(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Barkodu:</label>
        <input
          type="text"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Kategorisi:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        >
          {/*Kategoriler buraya çekilecek ve gösterilecek*/}
          <option value="category1">Kategori 1</option>
          <option value="category2">Kategori 2</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Markası:</label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        >
          {/*Markalar buraya çekilecek ve gösterilecek*/}
          <option value="brand1">Marka 1</option>
          <option value="brand2">Marka 2</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Açıklaması:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Desisi:</label>
        <input
          type="text"
          value={desi}
          onChange={(e) => setDesi(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Stok Adeti:</label>
        <input
          type="text"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Fake Stok Adeti:</label>
        <input
          type="text"
          value={fakeStockQuantity}
          onChange={(e) => setFakeStockQuantity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Ürünü Ekle</button>
    </form>
  );
};

export default ProductManagement;