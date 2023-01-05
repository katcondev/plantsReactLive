import Head from 'next/head'
import Image from 'next/image'
import Menu from '../components/pl-menu'
import Footer from '../components/pl-footer'
import Plform from '../components/pl-form'
import Link from 'next/link'

export default function Subs() {
  return (
    <div>
      <Head>
        <title>Plants Project Live</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header>
        <Menu />
      </header>
      <div className='container mx-auto'>
        <h1 className='text-4xl text-center py-12 font-Novel uppercase'>
          Plant Submissions
        </h1>
        <p>
              Discover and share your collection of house plants, connect with interesting people, and
              work together to help new plant parents in need.
              I'm baby pok pok fingerstache 90's, vice artisan +1 pitchfork. Chambray shaman air plant selvage, banjo mlkshk
              cray migas yuccie brooklyn seitan raw denim lyft
              glossier narwhal. Sartorial mustache humblebrag snackwave. Selvage umami vape, DIY mlkshk locavore trust fund
              shaman try-hard direct trade fingerstache craft beer.
              Freegan lomo street art, blue bottle locavore etsy trust fund offal squid godard marfa. </p>   
      </div>
      <div>
       <Plform />
      </div>
      <footer><Footer /></footer> 
    </div>
  )
}
