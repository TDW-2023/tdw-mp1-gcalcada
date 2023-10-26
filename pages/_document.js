import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Navbar from '../components/navbar';
import alerta from "../components/alerta";

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <Navbar activeRoute /><alerta></alerta>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
