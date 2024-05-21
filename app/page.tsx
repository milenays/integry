import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Integry Yönetim Sistemi</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Aynı linkler buraya da eklenir */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
