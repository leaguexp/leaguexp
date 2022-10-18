import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

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
      <div className={styles.productFeature} style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80)' }}>
        <div className={styles.productDetails}>
          <h1>Learn about our products.</h1>
          <h2>We love making cool stuff we think you'll love. We're always aiming to change the world with the things we make!</h2>
          <h3>
            <Link to={'/greenlight'}>Greenlight Traffic AI</Link><br />
            <Link to={'/litgames'}>Lit.Games</Link><br />
            <Link to={'/operator'}>OperatorOS</Link>
          </h3>
        </div>
      </div>
      <div className={styles.productFeature} style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(https://lit.games/img/wizardwars/keyart.png)' }}>
        <div className={styles.productDetails}>
          <h1>Meet our team.</h1>
          <h2>We're a group of dedicated people working hard to make great things.</h2>
          <h3>
            <Link to={'/team'}>Our Team</Link><br />
            <Link to={'/team'}>Blog</Link><br />
            <Link to={'/launchpad'}>Employee Portal</Link>
          </h3>
        </div>
      </div>
      <div className={styles.productFeature} style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(https://images.unsplash.com/photo-1618472609777-b038f1f04b8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80)' }}>
        <div className={styles.productDetails}>
          <h1>Get product support.</h1>
          <h2>We like to think our products are perfect. But we know that's not true! If you need help though, we've got plenty of resources.</h2>
          <h3>
            <Link to={'/support/home'}>Support Center</Link><br />
            <Link to={'/launchpad'}>Customer Portal</Link>
          </h3>
        </div>
      </div>
    </Layout>
  );
}
