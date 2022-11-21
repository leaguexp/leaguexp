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
      <div className={styles.hero}>
        <div>
          <div style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'center' }}>
            <Link to={'/greenlight'}><img className='indicator target' style={{ boxShadow: '0 0 20px #009b3a', border: '4px solid #009b3a' }} src="https://github.com/greenlight-solutions.png" alt="Greenlight AI Logo" /></Link>
            <Link to={'/operator'}><img className='indicator target' style={{ boxShadow: '0 0 40px #00a1de', border: '4px solid #00a1de'  }} src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa" alt="Operator Logo" /></Link>
            <Link to={'/parakeet'}><img className='indicator target' style={{ boxShadow: '0 0 40px #522398', border: '4px solid #522398'  }} src="https://images.unsplash.com/photo-1444464666168-49d633b86797" alt="Parakeet Logo" /></Link>
          </div>
          <h1>We make cool things that <RoughNotation type="underline" padding={13} animate={false} strokeWidth={5} show={true}><b>change the world</b></RoughNotation>.</h1>
        </div>
      </div>
    </Layout>
  );
}
