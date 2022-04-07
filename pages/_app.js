import { motion } from 'framer-motion'
import Router from 'next/router'
import withGA from 'next-ga'
import Head from 'next/head'

import Layout from '../components/Layout.js'

import '../styles/globals.css'
import '../styles/tailwind.css'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const App = ({ Component, pageProps, router }) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <motion.div 
      key={router.route}
      variants={variants} 
      initial='hidden'
      animate='enter'
      exit='exit'
      transition={{ type: 'linear' }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  </>
)

export default withGA('UA-2408451141-1', Router)(App)
