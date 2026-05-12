import styles from './LogoutModal.module.css';
export function LogoutModal({ onConfirm, onCancel }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <h2 className={styles.title}>Leaving already?</h2>
          <p className={styles.message}>
            You can log back in anytime to continue your meetings with Hintro.
          </p>
        </div>

        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.confirmBtn} onClick={onConfirm}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
