'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/user-management', label: 'Kullanıcı Yönetimi' },
    { href: '/integration-management', label: 'Entegrasyon Yönetimi' },
    { href: '/product-management', label: 'Ürün Yönetimi' },
    { href: '/order-management', label: 'Sipariş Yönetimi' },
    { href: '/procurement-management', label: 'Tedarik Yönetimi' },
    { href: '/warehouse-management', label: 'Depo Yönetimi' },
    { href: '/settings', label: 'Ayarlar' },
    { href: '/brand-management', label: 'Marka Yönetimi' },
    { href: '/category-management', label: 'Kategori Yönetimi' }
  ];

  return (
    <div className="h-screen bg-gray-900 text-white w-64 flex flex-col">
      <div className="flex items-center justify-center h-20">
        <h1 className="text-2xl font-bold">Integry</h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {links.map((link) => (
          <Link key={link.href} href={link.href} passHref legacyBehavior>
            <a className={`block px-2 py-2 text-sm font-medium rounded-md ${pathname === link.href ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 text-white'}`}>
              <span className="ml-2">{link.label}</span>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
