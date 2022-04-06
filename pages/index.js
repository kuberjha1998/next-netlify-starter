import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kuber Jha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Kuber Jha loves aadu" />
        <p className="description">
          Kuber Jha loves aadu <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
