import React from 'react'
import Layout from '@theme/Layout';
import styles from './product.module.css'

export default function ProductFocusOperator() {
    return <Layout>
        <header className={styles.productHero} style={{ background: 'url(https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80)' }}>
            <div style={{ background: 'rgba(0, 70, 0, 0.8)' }}>
                <h1>Greenlight Traffic AI</h1>
                <h2>A new way to drive.</h2>
                <img src="/img/expand.svg" alt="Scroll down" />
            </div>
        </header>
        <section style={{ background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(https://images.pexels.com/photos/394377/pexels-photo-394377.jpeg)' }}>
            <div>
                <h1>Cars have evolved. Intersections haven't.</h1>
                <p></p>
            </div>
        </section>
        <section style={{ background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg)' }}>
            <div>
                <h1>So what about AI?</h1>
                <p></p>
            </div>
        </section>
        <section style={{ background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(https://images.pexels.com/photos/1692694/pexels-photo-1692694.jpeg)' }}>
            <div>
                <h1>Works fast. Works well.</h1>
                <p></p>
            </div>
        </section>
        <section style={{ background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(https://images.pexels.com/photos/1209434/pexels-photo-1209434.jpeg)' }}>
            <div>
                <h1>It's easy. Too easy?</h1>
                <p></p>
            </div>
        </section>
        <section style={{ justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Get started today.</h1>
                <button className={styles.actionButton} style={{ borderColor: 'green' }}>Buy Now</button>
            </div>
        </section>
    </Layout>
}