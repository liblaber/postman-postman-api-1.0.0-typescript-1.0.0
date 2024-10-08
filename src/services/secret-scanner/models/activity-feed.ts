// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const activityFeed = z.lazy(() => {
  return z.object({
    resolvedAt: z.string().optional(),
    resolvedBy: z.number().optional(),
    status: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {ActivityFeed} activityFeed   
 * @property {string} - The date and time at which the resolution status was last updated.
 * @property {number} - The ID of the user that updated the secret's resolution status.
 * @property {ActivityFeedStatus} - The secret's current resolution status:
- `ACTIVE` — The secret is active.
- `FALSE_POSITIVE` — The discovered secret is not an actual secret.
- `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue.
- `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

 */
export type ActivityFeed = z.infer<typeof activityFeed>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const activityFeedResponse = z.lazy(() => {
  return z
    .object({
      resolvedAt: z.string().optional(),
      resolvedBy: z.number().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      resolvedAt: data['resolvedAt'],
      resolvedBy: data['resolvedBy'],
      status: data['status'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const activityFeedRequest = z.lazy(() => {
  return z
    .object({ resolvedAt: z.string().nullish(), resolvedBy: z.number().nullish(), status: z.string().nullish() })
    .transform((data) => ({
      resolvedAt: data['resolvedAt'],
      resolvedBy: data['resolvedBy'],
      status: data['status'],
    }));
});
