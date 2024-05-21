import { useState, useEffect } from 'react';
import axios from 'axios';

export default function BrandManagement() {
  const [brands, setBrands] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    const response = await axios.get('/api/brands');
    setBrands(response.data.data);
  };

  const addBrand = async () => {
    await axios.post('/api/brands', { name });
    setName('');
    fetchBrands();
  };

  return (
    <div>
      <h1>Brand Management</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Brand Name"
      />
      <button onClick={addBrand}>Add Brand</button>
      <ul>
        {brands.map((brand) => (
          <li key={brand._id}>{brand.name}</li>
        ))}
      </ul>
    </div>
  );
}
