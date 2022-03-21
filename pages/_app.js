import "../styles/globals.css";
import Layout from "../components/Layout";
import React, { useEffect } from "react";




function MyApp({ Component, pageProps }) {
 
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;