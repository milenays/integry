import '../styles/globals.css';
import Layout from '../components/Layout';

export const metadata = {
  title: 'Integry',
  description: 'A web-based integration system',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}