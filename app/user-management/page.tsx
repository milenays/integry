"use client"; // En üst satıra ekleyin

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('/api/users');
    setUsers(response.data.data);
  };

  const addUser = async () => {
    try {
      const response = await axios.post('/api/users', { name, role });
      setUsers([...users, response.data.data]);
      setName('');
      setRole('');
      toast.success('Kullanıcı başarıyla eklendi!');
    } catch (error) {
      toast.error('Kullanıcı eklenirken bir hata oluştu.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <ToastContainer />
      <h1 className="text-2xl font-bold my-4">Kullanıcı Yönetimi</h1>
      <div className="mb-4">
        <input
          className="border p-2 m-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Kullanıcı Adı"
        />
        <input
          className="border p-2 m-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Kullanıcı Rolü"
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={addUser}>
          Kullanıcı Ekle
        </button>
      </div>
      <table className="table-auto bg-white shadow-md rounded w-1/2">
        <thead>
          <tr>
            <th className="px-4 py-2">Ad</th>
            <th className="px-4 py-2">Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;