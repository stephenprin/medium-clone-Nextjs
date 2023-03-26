import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'


export default function Home() {
  return (
    <>
      <Head>
        <title>Medium Blog</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <div>
        <div>
          <h1>Medium is a</h1>
        </div>
        <div></div>
      </div>
        
      
    </>
  )
}
