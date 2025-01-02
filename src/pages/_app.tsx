import { Cursor } from "@/components/Cursor/Cursor";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Cursor />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
