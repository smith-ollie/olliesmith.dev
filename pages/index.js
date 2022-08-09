import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Hero } from "../components/hero";
import { attributes } from "../content/hero.md";

const { title, hero_title, hero_subtitle } = attributes;

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          title={
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {hero_title}
            </ReactMarkdown>
          }
          subTitle={<ReactMarkdown>{hero_subtitle}</ReactMarkdown>}
        />
      </main>
    </div>
  );
}
