import { getMockCalls, getMockProfile, getMockStats } from './mockData';

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';
const API_TIMEOUT_MS = 1500;

function timeoutAfter(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('API request timed out')), ms);
  });
}

// Helper for making API requests
async function apiCall(endpoint, options = {}) {
  if (!API_BASE_URL) {
    throw new Error('API base URL is not configured');
  }

  const headers = {
    'Content-Type': 'application/json',
    'x-user-id': options.userId || 'u1',
    ...options.headers,
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

  try {
    const response = await Promise.race([
      fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
        signal: controller.signal,
      }),
      timeoutAfter(API_TIMEOUT_MS),
    ]);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

function normalizeProfile(profile = {}) {
  return {
    ...profile,
    name:
      profile.name ||
      [profile.firstName, profile.lastName].filter(Boolean).join(' ') ||
      'Hintro User',
  };
}

function normalizeStats(stats = {}) {
  const lastSession = Array.isArray(stats.lastSession) ? stats.lastSession[0] : stats.lastSession;

  return {
    totalCalls: stats.totalCalls ?? stats.totalSessions ?? 0,
    totalDuration: stats.totalDuration ?? stats.averageDuration ?? 0,
    totalCustomers: stats.totalCustomers ?? stats.totalAIInteractions ?? 0,
    averageRating: stats.averageRating ?? 0,
    lastSession: lastSession || null,
  };
}

function normalizeCallSession(session = {}) {
  const duration =
    session.duration ??
    session.total_duration_seconds ??
    (session.started_at && session.ended_at
      ? Math.max(0, Math.round((new Date(session.ended_at) - new Date(session.started_at)) / 1000))
      : 0);

  return {
    id: session.id || session._id,
    customerName: session.customerName || session.client || 'Unknown Client',
    duration,
    timestamp: session.timestamp || session.started_at || session.createdAt,
    rating: session.rating || Math.min(5, Math.max(1, session.ai_interactions || 0)),
    description: session.description,
    status: session.status,
  };
}

// Auth Endpoints
export async function getProfile(userId = 'u1') {
  try {
    const profile = await apiCall('/api/auth/profile', { userId });
    return { profile: normalizeProfile(profile) };
  } catch {
    return { profile: normalizeProfile(getMockProfile(userId)), source: 'mock' };
  }
}

export async function getDashboard(userId = 'u1') {
  try {
    const dashboard = await apiCall('/api/auth/dashboard', { userId });
    return {
      ...dashboard,
      profile: normalizeProfile(dashboard.profile || dashboard.user),
    };
  } catch {
    return { profile: normalizeProfile(getMockProfile(userId)), source: 'mock' };
  }
}

// Call Sessions Endpoints
export async function getCallStats(userId = 'u1') {
  try {
    const stats = await apiCall('/api/call-sessions/stats', { userId });
    return normalizeStats(stats);
  } catch {
    return { ...normalizeStats(getMockStats(userId)), source: 'mock' };
  }
}

export async function getCallHistory(limit = 10, userId = 'u1') {
  try {
    const history = await apiCall(`/api/call-sessions?limit=${limit}`, { userId });
    const sessions = history.calls || history.callSessions || [];
    return {
      calls: sessions.map(normalizeCallSession),
      pagination: history.pagination,
    };
  } catch {
    return { calls: getMockCalls(userId, limit), source: 'mock' };
  }
}

// Health Check
export async function healthCheck() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.ok;
  } catch (error) {
    return false;
  }
}
