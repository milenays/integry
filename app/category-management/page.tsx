import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await axios.get('/api/categories');
    setCategories(response.data.data);
  };

  const addCategory = async () => {
    await axios.post('/api/categories', { name });
    setName('');
    fetchCategories();
  };

  return (
    <div>
      <h1>Category Management</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category Name"
      />
      <button onClick={addCategory}>Add Category</button>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
