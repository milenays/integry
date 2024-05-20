"use client"; // En üst satıra ekleyin

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Settings = () => {
  const [settings, setSettings] = useState([]);
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    const response = await axios.get('/api/settings');
    setSettings(response.data.data);
  };

  const addOrUpdateSetting = async () => {
    const response = await axios.put('/api/settings', { key, value });
    fetchSettings();
    setKey('');
    setValue('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold my-4">Ayarlar Yönetimi</h1>
      <div className="mb-4">
        <input
          className="border p-2 m-2"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Ayar Anahtarı"
        />
        <input
          className="border p-2 m-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ayar Değeri"
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={addOrUpdateSetting}>
          Ayar Ekle/Güncelle
        </button>
      </div>
      <table className="table-auto bg-white shadow-md rounded w-1/2">
        <thead>
          <tr>
            <th className="px-4 py-2">Anahtar</th>
            <th className="px-4 py-2">Değer</th>
          </tr>
        </thead>
        <tbody>
          {settings.map((setting, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{setting.key}</td>
              <td className="border px-4 py-2">{setting.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Settings;