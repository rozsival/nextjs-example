import Link from 'next/link';
import styles from './card.module.css';
import { CardProps } from './types';

export const Card = ({ link, title, text }: CardProps) => (
  <Link href={link} passHref>
    <a href={link} className={styles.card}>
      <h2>{title} &rarr;</h2>
      <p>{text}</p>
    </a>
  </Link>
);
