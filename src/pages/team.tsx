import React from 'react';
import Layout from '@theme/Layout';

import styles from './team.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Team`}
      description="We make cool things that change the world." wrapperClassName={styles.people}>
      <div className={styles.person}>
        <img src="/img/team/rowan.jpg" alt="Rowan" height={100} />
        <h2>Rowan Law</h2>
        <h3>Product Lead</h3>
        <p>Rowan is a product lead for Greenlight Traffic AI. He spends his free time on animations and art, and is currently working on an indie TV show. His heart was made of fire, but his foot was just made out of regular old flesh, and his teeth were made of an unknown substance.</p>
      </div>
      <div className={styles.person}>
        <img src="/img/team/samuel.jpg" alt="Samuel" height={100} />
        <h2>Samuel Sharp</h2>
        <h3>Product Lead</h3>
        <p>Samuel is a product lead on the Lit.Games and OperatorOS teams. In his limited free time, he enjoys setting up computers and riding trains.</p>
      </div>
      <div className={styles.person}>
        <img src="/img/team/max.jpg" alt="Max" height={100} />
        <h2>Max Spiridonov</h2>
        <h3>Senior Developer</h3>
        <p>Max is a senior developer on the Greenlight Traffic AI team. </p>
      </div>
      <div className={styles.person}>
        <img src="/img/team/zach.jpg" alt="Zach" height={100} />
        <h2>Zachary Fitzpatrick</h2>
        <h3>Senior Developer</h3>
        <p>Zachary is a senior developer on the Greenlight Traffic AI team. He stood silently watching, waiting for his moment to shine…to strike. He could have us all marked as fools, but he stands by our side.</p>
      </div>
      <div className={styles.person}>
        <img src="/img/team/sameer.jpg" alt="Sameer" height={100} />
        <h2>Sameer Prakash</h2>
        <h3>Senior Developer</h3>
        <p>Sameer is a senior developer on the Lit.Games team. According to Rowan, he wasted his life away talking to penguins. They didn't talk back. They screamed back.</p>
      </div>
      <div className={styles.person}>
        <img src="/img/team/keith.jpg" alt="Keith" height={100} />
        <h2>Keith Groves</h2>
        <h3>Board Advisor</h3>
        <p>He tried to protect us…but in the end, he couldn’t save us from just doing things that had no real value. He currently advises the LeagueXP board.</p>
      </div>
      <div className={styles.person}>
        <img src="https://www.jointheleague.org/wp-content/uploads/2021/10/VicWintriss.png" alt="Vic" height={100} />
        <h2>Vic Wintriss</h2>
        <h3>Board Advisor</h3>
        <p>Vic is founder of the LEAGUE of Amazing Programmers, which has been churning out degenrates like us for over a decade. He currently is retired from the LEAGUE and advises the LeagueXP board. Mostly by telling us what to do and complaining if we don't do it.</p>
      </div>
    </Layout>
  );
}
