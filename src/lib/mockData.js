const now = Date.now();

export const mockUsers = {
  u1: {
    id: 'u1',
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
    login_method: 'google',
    status: 'active',
    is_hintro_admin: false,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-06-20T14:30:00Z',
  },
  u2: {
    id: 'u2',
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
    login_method: 'google',
    status: 'active',
    is_hintro_admin: false,
    createdAt: '2024-02-12T09:15:00Z',
    updatedAt: '2024-06-22T12:05:00Z',
  },
};

export const mockCalls = {
  u1: [],
  u2: [
    {
      id: 'c-201',
      customerName: 'Acme Corp',
      duration: 1535,
      timestamp: new Date(now - 42 * 60 * 1000).toISOString(),
      rating: 4.7,
    },
    {
      id: 'c-202',
      customerName: 'Summit Foods',
      duration: 702,
      timestamp: new Date(now - 4 * 60 * 60 * 1000).toISOString(),
      rating: 4.3,
    },
    {
      id: 'c-203',
      customerName: 'Nimbus Logistics',
      duration: 975,
      timestamp: new Date(now - 2 * 24 * 60 * 60 * 1000).toISOString(),
      rating: 4.5,
    },
  ],
};

export function getMockProfile(userId = 'u1') {
  return mockUsers[userId] || mockUsers.u1;
}

export function getMockCalls(userId = 'u1', limit = 10) {
  return (mockCalls[userId] || []).slice(0, limit);
}

export function getMockStats(userId = 'u1') {
  const calls = mockCalls[userId] || [];
  const totalDuration = calls.reduce((total, call) => total + call.duration, 0);
  const totalAIInteractions = calls.reduce((total, call) => total + Math.max(1, Math.round(call.rating)), 0);
  const ratingTotal = calls.reduce((total, call) => total + (call.rating || 0), 0);

  return {
    totalCalls: calls.length,
    totalDuration,
    totalCustomers: totalAIInteractions,
    averageRating: calls.length ? ratingTotal / calls.length : 0,
    lastSession: calls[0]?.timestamp || null,
  };
}
