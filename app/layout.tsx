import type { Metadata } from 'next';
import "./globals.css";
import {LongNavbar} from "@/components/layout/header/longnavbar/navbar";
import {FooterMaps} from "@/components/layout/footer/footer-maps";
import { generateMetadataFromConfig } from '@/lib/seo-metadata';
import Script from 'next/script';
import ChatWidget from '@/components/global/ChatWidget';

// Generate metadata using the SEO system
export const metadata: Metadata = generateMetadataFromConfig('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/assets/config/favicon.ico" sizes="any" />
      <link rel="icon" href="/assets/config/logo.png" type="image/png" sizes="32x32" />
      <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#3B82F6" />
      
      <Script 
          id="google-tag-manager" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NN6LR3QJ');`
          }}
        />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://widgets.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
    </head>
      <body className="flex flex-col min-h-screen">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NN6LR3QJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <LongNavbar />
        <main className="flex-grow">
          {children}
        </main>
        <FooterMaps />
        <ChatWidget />
      </body>
    </html>
  );
}
