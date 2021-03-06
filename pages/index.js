import Head from 'next/head'
import Image from 'next/image'
import Desc from '../component/Desc'
import Navbar from '../component/Navbar'
import Carasoule from '../component/Carasoule'
import Modal from '../component/Modal'
import Script from 'next/script';

export default function Home() {
  return (
    <>
  
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
        </Head>
  <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"/>
  <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"/>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"/>
      

   
      <Navbar/>
      <Carasoule/>
      <Desc/>
      <Modal/>

      </>


      
  )
}
