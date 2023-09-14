import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import type { AppProps } from "next/app";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" storageKey="btreiner-theme">
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </ThemeProvider>
  );
}
