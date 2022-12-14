import Link from '@docusaurus/Link';
import React from 'react'

export function ProductFancyLink(props: { type: string, isLink: boolean }) {
    return <span style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${props.type == 'grl' ? 'https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80' : props.type == 'oos' ? 'https://images.unsplash.com/photo-1618472609777-b038f1f04b8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80' : 'https://lit.games/img/wizardwars/keyart.png'})`,
        border: `6px solid ${props.type == 'grl' ? '#009b3a' : props.type == 'oos' ? '#00a1de' : '#522398'}`,
        marginBottom: '20px',
        borderRadius: '10px',
        padding: '30px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: props.isLink ? 'pointer' : 'default'
    }}>
        {props.type == 'grl' && <Link href='/support/greenlight' style={{ fontSize: '25pt', fontWeight: 'bold', color: '#f9461c' }}>Greenlight Traffic AI</Link>}
        {props.type == 'lit' && <Link href='/support/litgames' style={{ fontSize: '25pt', fontWeight: 'bold', color: '#f9461c' }}>Parakeet</Link>}
        {props.type == 'oos' && <Link href='/support/operator' style={{ fontSize: '25pt', fontWeight: 'bold', color: '#f9461c' }}>OperatorOS</Link>}
    </span>;
}