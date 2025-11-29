/**
 * React hook for real-time run synchronization via Phoenix Channels.
 */

import { useEffect, useRef, useCallback, useState } from 'react';
import { Socket, Channel } from 'phoenix';
import { getAuthToken } from './client';
import type { State } from '../state';

const SOCKET_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:4000/socket';

export interface RunUpdate {
  revision: number;
  data: Partial<State>;
}

export interface UseRunChannelOptions {
  onUpdate?: (update: RunUpdate) => void;
  onError?: (error: unknown) => void;
  onJoin?: (state: RunUpdate) => void;
}

export interface UseRunChannelReturn {
  isConnected: boolean;
  currentRevision: number | null;
  sendPatch: (patch: Partial<State>) => Promise<{ revision: number }>;
  getState: () => Promise<RunUpdate>;
  disconnect: () => void;
}

/**
 * Hook to connect to a run's real-time channel.
 */
export function useRunChannel(
  runId: string | null,
  options: UseRunChannelOptions = {}
): UseRunChannelReturn {
  const { onUpdate, onError, onJoin } = options;

  const socketRef = useRef<Socket | null>(null);
  const channelRef = useRef<Channel | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [currentRevision, setCurrentRevision] = useState<number | null>(null);

  // Connect to the socket and channel
  useEffect(() => {
    if (!runId) {
      return;
    }

    const token = getAuthToken();
    if (!token) {
      onError?.(new Error('Not authenticated'));
      return;
    }

    // Create socket connection
    const socket = new Socket(SOCKET_URL, {
      params: { token },
    });

    socket.connect();
    socketRef.current = socket;

    // Join the run channel
    const channel = socket.channel(`run:${runId}`, {});
    channelRef.current = channel;

    channel
      .join()
      .receive('ok', (response: RunUpdate) => {
        setIsConnected(true);
        setCurrentRevision(response.revision);
        onJoin?.(response);
      })
      .receive('error', (response) => {
        setIsConnected(false);
        onError?.(response);
      });

    // Listen for updates
    channel.on('update', (payload: RunUpdate) => {
      setCurrentRevision(payload.revision);
      onUpdate?.(payload);
    });

    // Cleanup
    return () => {
      channel.leave();
      socket.disconnect();
      setIsConnected(false);
      setCurrentRevision(null);
    };
  }, [runId, onUpdate, onError, onJoin]);

  // Send a patch to the server
  const sendPatch = useCallback(
    (patch: Partial<State>): Promise<{ revision: number }> => {
      return new Promise((resolve, reject) => {
        if (!channelRef.current || !isConnected) {
          reject(new Error('Not connected to channel'));
          return;
        }

        channelRef.current
          .push('patch', { patch })
          .receive('ok', (response: { revision: number }) => {
            setCurrentRevision(response.revision);
            resolve(response);
          })
          .receive('error', (response) => {
            reject(response);
          })
          .receive('timeout', () => {
            reject(new Error('Timeout'));
          });
      });
    },
    [isConnected]
  );

  // Get the current state from the server
  const getState = useCallback((): Promise<RunUpdate> => {
    return new Promise((resolve, reject) => {
      if (!channelRef.current || !isConnected) {
        reject(new Error('Not connected to channel'));
        return;
      }

      channelRef.current
        .push('get_state', {})
        .receive('ok', (response: RunUpdate) => {
          setCurrentRevision(response.revision);
          resolve(response);
        })
        .receive('error', (response) => {
          reject(response);
        })
        .receive('timeout', () => {
          reject(new Error('Timeout'));
        });
    });
  }, [isConnected]);

  // Disconnect from the channel
  const disconnect = useCallback(() => {
    channelRef.current?.leave();
    socketRef.current?.disconnect();
    setIsConnected(false);
    setCurrentRevision(null);
  }, []);

  return {
    isConnected,
    currentRevision,
    sendPatch,
    getState,
    disconnect,
  };
}

