import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Integry Yönetim Sistemi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/dashboard" passHref legacyBehavior>
          <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer text-gray-800">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p className="text-gray-600">Genel Bakış</p>
          </a>
        </Link>
        <Link href="/user-management" passHref legacyBehavior>
          <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer text-gray-800">
            <h2 className="text-2xl font-bold">Kullanıcı Yönetimi</h2>
            <p className="text-gray-600">Kullanıcı Ekle, Düzenle</p>
          </a>
        </Link>
        <Link href="/integration-management" passHref legacyBehavior>
          <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer text-gray-800">
            <h2 className="text-2xl font-bold">Entegrasyon Yönetimi</h2>
            <p className="text-gray-600">API Entegrasyonları</p>
          </a>
        </Link>
        <Link href="/product-management" passHref legacyBehavior>
          <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer text-gray-800">
            <h2 className="text-2xl font-bold">Ürün Yönetimi</h2>
            <p className="text-gray-600">Ürün Ekle, Düzenle</p>
          </a>
        </Link>
        <Link href="/order-management" passHref legacyBehavior>
          <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer text-gray-800">
            <h2 className="text-2xl font-bold">Sipariş Yönetimi</h2>
            <p className="text-gray-600">Siparişlerinizi Yönetin</p>
          </a>
        </Link>
        <Link href="/procurement-management" passHref legacyBehavior>
          <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer text-gray-800">
            <h2 className="text-2xl font-bold">Tedarik Yönetimi</h2>
            <p className="text-gray-600">Tedarik Süreçleri</p>
          </a>
        </Link>
        <Link href="/warehouse-management" passHref legacyBehavior>
          <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer text-gray-800">
            <h2 className="text-2xl font-bold">Depo Yönetimi</h2>
            <p className="text-gray-600">Depo Koordinasyonu</p>
          </a>
        </Link>
        <Link href="/settings" passHref legacyBehavior>
          <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer text-gray-800">
            <h2 className="text-2xl font-bold">Ayarlar</h2>
            <p className="text-gray-600">Sistem Ayarları</p>
          </a>
        </Link>
        <Link href="/brand-management" passHref legacyBehavior>
          <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer text-gray-800">
            <h2 className="text-2xl font-bold">Marka Yönetimi</h2>
            <p className="text-gray-600">Marka Ekle, Düzenle</p>
          </a>
        </Link>
        <Link href="/category-management" passHref legacyBehavior>
          <a className="block bg-white shadow-md hover:shadow-lg transition-shadow rounded p-6 cursor-pointer text-gray-800">
            <h2 className="text-2xl font-bold">Kategori Yönetimi</h2>
            <p className="text-gray-600">Kategori Ekle, Düzenle</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
