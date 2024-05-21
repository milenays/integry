import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="h-screen bg-gray-900 text-white w-64 flex flex-col">
      <div className="flex items-center justify-center h-20">
        <h1 className="text-2xl font-bold">Integry</h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        <Link href="/dashboard">
          <a className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${router.pathname === '/dashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            <span className="ml-2">Dashboard</span>
          </a>
        </Link>
        <Link href="/user-management">
          <a className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${router.pathname === '/user-management' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            <span className="ml-2">Kullanıcı Yönetimi</span>
          </a>
        </Link>
        <Link href="/integration-management">
          <a className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${router.pathname === '/integration-management' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            <span className="ml-2">Entegrasyon Yönetimi</span>
          </a>
        </Link>
        <Link href="/product-management">
          <a className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${router.pathname === '/product-management' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            <span className="ml-2">Ürün Yönetimi</span>
          </a>
        </Link>
        <Link href="/order-management">
          <a className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${router.pathname === '/order-management' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            <span className="ml-2">Sipariş Yönetimi</span>
          </a>
        </Link>
        <Link href="/procurement-management">
          <a className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${router.pathname === '/procurement-management' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            <span className="ml-2">Tedarik Yönetimi</span>
          </a>
        </Link>
        <Link href="/warehouse-management">
          <a className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${router.pathname === '/warehouse-management' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            <span className="ml-2">Depo Yönetimi</span>
          </a>
        </Link>
        <Link href="/settings">
          <a className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${router.pathname === '/settings' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            <span className="ml-2">Ayarlar</span>
          </a>
        </Link>
        <Link href="/brand-management">
          <a className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${router.pathname === '/brand-management' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            <span className="ml-2">Marka Yönetimi</span>
          </a>
        </Link>
        <Link href="/category-management">
          <a className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${router.pathname === '/category-management' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            <span className="ml-2">Kategori Yönetimi</span>
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
