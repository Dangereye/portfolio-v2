import "../styles/globals.scss";
import Layout from "../layout/Layout";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <main className="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </Layout>
  );
}

export default MyApp;
