import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Menu from '../components/menu'

export default function Quiz() {
  return (
    <div>
      <Head>
        <title>Plants Project Live</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Menu />
      </header>
      <div>
        <h1 className='text-4xl text-center py-12 font-Novel uppercase'>
          Personality Quiz
        </h1>   
      </div>
      <div>
      
      </div>
      <footer><Footer /></footer>
    </div>
  )
}
