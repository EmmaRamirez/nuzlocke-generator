/**
 * API module for communicating with the Phoenix backend.
 */

// Client utilities
export {
  api,
  apiRequest,
  ApiError,
  setAuthToken,
  getAuthToken,
  clearAuthToken,
} from './client';

// Authentication
export {
  register,
  login,
  logout,
  getCurrentUser,
  isAuthenticated,
  type User,
  type AuthResponse,
} from './auth';

// Runs
export {
  listRuns,
  getRun,
  createRun,
  updateRun,
  patchRun,
  deleteRun,
  type Run,
  type RunSummary,
} from './runs';

// Real-time
export {
  useRunChannel,
  type RunUpdate,
  type UseRunChannelOptions,
  type UseRunChannelReturn,
} from './useRunChannel';

// Patch utilities
export {
  sendPatch,
  flushPatch,
  cancelPatch,
  hasPendingPatch,
  createPatchSender,
} from './patchSender';

