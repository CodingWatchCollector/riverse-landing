import '../styles/globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <SkipToContentLink /> */}
      <Nav />
      {/* <MainContentAnchor /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
