import Router from 'next/router'
import withGA from 'next-ga'
import Head from 'next/head'

import Layout from '../components/Layout.js'

import '../styles/globals.css'
import '../styles/tailwind.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)

export default withGA('UA-2408451141-1', Router)(App)
