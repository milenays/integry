import '../styles/globals.css';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Integry',
  description: 'Integry Yönetim Sistemi'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
