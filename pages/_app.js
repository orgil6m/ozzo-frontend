import "../styles/globals.css";
import Layout from "../components/Layout";
import React, { useEffect } from "react";
import Router from "next/router";
import {DataProvider} from "../store/GlobalState"
import { AnimatePresence, motion } from "framer-motion";
import Loading from "../components/Loading"
import Nprogress from "nprogress"
import "nprogress/nprogress.css"

Router.onRouteChangeStart = (url) => {
  Nprogress.start()
}

Router.onRouteChangeComplete = (url) => {
  Nprogress.done()
}

Router.onRouteChangeError = () => {
  Nprogress.done()
}

function MyApp({ Component, pageProps,router }) {
  return (
    <DataProvider>
      {/* <Provider session={pageProps.session}> */}
      <Layout>
        
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}>
          <Component {...pageProps} />
          </motion.div>
      </Layout>
      {/* </Provider> */}
    </DataProvider>
  );
}

export default MyApp;