import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Navbar from '../components/navbar';


export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <Navbar activeRoute />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
