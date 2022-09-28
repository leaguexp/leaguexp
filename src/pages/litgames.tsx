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
    </Layout>
}