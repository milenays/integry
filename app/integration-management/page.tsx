"use client"; // En üst satıra ekleyin

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IntegrationManagement = () => {
  const [integrations, setIntegrations] = useState([]);
  const [platform, setPlatform] = useState('');
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    fetchIntegrations();
  }, []);

  const fetchIntegrations = async () => {
    const response = await axios.get('/api/integrations');
    setIntegrations(response.data.data);
  };

  const addIntegration = async () => {
    const response = await axios.post('/api/integrations', { platform, apiKey });
    setIntegrations([...integrations, response.data.data]);
    setPlatform('');
    setApiKey('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold my-4">Entegrasyon Yönetimi</h1>
      <div className="mb-4">
        <input
          className="border p-2 m-2"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          placeholder="Platform Adı"
        />
        <input
          className="border p-2 m-2"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="API Anahtarı"
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={addIntegration}>
          Entegrasyon Ekle
        </button>
      </div>
      <table className="table-auto bg-white shadow-md rounded w-1/2">
        <thead>
          <tr>
            <th className="px-4 py-2">Platform</th>
            <th className="px-4 py-2">API Anahtarı</th>
          </tr>
        </thead>
        <tbody>
          {integrations.map((integration, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{integration.platform}</td>
              <td className="border px-4 py-2">{integration.apiKey}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IntegrationManagement;