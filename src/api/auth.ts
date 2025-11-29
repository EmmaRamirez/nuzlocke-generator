/**
 * Authentication API functions.
 */

import { api, setAuthToken, clearAuthToken, getAuthToken } from './client';

export interface User {
  id: string;
  email: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface MeResponse {
  user: User;
}

/**
 * Register a new user account.
 */
export async function register(email: string, password: string): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>('/api/auth/register', { email, password });
  setAuthToken(response.token);
  return response;
}

/**
 * Log in with email and password.
 */
export async function login(email: string, password: string): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>(`/api/auth/login`, { email, password });
  setAuthToken(response.token);
  return response;
}

/**
 * Log out the current user.
 */
export function logout(): void {
  clearAuthToken();
}

/**
 * Get the current authenticated user.
 */
export async function getCurrentUser(): Promise<User | null> {
  const token = getAuthToken();
  if (!token) {
    return null;
  }

  try {
    const response = await api.get<MeResponse>('/api/auth/me');
    return response.user;
  } catch {
    clearAuthToken();
    return null;
  }
}

/**
 * Check if user is authenticated.
 */
export function isAuthenticated(): boolean {
  return !!getAuthToken();
}

