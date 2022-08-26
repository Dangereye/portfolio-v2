import "../styles/globals.scss";
import Layout from "../layout/Layout";
import AppProvider from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <main className="main">
          <Component {...pageProps} />
        </main>
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
