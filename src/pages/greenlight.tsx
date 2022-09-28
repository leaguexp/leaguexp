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
    </Layout>
}