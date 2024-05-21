"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  const fetchProducts = async () => {
    const response = await axios.get('/api/products');
    setProducts(response.data.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (newProduct) => {
    await axios.post('/api/products', newProduct);
    fetchProducts();
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
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: '',
    stockCode: '',
    barcode: '',
    category: '',
    brand: '',
    description: '',
    desi: '',
    stock: '',
    fakeStock: '',
    criticalStock: '',
    marketPrice: '',
    purchasePrice: '',
    shelfCode: '',
    areaCode: '',
  });

  useEffect(() => {
    fetchBrands();
    fetchCategories();
  }, []);

  const fetchBrands = async () => {
    const response = await axios.get('/api/brands');
    setBrands(response.data.data);
  };

  const fetchCategories = async () => {
    const response = await axios.get('/api/categories');
    setCategories(response.data.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Adı (0/100):</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          maxLength={150}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Stok Kodu:</label>
        <input
          type="text"
          name="stockCode"
          value={form.stockCode}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Barkodu:</label>
        <input
          type="text"
          name="barcode"
          value={form.barcode}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Kategorisi:</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        >
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Markası:</label>
        <select
          name="brand"
          value={form.brand}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        >
          {brands.map((brand) => (
            <option key={brand._id} value={brand.name}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Açıklaması:</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Desisi:</label>
        <input
          type="text"
          name="desi"
          value={form.desi}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Stok Adeti:</label>
        <input
          type="text"
          name="stock"
          value={form.stock}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Fake Stok Adeti:</label>
        <input
          type="text"
          name="fakeStock"
          value={form.fakeStock}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Kritik Stok Adeti:</label>
        <input
          type="text"
          name="criticalStock"
          value={form.criticalStock}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Piyasa Satış Fiyatı:</label>
        <input
          type="text"
          name="marketPrice"
          value={form.marketPrice}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ürün Satış Fiyatı:</label>
        <input
          type="text"
          name="purchasePrice"
          value={form.purchasePrice}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Depo Raf Kodu:</label>
        <input
          type="text"
          name="shelfCode"
          value={form.shelfCode}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Depo Alan Kodu:</label>
        <input
          type="text"
          name="areaCode"
          value={form.areaCode}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Ürünü Ekle</button>
    </form>
  );
};

export default ProductManagement;
