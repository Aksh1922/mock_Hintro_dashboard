import styles from './StatCard.module.css';

export function StatCard({ icon: Icon, label, value, tone = 'red' }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.iconWrapper} ${styles[tone]}`}>
        {Icon && <Icon />}
      </div>
      <div className={styles.content}>
        <div className={styles.label}>{label}</div>
        <div className={styles.value}>{value}</div>
      </div>
    </div>
  );
}
