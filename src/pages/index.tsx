import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <video src="https://vod-progressive.akamaized.net/exp=1664236638~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3664%2F14%2F368320203%2F1524051061.mp4~hmac=7f48873480cce0b32c1afc864bf216947009a50aad91f66e00c73ee6dac2cb83/vimeo-prod-skyfire-std-us/01/3664/14/368320203/1524051061.mp4?filename=video.mp4" className={styles.heroVideo} autoPlay muted loop></video>
      <div className={styles.container}>
        <h1 className="hero__title">We make cool things that <span className={styles.heroSpan}>change the world</span>.</h1>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
