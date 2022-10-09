import React from 'react'
import Layout from '@theme/Layout';
import styles from './product.module.css'

export default function ProductFocusOperator() {
    return <Layout>
        <header className={styles.productHero} style={{ background: 'url(https://images.unsplash.com/photo-1618472609777-b038f1f04b8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80)' }}>
            <div style={{ background: 'rgba(70, 0, 0, 0.7)' }}>
                <h1>OperatorOS</h1>
                <h2>A new way to computer.</h2>
                <img src="/img/expand.svg" alt="Scroll down" />
            </div>
        </header>
        <section style={{ background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url()' }}>
            <div>
                <h1>A desktop for the next generation (of computing).</h1>
                <p></p>
            </div>
        </section>
        <section style={{ background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url()' }}>
            <div>
                <h1>Free for all. Open to all.</h1>
                <p></p>
            </div>
        </section>
        <section style={{ background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url()' }}>
            <div>
                <h1>A stable foundation for us, too.</h1>
                <p></p>
            </div>
        </section>
        <section style={{ background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url()' }}>
            <div>
                <h1>Simple <del>yet</del> <ins>and</ins> customizable</h1>
                <p></p>
            </div>
        </section>
        <section style={{ justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Get started today.</h1>
                <button className={styles.actionButton} style={{ borderColor: 'green' }}>Coming soon...</button>
            </div>
        </section>
    </Layout>
}