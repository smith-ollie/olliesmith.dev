import Head from 'next/head'
import { Hero } from '../components/hero';
import { attributes } from '../content/home.md'

const { title, hero_title, hero_subtitle } = attributes;

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero title={hero_title} subTitle={hero_subtitle} />
      </main>
    </div>
  )
}
