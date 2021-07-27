import Head from 'next/head'
import {Divider} from '@chakra-ui/react'
import Hero from '../components/Hero'
import HeroCallToAction from '../components/HeroCallToAction'
import LatestProjects from '../components/LatestProjects'
import AserBranches from '../components/AserBranches'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import News from '../components/News'

import Footer from '../components/Footer'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Aserplc</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <HeroCallToAction />
      <LatestProjects />
      <AserBranches />
      <Testimonials />
      <WhyChooseUs />
      <Divider />
      <News />
      <Footer />

    </div>
  )
}
