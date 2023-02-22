import Head from "next/head";
import PlantsList from "../components/plant";
import Footer from "../components/pl-footer";
import Menu from "../components/pl-menu";

export default function Home() {
  return (
    <div className='h-screen font-Novel text-xl'>
      <Head>
        <title>Plants Project Live</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Menu />
      <h1 className='text-4xl text-center py-12 font-Novel uppercase'>
        Plants Database
      </h1>
      <PlantsList />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
