import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kobeigane Health',
  description: 'Kobeigane Public Health division',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      

      <Head>
     
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,900&display=swap" rel="stylesheet"></link>
      </Head>
        
      

      <body className={inter.className}>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-FGHES7MCL7"></script>
      <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FGHES7MCL7');
            `,
          }}
        />
        
        {children}</body>
    </html>
  )
}


{/* <body className={inter.className}>
        {children}

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-87VL8427MW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FGHES7MCL7');
            `,
          }}
        />
      </body> */}


// <!-- Google tag (gtag.js) -->
