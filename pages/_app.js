import '../styles/globals.scss'
import theme from '../theme'
import { ThemeProvider } from '@mui/material'
import Head from 'next/head'
import { Header } from '../components'

export default function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <Head>
      <title>PlanTain | Blog</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
  </ThemeProvider>
  )
}


