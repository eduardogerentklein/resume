import { motion } from 'framer-motion'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as gtag from '../lib/gtag'
import Analytics from '../components/Analytics'

import Layout from '../components/Layout.js'

import '../styles/globals.css'
import '../styles/tailwind.css'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const App = ({ Component, pageProps, router }) => {
  const routerHook = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    routerHook.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      routerHook.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [routerHook.events])

  return (
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
          <Analytics />
        </Layout>
      </motion.div>
    </>
  )
}

export default App