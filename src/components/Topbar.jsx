'use client';

import { useState } from 'react';
import styles from './Topbar.module.css';
import {
  ChevronDownIcon,
  MenuIcon,
  UserIcon,
  LogoutIcon,
} from './Icons';

export function Topbar({
  userName = 'John Doe',
  userEmail = 'john@example.com',
  onLogout,
  onFeedback,
  onMenuClick,
  users = ['u1', 'u2'],
  currentUser = 'u1',
  onUserChange,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className={styles.topbar}>
      <div className={styles.mobileStatus}>
        <span>9:41</span>
        <span className={styles.statusIcons}>▮▮▮ ⌁ ▰</span>
      </div>
      <div className={styles.left}>
        <button className={styles.menuBtn} onClick={onMenuClick}>
          <MenuIcon />
        </button>
        <h1>Dashboard</h1>
      </div>

      <div className={styles.right}>
        <button className={styles.tutorialBtn}>
          <span className={styles.playIcon}>▶</span>
          <span>Watch Tutorial</span>
        </button>

        <div className={styles.userSwitcher} aria-label="Switch dashboard user">
          {users.map((user) => (
            <button
              key={user}
              type="button"
              className={`${styles.switchBtn} ${
                currentUser === user ? styles.switchActive : ''
              }`}
              onClick={() => onUserChange(user)}
            >
              <span>{user === 'u1' ? 'User 1' : 'User 2'}</span>
              <small>{user === 'u1' ? 'Empty' : 'Data'}</small>
            </button>
          ))}
        </div>

        <button type="button" className={styles.feedbackBtn} onClick={onFeedback}>
          Feedback
        </button>

        <div className={styles.userMenu}>
          <button
            className={styles.userBtn}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <UserIcon />
            <ChevronDownIcon />
          </button>

          {showDropdown && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownHeader}>Current User</div>
              <div className={styles.userSummary}>
                <strong>{userName}</strong>
                <span>{userEmail}</span>
                <em>{currentUser === 'u1' ? 'Empty state' : 'Data state'}</em>
              </div>
              <button className={styles.logoutBtn} onClick={onLogout}>
                <LogoutIcon />
                <span>Log out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
