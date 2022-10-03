import React, { useEffect } from 'react'
import Layout from '@theme/Layout';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth'

export default function AccountPage() {
    useEffect(() => {
        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                console.log(user)
            } else {
                console.log("Not signed in")
            }
        })
    }, [])

    return <Layout>

    </Layout>
}