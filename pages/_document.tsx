import { GA_ID } from '@/lib/gtag'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" prefix='og: http://ogp.me/ns#'>
      <Head>
      {GA_ID && (
             <>
               <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
               <script
                 dangerouslySetInnerHTML={{
                   __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${GA_ID}', {
                     page_path: window.location.pathname,
                   });`,
                 }}
               />
             </>
           )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
