import { Cursor } from "@/components/Cursor/Cursor";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Cursor />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
