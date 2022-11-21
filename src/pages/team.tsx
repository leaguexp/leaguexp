import React from 'react';
import Layout from '@theme/Layout';

import styles from './team.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Team`}
      description="We make cool things that change the world." wrapperClassName={styles.team}>
      <h1>Meet the team that makes it all happen.</h1>
      <div className={styles.people}>
        <div className={styles.person}>
          <img src="/img/team/samuel.png" alt="Samuel" height={100} />
          <h2>Samuel Sharp</h2>
          <h3>Product Lead</h3>
          <p>Samuel is the product lead for Parakeet and OperatorOS. In his limited free time, he enjoys setting up computers and riding trains.</p>
          <i>samuel@leaguexp.dev</i>
        </div>
        <div className={styles.person}>
          <img src="/img/team/rowan.png" alt="Rowan" height={100} />
          <h2>Rowan Law</h2>
          <h3>Product Lead</h3>
          <p>Rowan is the product lead for Greenlight Traffic AI. He spends his free time on animations and art, and is currently working on an indie TV show.</p>
          <i>rowan@leaguexp.dev</i>
        </div>
        <div className={styles.person}>
          <img src="/img/team/max.png" alt="Max" height={100} />
          <h2>Max Spiridonov</h2>
          <h3>Senior Developer</h3>
          <p>Max is a senior developer on the Greenlight Traffic AI team. </p>
          <i>max@leaguexp.dev</i>
        </div>
        <div className={styles.person}>
          <img src="/img/team/zach.png" alt="Zach" height={100} />
          <h2>Zach Fitz</h2>
          <h3>Senior Developer</h3>
          <p>Zach is a senior developer on the Greenlight Traffic AI team.</p>
          <i>zach@leaguexp.dev</i>
        </div>
        <div className={styles.person}>
          <img src="/img/team/sameer.png" alt="Sameer" height={100} />
          <h2>Sameer Prakash</h2>
          <h3>Senior Developer</h3>
          <p>Sameer is a senior developer on the Lit.Games team. He wasted his life away talking to penguins. They didn't talk back. They screamed back.</p>
          <i>sameer@leaguexp.dev</i>
        </div>
        <div className={styles.person}>
          <img src="/img/team/keith.png" alt="Keith" height={100} />
          <h2>Keith Groves</h2>
          <h3>Board Advisor</h3>
          <p>Keith currently advises the LeagueXP board and manages business relationships. He tried to protect us…but in the end, he couldn’t save us from just doing things that had no real value.</p>
          <i>keith@leaguexp.dev</i>
        </div>
        <div className={styles.person}>
          <img src="/img/team/vic.png" alt="Vic" height={100} />
          <h2>Vic Wintriss</h2>
          <h3>Board Advisor</h3>
          <p>Vic is the founder of the LEAGUE of Amazing Programmers, which has been churning out degenrates like us for over a decade. He is retired from the LEAGUE and now advises the LeagueXP board.</p>
          {/* <i>vic@leaguexp.dev</i> */}
        </div>
      </div>
    </Layout>
  );
}
