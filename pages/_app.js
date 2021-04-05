import '../styles/globals.css'
import '../styles/tailwind.css'

import Layout from '../components/Layout.js'
import configSeo from '../seo.json';

import { DefaultSeo } from 'next-seo';
import Router from 'next/router'; 
import withGA from 'next-ga'

const App = ({ Component, pageProps }) => (
  <Layout>
    <DefaultSeo {...configSeo} />
    <Component {...pageProps} />
  </Layout>
)

export default withGA('G-Z7GPFKQDC2', Router)(App);
