import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/component/layouts/Banner';
import AboutSec from '@/component/AboutSec';
import BrackerSec from '@/component/BrackerSec';
import PowerStrip from '@/component/PowerStrip';
import TrustedCompoSlider from '@/component/layouts/TrustedCompoSlider';
import BrackerBox from '@/component/BrackerBox';
import InsightsSec from '@/component/insightsSec';
import FaqSec from '@/component/FaqSec';
import ProductSec from '@/component/ProductSec';
import CertiSec from '@/component/CertiSec';
import TowardGreen from '@/component/TowardGreen';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Elcom</title>
      </Head>
      <Banner/>
      <AboutSec/>
      <TrustedCompoSlider />
      <ProductSec/>
      <BrackerSec/>
      <CertiSec/>
      <TowardGreen/>
      <PowerStrip/>
      <BrackerBox/>
      <InsightsSec/>
      <FaqSec/>
    </>
  )
}
