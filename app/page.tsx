import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Integry Yönetim Sistemi</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/dashboard">
            <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
              <p className="text-gray-600">Genel Bakış</p>
            </div>
          </Link>
          <Link href="/user-management">
            <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Kullanıcı Yönetimi</h2>
              <p className="text-gray-600">Kullanıcı Ekle, Düzenle</p>
            </div>
          </Link>
          <Link href="/integration-management">
            <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Entegrasyon Yönetimi</h2>
              <p className="text-gray-600">API Entegrasyonları</p>
            </div>
          </Link>
          <Link href="/product-management">
            <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Ürün Yönetimi</h2>
              <p className="text-gray-600">Ürün Ekle, Düzenle</p>
            </div>
          </Link>
          <Link href="/order-management">
            <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Sipariş Yönetimi</h2>
              <p className="text-gray-600">Siparişlerinizi Yönetin</p>
            </div>
          </Link>
          <Link href="/procurement-management">
            <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Tedarik Yönetimi</h2>
              <p className="text-gray-600">Tedarik Süreçleri</p>
            </div>
          </Link>
          <Link href="/warehouse-management">
            <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Depo Yönetimi</h2>
              <p className="text-gray-600">Depo Koordinasyonu</p>
            </div>
          </Link>
          <Link href="/settings">
            <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Ayarlar</h2>
              <p className="text-gray-600">Sistem Ayarları</p>
            </div>
          </Link>
          <Link href="/brand-management">
            <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Marka Yönetimi</h2>
              <p className="text-gray-600">Marka Ekle, Düzenle</p>
            </div>
          </Link>
          <Link href="/category-management">
            <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Kategori Yönetimi</h2>
              <p className="text-gray-600">Kategori Ekle, Düzenle</p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
