import '../styles/fonts/Montserrat/Montserrat.css'
import '../styles/fonts/FuturaPT.css'
import '../styles/fonts/AdleryPro.css'
import '../styles/fonts/Miama_Nueva.css'
import '../styles/global.css'
import '../styles/burger.css'
import 'react-medium-image-zoom/dist/styles.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import 'react-edit-text/dist/index.css'
import '@wethegit/react-autoplay-video/style.css'

import Head from 'next/head'

import { ThemeProvider } from '@mui/material/styles'

import 'react-toastify/dist/ReactToastify.css'
import 'react-loading-skeleton/dist/skeleton.css'

import 'react-image-crop/dist/ReactCrop.css'

import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import Script from 'next/script'
import { SnackbarProvider } from 'notistack'
import { useEffect } from 'react'

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: '',
  },
  palette: {
    primary: {
      main: '#7a5151',
    },
    secondary: {
      main: '#2A323B',
    },
    error: {
      main: red.A400,
    },
    red: { main: '#f87171' },
    blue: { main: '#60a5fa' },
    green: { main: '#4ade80' },
    gray: { main: '#9ca3af' },
    yellow: { main: '#FEE100' },
    // background: {
    //   default: '#FFD600',
    // },
  },
  root: {
    // height: '-webkit-fill-available',
    // margin: 0,
    // paddingLeft: 30,
    background: 'rgba(239, 243, 246, 1)',
  },
})

// import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'

// import allReducers from 'state/reducers'

// const composeEnhancers =
//   (typeof window !== 'undefined' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))

// const store = createStore(allReducers, enhancer)

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="yandex-verification" content="84f03833d2efe6ef" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/photos/1.jpg" as="image" />
        <link rel="preload" href="/photos/2.jpg" as="image" />
        <link rel="preload" href="/photos/3.jpg" as="image" />
        <link rel="preload" href="/photos/4.jpg" as="image" />
        <link rel="preload" href="/photos/5.jpg" as="image" />
        <link rel="preload" href="/photos/6.jpg" as="image" />
        <link rel="preload" href="/photos/7.jpg" as="image" />
        <link rel="preload" href="/photos/8.jpg" as="image" />
        <link rel="preload" href="/photos/9.jpg" as="image" />
        <link rel="preload" href="/photos/10.jpg" as="image" />
        <link rel="preload" href="/photos/11.jpg" as="image" />
        <link rel="preload" href="/photos/12.jpg" as="image" />
        <link rel="preload" href="/photos/13.jpg" as="image" />
        <link rel="preload" href="/photos/14.jpg" as="image" />
        <link rel="preload" href="/photos/15.jpg" as="image" />
        <link rel="preload" href="/photos/16.jpg" as="image" />
        <link rel="preload" href="/photos/17.jpg" as="image" />
        <link rel="preload" href="/photos/18.jpg" as="image" />
        <link rel="preload" href="/photos/19.jpg" as="image" />
        <link rel="preload" href="/photos/20.jpg" as="image" />
        <link rel="preload" href="/photos/21.jpg" as="image" />
        <link rel="preload" href="/photos/22.jpg" as="image" />
        <link rel="preload" href="/photos/23.jpg" as="image" />
        <link rel="preload" href="/photos/24.jpg" as="image" />
        <link rel="preload" href="/photos/25.jpg" as="image" />
        <link rel="preload" href="/photos/26.jpg" as="image" />
        <link rel="preload" href="/photos/27.jpg" as="image" />
        <link rel="preload" href="/photos/28.jpg" as="image" />
        <link rel="preload" href="/photos/29.jpg" as="image" />
        {/* <Script
          strategy="afterInteractive"
          src="https://cdn.jsdelivr.net/npm/@thelevicole/youtube-to-html5-loader@4.0.1/dist/YouTubeToHtml5.min.js"
        /> */}
        {/* <Script strategy="afterInteractive">{`new YouTubeToHtml5()`}</Script> */}
        {/* <script src="https://smtpjs.com/v3/smtp.js"></script> */}
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={4}>
          <Script
            src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
            strategy="beforeInteractive"
          />
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp

// export async function getServerSideProps(ctx) {
//   const session = await getSession(ctx)
//   console.log(`session!!`, session)
//   return {
//     props: {
//       session,
//     },
//   }
// }
