import styles from './LoadingState.module.css';

export function LoadingState() {
  return (
    <div className={styles.container}>
      <div className={styles.statsGrid}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={styles.statSkeleton}>
            <div className={styles.iconSkeleton} />
            <div className={styles.contentSkeleton}>
              <div className={styles.labelSkeleton} />
              <div className={styles.valueSkeleton} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.callsSection}>
        <div className={styles.headerSkeleton} />
        <div className={styles.listSkeleton}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.itemSkeleton}>
              <div className={styles.itemLine} />
              <div className={styles.itemLine} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
