import React from 'react'
import Layout from '@theme/Layout';
import styles from './product.module.css'

export default function ProductFocusOperator() {
    return <Layout>
        <header className={styles.productHero} style={{ background: 'url(https://lit.games/img/wizardwars/keyart.png)' }}>
            <div style={{ background: 'rgba(82, 35, 152, 0.7)', color: 'white' }}>
                <img className='indicator' style={{ boxShadow: '0 0 40px #522398', border: '4px solid #522398'  }} src="https://images.unsplash.com/photo-1444464666168-49d633b86797" alt="Parakeet Logo" />
                <h1>Parakeet</h1>
                <h2>Focus on building experiences.</h2>
                <img src="/img/expand.svg" alt="Scroll down" />
            </div>
        </header>
        <section style={{ justifyContent: 'center', padding: '40px' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Get started today.</h1>
                <button className={styles.actionButton} style={{ borderColor: '#522398' }}>Coming soon...</button>
            </div>
        </section>
    </Layout>
}