/**
 * Debounced patch sender that batches patches before sending to the server.
 * This matches the Phoenix backend's own debouncing for optimal performance.
 */

import type { State } from '../state';

type PatchCallback = (runId: string, patch: Partial<State>) => Promise<void>;

interface PendingPatch {
  patch: Partial<State>;
  timer: ReturnType<typeof setTimeout> | null;
}

const DEBOUNCE_MS = 150;

// Store pending patches per run
const pendingPatches = new Map<string, PendingPatch>();

/**
 * Deep merge two objects, with right-side values taking precedence.
 */
function deepMerge<T extends Record<string, unknown>>(
  target: T,
  source: Partial<T>
): T {
  const result = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const sourceValue = source[key];
      const targetValue = result[key];

      if (
        sourceValue !== null &&
        typeof sourceValue === 'object' &&
        !Array.isArray(sourceValue) &&
        targetValue !== null &&
        typeof targetValue === 'object' &&
        !Array.isArray(targetValue)
      ) {
        result[key] = deepMerge(
          targetValue as Record<string, unknown>,
          sourceValue as Record<string, unknown>
        ) as T[Extract<keyof T, string>];
      } else {
        result[key] = sourceValue as T[Extract<keyof T, string>];
      }
    }
  }

  return result;
}

/**
 * Queue a patch to be sent to the server.
 * Patches are accumulated and sent after a debounce period.
 *
 * @param runId - The ID of the run to patch
 * @param patch - The patch to apply
 * @param sendFn - The function to call when sending (e.g., channel.sendPatch or API call)
 */
export function sendPatch(
  runId: string,
  patch: Partial<State>,
  sendFn: PatchCallback
): void {
  const existing = pendingPatches.get(runId);

  if (existing) {
    // Merge with existing pending patch
    existing.patch = deepMerge(existing.patch as Record<string, unknown>, patch as Record<string, unknown>) as Partial<State>;

    // Cancel existing timer
    if (existing.timer) {
      clearTimeout(existing.timer);
    }
  } else {
    // Create new pending patch entry
    pendingPatches.set(runId, {
      patch: { ...patch },
      timer: null,
    });
  }

  // Start new debounce timer
  const pending = pendingPatches.get(runId)!;
  pending.timer = setTimeout(async () => {
    const patchToSend = pending.patch;
    pendingPatches.delete(runId);

    try {
      await sendFn(runId, patchToSend);
    } catch (error) {
      console.error('Failed to send patch:', error);
      // Could implement retry logic here
    }
  }, DEBOUNCE_MS);
}

/**
 * Immediately flush any pending patches for a run.
 * Useful when navigating away or the component unmounts.
 */
export async function flushPatch(
  runId: string,
  sendFn: PatchCallback
): Promise<void> {
  const existing = pendingPatches.get(runId);

  if (existing) {
    // Cancel the timer
    if (existing.timer) {
      clearTimeout(existing.timer);
    }

    const patchToSend = existing.patch;
    pendingPatches.delete(runId);

    // Send immediately
    await sendFn(runId, patchToSend);
  }
}

/**
 * Cancel any pending patches for a run without sending.
 */
export function cancelPatch(runId: string): void {
  const existing = pendingPatches.get(runId);

  if (existing) {
    if (existing.timer) {
      clearTimeout(existing.timer);
    }
    pendingPatches.delete(runId);
  }
}

/**
 * Check if there are pending patches for a run.
 */
export function hasPendingPatch(runId: string): boolean {
  return pendingPatches.has(runId);
}

/**
 * Create a bound patch sender for a specific run.
 * This is convenient for use within components.
 */
export function createPatchSender(
  runId: string,
  sendFn: PatchCallback
): (patch: Partial<State>) => void {
  return (patch: Partial<State>) => sendPatch(runId, patch, sendFn);
}

