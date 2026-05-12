import styles from './Sidebar.module.css';
import {
  DashboardIcon,
  CallsIcon,
  AnalyticsIcon,
  FeedbackIcon,
  SettingsIcon,
  CloseIcon,
} from './Icons';

export function Sidebar({ active, isOpen = false, onClose, onNavigate }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
    { id: 'calls', label: 'Call Insights', icon: CallsIcon },
    { id: 'knowledge', label: 'Knowledge Base', icon: AnalyticsIcon, info: true },
    { id: 'prompts', label: 'Prompts', icon: FeedbackIcon, info: true },
    { id: 'boxy', label: 'Boxy Controls', icon: SettingsIcon, info: true },
  ];

  const footerItems = [
    { id: 'history', label: 'Feedback History', icon: CallsIcon },
    { id: 'feedback', label: 'Feedback', icon: AnalyticsIcon },
  ];

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.logo}>
        <span>Hintro</span>
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
          <CloseIcon />
        </button>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <Icon active={isActive} />
              <span>{item.label}</span>
              {item.info && <span className={styles.infoIcon}>i</span>}
            </button>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <div className={styles.footerNav}>
          {footerItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <Icon active={isActive} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
        <button type="button" className={styles.upgradeBtn}>
          Upgrade
        </button>
      </div>
    </aside>
  );
}
