import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_KR } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OROA — 4PM Coral Serum",
  description:
    "지중해의 딥블루와 오후 4시의 코랄빛에서 영감받은 OROA 4PM CORAL SERUM.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${cormorant.variable} ${notoSansKr.variable}`}>
      <GoogleTagManager gtmId="GTM-W6XBSXCG" />
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "yq8n5h2nyn");`}
      </Script>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6XBSXCG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
