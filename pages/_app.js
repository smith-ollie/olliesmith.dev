import React from "react";
import ReactMarkdown from "react-markdown";
import { Page } from "../components/page";
import { NavBar } from "../components/navbar/navbar";
import { attributes } from "../content/site.md";
import rehypeRaw from "rehype-raw";
import "normalize.css/normalize.css";
import "../styles/index.scss";

const { logo_wordmark } = attributes;

function MyApp({ Component, pageProps }) {
  return (
    <Page
      navBar={
        <NavBar
          logoWordmark={
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {logo_wordmark}
            </ReactMarkdown>
          }
        />
      }
    >
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
