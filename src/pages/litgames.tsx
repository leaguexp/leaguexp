import React from 'react'
import Layout from '@theme/Layout';
import styles from './product.module.css'

export default function ProductFocusOperator() {
    return <Layout>
        <header className={styles.productHero} style={{ background: 'url(https://lit.games/img/wizardwars/keyart.png)' }}>
            <div style={{ background: 'rgba(0, 0, 70, 0.7)' }}>
                <h1>Lit.Games</h1>
                <h2>A new way to game.</h2>
                <img src="/img/expand.svg" alt="Scroll down" />
            </div>
        </header>
        <section style={{ background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url()' }}>
            <div>
                <h1>Gaming is for everyone.</h1>
                <p></p>
            </div>
        </section>
        <section style={{ background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url()' }}>
            <div>
                <h1>The web game - unbounded.</h1>
                <p></p>
            </div>
        </section>
        <section style={{ background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url()' }}>
            <div>
                <h1>A platform that just works.</h1>
                <p></p>
            </div>
        </section>
        <section style={{ background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url()' }}>
            <div>
                <h1>Any device, anytime.</h1>
                <p></p>
            </div>
        </section>
        <section style={{ justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Get started today.</h1>
                <button className={styles.actionButton} style={{ borderColor: 'blue' }} onClick={() => window.location.href = 'https://lit.games'} >Play Now</button>
            </div>
        </section>
    </Layout>
}