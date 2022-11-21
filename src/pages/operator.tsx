import React from 'react'
import Layout from '@theme/Layout';
import styles from './product.module.css'

export default function ProductFocusOperator() {
    return <Layout>
        <header className={styles.productHero} style={{ background: 'url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa)' }}>
            <div style={{ background: 'rgba(0, 161, 222, 0.7)', color: 'white' }}>
                <img className='indicator' style={{ boxShadow: '0 0 40px #00a1de', border: '4px solid #00a1de'  }} src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa" alt="Operator Logo" />
                <h1>OperatorOS</h1>
                <h2>The operating system built for people.</h2>
                <img src="/img/expand.svg" alt="Scroll down" />
            </div>
        </header>
        <section style={{ justifyContent: 'center', padding: '40px' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Get started today.</h1>
                <button className={styles.actionButton} style={{ borderColor: '#00a1de' }}>Coming soon...</button>
            </div>
        </section>
    </Layout>
}