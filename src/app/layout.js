import { Inter, Manrope } from 'next/font/google'
import Script from 'next/script'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { cx } from '../utils'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: "swap", variable: "--font-in" })
const manrope = Manrope({ subsets: ['latin'], display: "swap", variable: "--font-mr"})

export const metadata = {
  title: 'Joseph Gateru Kimani',
  description: 'Welcome to my World',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
       >
       <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }`}
        </Script>
       <Header />
       {children}
       <Footer />
       </body>
    </html>
  )
}
