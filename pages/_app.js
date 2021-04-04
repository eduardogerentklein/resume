import '../styles/globals.css'
import '../styles/tailwind.css'

import Layout from '../components/Layout.js'
import configSeo from '../seo.json';

import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...configSeo} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
