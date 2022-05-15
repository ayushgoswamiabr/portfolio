import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Meta from "../components/Meta";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
