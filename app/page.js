'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { Sidebar } from '@/components/Sidebar';
import { Topbar } from '@/components/Topbar';
import { DashboardView } from '@/components/DashboardView';
import { FeedbackView } from '@/components/FeedbackView';
import { PlaceholderView } from '@/components/PlaceholderView';
import { LoadingState } from '@/components/LoadingState';
import { LogoutModal } from '@/components/LogoutModal';
import { useDashboard } from '@/hooks/useDashboard';

export default function Home() {
  const [active, setActive] = useState('dashboard');
  const [currentUser, setCurrentUser] = useState('u1');
  const [showLogout, setShowLogout] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { data, loading, error } = useDashboard(currentUser, true);

  const userNames = {
    u1: 'John Doe',
    u2: 'John Doe',
  };

  const userEmails = {
    u1: 'john@example.com',
    u2: 'john@example.com',
  };

  const handleLogout = () => {
    setShowLogout(false);
    // Reset state
    setActive('dashboard');
    setCurrentUser('u1');
    // In a real app, you'd handle actual logout/redirect here
  };

  const handleUserChange = (user) => {
    setCurrentUser(user);
  };

  const displayName = data?.profile?.firstName || data?.profile?.name?.split(' ')[0] || 'Name';

  const renderContent = () => {
    if (loading) {
      return <LoadingState />;
    }

    const isEmpty = !data?.calls || data.calls.length === 0;

    switch (active) {
      case 'dashboard':
        return (
          <DashboardView
            stats={data?.stats}
            calls={data?.calls}
            isEmpty={isEmpty}
            userName={displayName}
          />
        );
      case 'calls':
        return (
          <PlaceholderView
            title="Call Insights"
            description="View all your call sessions and detailed analytics here"
          />
        );
      case 'knowledge':
        return (
          <PlaceholderView
            title="Knowledge Base"
            description="Organize call resources and company knowledge here"
          />
        );
      case 'prompts':
        return (
          <PlaceholderView
            title="Prompts"
            description="Manage prompts for stronger AI assistance"
          />
        );
      case 'boxy':
        return (
          <PlaceholderView
            title="Boxy Controls"
            description="Configure assistant controls and preferences"
          />
        );
      case 'feedback':
        return <FeedbackView />;
      case 'history':
        return (
          <PlaceholderView
            title="Feedback History"
            description="Review feedback you have saved from previous sessions"
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Sidebar
          active={active}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onNavigate={(view) => {
            setActive(view);
            setSidebarOpen(false);
          }}
        />
        {sidebarOpen && (
          <button
            type="button"
            className={styles.backdrop}
            aria-label="Close navigation menu"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className={styles.mainLayout}>
          <Topbar
            userName={userNames[currentUser]}
            userEmail={userEmails[currentUser]}
            onLogout={() => setShowLogout(true)}
            onFeedback={() => setActive('feedback')}
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            users={['u1', 'u2']}
            currentUser={currentUser}
            onUserChange={handleUserChange}
          />

          <main className={styles.content}>
            {renderContent()}
          </main>
        </div>
      </div>

      {showLogout && (
        <LogoutModal
          onConfirm={handleLogout}
          onCancel={() => setShowLogout(false)}
        />
      )}
    </>
  );
}
