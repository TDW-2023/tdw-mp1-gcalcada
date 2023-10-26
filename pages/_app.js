import '../styles/index.css';
import React from 'react';

function MyApp({ Component, pageProps, router }) {
  return (
    <>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;