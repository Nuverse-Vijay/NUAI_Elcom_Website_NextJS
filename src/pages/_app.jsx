import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css';
import '@/styles/fonts.css';
import Header from '@/component/layouts/Header';
import Footer from '@/component/layouts/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}
