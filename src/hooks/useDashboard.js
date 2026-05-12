'use client';

import { useEffect, useMemo, useState } from 'react';
import { getDashboard, getCallStats, getCallHistory } from '@/lib/api';
import { getMockCalls, getMockProfile, getMockStats } from '@/lib/mockData';

function getFallbackData(userId) {
  return {
    profile: getMockProfile(userId),
    stats: getMockStats(userId),
    calls: getMockCalls(userId, 10),
    isMockData: true,
    userId,
  };
}

export function useDashboard(userId = 'u1', enabled = true) {
  const fallbackData = useMemo(() => getFallbackData(userId), [userId]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled) return;

    async function fetchData() {
      try {
        setError(null);

        // Fetch all data in parallel
        const [dashboardData, statsData, historyData] = await Promise.all([
          getDashboard(userId),
          getCallStats(userId),
          getCallHistory(10, userId),
        ]);

        const isMockData =
          dashboardData.source === 'mock' ||
          statsData.source === 'mock' ||
          historyData.source === 'mock';

        setData({
          profile: dashboardData.profile,
          stats: statsData,
          calls: historyData.calls || [],
          isMockData,
          userId,
        });
      } catch (err) {
        setError(err.message);
        setData(getFallbackData(userId));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [userId, enabled]);

  return {
    data: data?.userId === userId ? data : fallbackData,
    loading,
    error,
  };
}
