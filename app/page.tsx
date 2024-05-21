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
            <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
              <p className="text-gray-600">Genel Bakış</p>
            </a>
          </Link>
          <Link href="/user-management">
            <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Kullanıcı Yönetimi</h2>
              <p className="text-gray-600">Kullanıcı Ekle, Düzenle</p>
            </a>
          </Link>
          <Link href="/integration-management">
            <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Entegrasyon Yönetimi</h2>
              <p className="text-gray-600">API Entegrasyonları</p>
            </a>
          </Link>
          <Link href="/product-management">
            <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Ürün Yönetimi</h2>
              <p className="text-gray-600">Ürün Ekle, Düzenle</p>
            </a>
          </Link>
          <Link href="/order-management">
            <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Sipariş Yönetimi</h2>
              <p className="text-gray-600">Siparişlerinizi Yönetin</p>
            </a>
          </Link>
          <Link href="/procurement-management">
            <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Tedarik Yönetimi</h2>
              <p className="text-gray-600">Tedarik Süreçleri</p>
            </a>
          </Link>
          <Link href="/warehouse-management">
            <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Depo Yönetimi</h2>
              <p className="text-gray-600">Depo Koordinasyonu</p>
            </a>
          </Link>
          <Link href="/settings">
            <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Ayarlar</h2>
              <p className="text-gray-600">Sistem Ayarları</p>
            </a>
          </Link>
          <Link href="/brand-management">
            <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Marka Yönetimi</h2>
              <p className="text-gray-600">Marka Ekle, Düzenle</p>
            </a>
          </Link>
          <Link href="/category-management">
            <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer">
              <h2 className="text-2xl font-bold text-gray-800">Kategori Yönetimi</h2>
              <p className="text-gray-600">Kategori Ekle, Düzenle</p>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
