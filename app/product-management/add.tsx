import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddProduct() {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: '',
    brand: '',
    category: '',
    price: 0,
    description: '',
    desi: 0,
    stock: 0,
    fakeStock: 0,
    criticalStock: 0,
    marketPrice: 0,
    purchasePrice: 0,
    images: [],
    shelfCode: '',
    areaCode: '',
    channelPrices: {},
    integrations: {},
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/products', form);
    // Ürün ekleme sonrası işlemler...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Product Name"
      />
      <select name="brand" value={form.brand} onChange={handleChange}>
        {brands.map((brand) => (
          <option key={brand._id} value={brand.name}>
            {brand.name}
          </option>
        ))}
      </select>
      <select name="category" value={form.category} onChange={handleChange}>
        {categories.map((category) => (
          <option key={category._id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Product Price"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Product Description"
      />
      <input
        type="number"
        name="desi"
        value={form.desi}
        onChange={handleChange}
        placeholder="Product Desi"
      />
      <input
        type="number"
        name="stock"
        value={form.stock}
        onChange={handleChange}
        placeholder="Product Stock"
      />
      <input
        type="number"
        name="fakeStock"
        value={form.fakeStock}
        onChange={handleChange}
        placeholder="Fake Stock"
      />
      <input
        type="number"
        name="criticalStock"
        value={form.criticalStock}
        onChange={handleChange}
        placeholder="Critical Stock"
      />
      <input
        type="number"
        name="marketPrice"
        value={form.marketPrice}
        onChange={handleChange}
        placeholder="Market Price"
      />
      <input
        type="number"
        name="purchasePrice"
        value={form.purchasePrice}
        onChange={handleChange}
        placeholder="Purchase Price"
      />
      <input
        type="text"
        name="shelfCode"
        value={form.shelfCode}
        onChange={handleChange}
        placeholder="Shelf Code"
      />
      <input
        type="text"
        name="areaCode"
        value={form.areaCode}
        onChange={handleChange}
        placeholder="Area Code"
      />
      {/* Görseller ve Entegrasyonlar için ek alanlar */}
      <button type="submit">Add Product</button>
    </form>
  );
}
