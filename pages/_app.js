import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import "../src/styles.css";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import "../styles/index.css";

export default function MyApp(props) {
  const router = useRouter();
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <React.Fragment>
      <Head>
        <title>Gaurav Thakur</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Gaurav Thakur</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={
            "Welcome to Gaurav Thakur's personal space on the Internet. He loves doing competitive programming and building new stuff in his free time."
          }
        />
        <meta charSet="utf-8" />
        <meta property="og:title" content="Gaurav Thakur" key={"ogtitle"} />
        <meta
          property="og:url"
          content="https://gauravthakur.in"
          key={"ogurl"}
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/gauravthakur/image/upload/v1604414321/IMG_20171227_134627_365_bjt5on.jpg"
          key={"ogimage"}
        />
        <meta property="og:type" content="website" key={"ogtype"} />
        <meta
          property="og:description"
          content="Welcome to Gaurav Thakur's personal space on the Internet. He loves doing competitive programming and building new stuff in his free time."
          key={"ogdescription"}
        />
        <meta property="og:locale" content="en_GB" key={"oglocale"} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
