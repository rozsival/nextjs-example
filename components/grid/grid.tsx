import { GridProps } from './types';
import styles from './grid.module.css';

export const Grid = ({ children }: GridProps) => (
  <div className={styles.grid}>{children}</div>
);
