import styles from './DashboardView.module.css';
import { StatCard } from './StatCard';
import {
  compactTimeAgo,
  formatClockTime,
  formatDuration,
  formatShortDate,
  groupByDate,
} from '@/lib/utils';
import {
  PhoneIcon,
  ClockIcon,
  UserGroupIcon,
  RatingIcon,
  CalendarIcon,
} from './Icons';

export function DashboardView({ stats, calls, isEmpty, userName = 'Name' }) {
  const groupedCalls = groupByDate(calls || []);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div>
          <h1>Hi, {userName} 👋 Welcome to Hintro</h1>
          <p>Ready to make your next call smarter ?</p>
        </div>
        <button type="button" className={styles.primaryBtn}>
          Start {isEmpty ? 'Call' : 'New Call'}
        </button>
      </section>

      <div className={styles.statsGrid}>
        <StatCard
          icon={PhoneIcon}
          label="Total Sessions"
          value={stats?.totalCalls || 0}
          tone="red"
        />
        <StatCard
          icon={ClockIcon}
          label="Average Duration"
          value={stats?.totalDuration ? formatDuration(stats.totalDuration) : 0}
          tone="cyan"
        />
        <StatCard
          icon={UserGroupIcon}
          label="AI Used"
          value={`${stats?.totalCustomers || 0}${stats?.totalCustomers ? ' times' : ''}`}
          tone="green"
        />
        <StatCard
          icon={CalendarIcon || RatingIcon}
          label="Last Session"
          value={compactTimeAgo(stats?.lastSession)}
          tone="purple"
        />
      </div>

      <div className={styles.callsSection}>
        <div className={styles.callsHeader}>
          <h3>Recent calls</h3>
        </div>

        {!isEmpty && calls && calls.length > 0 ? (
          <div className={styles.callsList}>
            {Object.entries(groupedCalls).map(([date, items]) => (
              <div key={date} className={styles.dateGroup}>
                <div className={styles.dateLabel}>{formatShortDate(items[0]?.timestamp)}</div>
                {items.map((call) => (
                  <div key={call.id} className={styles.callItem}>
                    <div className={styles.avatar}>K</div>
                    <div className={styles.callMain}>
                      <div className={styles.callName}>
                        {call.description || 'Design Call'}
                      </div>
                      <div className={styles.participants}>
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                    <div className={styles.callTime}>{formatClockTime(call.timestamp)}</div>
                    <button type="button" className={styles.moreBtn} aria-label="Call actions">
                      ⋮
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.noCalls}>
            <div className={styles.noCallsIcon}>
              <CalendarIcon />
            </div>
            <h4>No Recent Calls</h4>
            <p>
              Connect your Google Calendar to see upcoming meetings,
              <br />
              get reminders, and join calls directly from Hintro.
            </p>
            <button type="button" className={styles.secondaryBtn}>
              Start a Call
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
