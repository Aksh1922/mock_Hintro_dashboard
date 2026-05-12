import styles from './PlaceholderView.module.css';

export function PlaceholderView({ title, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.placeholder}>
        <div className={styles.icon}>📋</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
