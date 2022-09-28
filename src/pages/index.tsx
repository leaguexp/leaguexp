import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Home`}
      description="We make cool things that change the world.">
      <header className={styles.heroBanner}>
        <video src="/img/hero.mp4" className={styles.heroVideo} autoPlay muted loop></video>
        <div className={styles.container}>
          <h1 className="hero__title">We make cool things that <RoughNotation type="underline" padding={13} animate={false} strokeWidth={5} show={true}><b>change the world</b></RoughNotation>.</h1>
        </div>
      </header>
      <div className={styles.productFeature} style={{ background: 'linear-gradient(rgba(0, 70, 0, 0.7), rgba(0, 70, 0, 0.7)), url(https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80)' }}>
        <div className={styles.productDetails}>
          <h1>Greenlight Traffic AI</h1>
          <h2>We're changing the intersection.</h2>
        </div>
      </div>
      <div className={styles.productFeature} style={{ background: 'linear-gradient(rgba(0, 0, 70, 0.7), rgba(0, 0, 70, 0.7)), url(https://lit.games/img/wizardwars/keyart.png)' }}>
        <div className={styles.productDetails}>
          <h1>Lit.Games</h1>
          <h2>We're changing the web game.</h2>
        </div>
      </div>
      <div className={styles.productFeature} style={{ background: 'linear-gradient(rgba(70, 0, 0, 0.7), rgba(70, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1618472609777-b038f1f04b8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80)' }}>
        <div className={styles.productDetails}>
          <h1>OperatorOS</h1>
          <h2>We're changing the desktop.</h2>
        </div>
      </div>
    </Layout>
  );
}
