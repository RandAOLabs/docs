import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Media Kit',
    emoji: '📸',
    description: (
      <>
        Access branding assets, logos, and press materials for RANDAO.
      </>
    ),
    link: '/media-kit',
  },
  {
    title: 'Latest News',
    emoji: '📰',
    description: (
      <>
        Stay updated with the latest announcements and articles from RANDAO.
      </>
    ),
    link: '/news',
  },
  {
    title: 'Documentation',
    emoji: '📚',
    description: (
      <>
        Explore comprehensive guides and resources for RANDAO.
      </>
    ),
    link: '/docs/start-here',
  },
];

function Feature({ title, emoji, description, link }: FeatureItem) {
  return (
    <a href={link} className={clsx('col col--4')} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="text--center">
        <div className={styles.featureEmoji} role="img" aria-label={title}>
          {emoji}
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
