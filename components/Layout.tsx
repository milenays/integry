import React from 'react';
import Link from 'next/link';
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  ClipboardCheckIcon,
  TagIcon,
  TruckIcon,
  ShoppingCartIcon,
  DatabaseIcon,
} from '@heroicons/react/outline';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-black text-white">
      <aside className="bg-gray-900 w-64 space-y-4 py-7 px-2 flex-shrink-0">
        <h1 className="text-2xl font-bold text-center mb-6">Integry Yönetim Sistemi</h1>
        <nav className="space-y-1">
          <Link href="/">
            <a className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700">
              <HomeIcon className="h-5 w-5" />
              <span>Ana Sayfa</span>
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700">
              <ClipboardCheckIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
          </Link>
          <Link href="/user-management">
            <a className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700">
              <UserIcon className="h-5 w-5" />
              <span>Kullanıcı Yönetimi</span>
            </a>
          </Link>
          <Link href="/integration-management">
            <a className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700">
              <DatabaseIcon className="h-5 w-5" />
              <span>Entegrasyon Yönetimi</span>
            </a>
          </Link>
          <Link href="/product-management">
            <a className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700">
              <TagIcon className="h-5 w-5" />
              <span>Ürün Yönetimi</span>
            </a>
          </Link>
          <Link href="/order-management">
            <a className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700">
              <ShoppingCartIcon className="h-5 w-5" />
              <span>Sipariş Yönetimi</span>
            </a>
          </Link>
          <Link href="/procurement-management">
            <a className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700">
              <TruckIcon className="h-5 w-5" />
              <span>Tedarik Yönetimi</span>
            </a>
          </Link>
          <Link href="/warehouse-management">
            <a className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700">
              <ClipboardCheckIcon className="h-5 w-5" />
              <span>Depo Yönetimi</span>
            </a>
          </Link>
          <Link href="/settings">
            <a className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-700">
              <CogIcon className="h-5 w-5" />
              <span>Ayarlar</span>
            </a>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
};

export default Layout;