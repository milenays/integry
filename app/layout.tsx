import '../styles/globals.css';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Integry',
  description: 'Integry Yönetim Sistemi'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="flex-1 p-8 bg-gray-100 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
