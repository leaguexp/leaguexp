import React from 'react'
import Layout from '@theme/Layout';
import styles from './product.module.css'

export default function ProductFocusOperator() {
    return <Layout>
        <header className={styles.productHero} style={{ background: 'url(https://images.unsplash.com/photo-1465447142348-e9952c393450)' }}>
            <div style={{ background: 'rgba(0, 155, 57, 0.8)', color: 'white' }}>
                <h1>Greenlight Traffic AI</h1>
                <h2>The traffic controller that keeps things moving.</h2>
                <img src="/img/expand.svg" alt="Scroll down" />
            </div>
        </header>
        <section style={{ justifyContent: 'center', padding: '40px' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Get started today.</h1>
                <button className={styles.actionButton} style={{ borderColor: '#009b3a' }}>Coming soon...</button>
            </div>
        </section>
    </Layout>
}