import { Action } from '@ngrx/store';

/**
 * @deprecated Since version 4.1. Will be deleted in version 5.0.
 */
export function toPayload(action: Action): any {
  return (action as any).payload;
}
