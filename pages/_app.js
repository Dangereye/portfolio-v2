import "../styles/globals.scss";
import Layout from "../layout/Layout";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AppProvider from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Header />
        <main className="main">
          <Component {...pageProps} />
        </main>
        <Footer />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
