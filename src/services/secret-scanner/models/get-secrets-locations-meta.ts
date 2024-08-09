// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { activityFeed, activityFeedRequest, activityFeedResponse } from './activity-feed';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getSecretsLocationsMeta = z.lazy(() => {
  return z.object({
    activityFeed: z.array(activityFeed).optional(),
    cursor: z.string().optional(),
    limit: z.number().optional(),
    nextCursor: z.string().optional().nullable(),
    obfuscatedSecret: z.string().optional(),
    secretHash: z.string().optional(),
    secretType: z.string().optional(),
    total: z.number().optional(),
  });
});

/**
 *
 * @typedef  {GetSecretsLocationsMeta} getSecretsLocationsMeta
 * @property {ActivityFeed[]} - The history of the secret's resolution status changes.
 * @property {string} - The pointer to the first record of the set of paginated results.
 * @property {number} - The maximum number of rows to return in the response.
 * @property {string} - The Base64-encoded value that points to the next record in the results set.
 * @property {string} - The secret's obfuscated value.
 * @property {string} - The secret's SHA-256 hash.
 * @property {string} - The type of thesecret.
 * @property {number} - The total number of discovered secret locations.
 */
export type GetSecretsLocationsMeta = z.infer<typeof getSecretsLocationsMeta>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getSecretsLocationsMetaResponse = z.lazy(() => {
  return z
    .object({
      activityFeed: z.array(activityFeedResponse).optional(),
      cursor: z.string().optional(),
      limit: z.number().optional(),
      nextCursor: z.string().optional().nullable(),
      obfuscatedSecret: z.string().optional(),
      secretHash: z.string().optional(),
      secretType: z.string().optional(),
      total: z.number().optional(),
    })
    .transform((data) => ({
      activityFeed: data['activityFeed'],
      cursor: data['cursor'],
      limit: data['limit'],
      nextCursor: data['nextCursor'],
      obfuscatedSecret: data['obfuscatedSecret'],
      secretHash: data['secretHash'],
      secretType: data['secretType'],
      total: data['total'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getSecretsLocationsMetaRequest = z.lazy(() => {
  return z
    .object({
      activityFeed: z.array(activityFeedRequest).nullish(),
      cursor: z.string().nullish(),
      limit: z.number().nullish(),
      nextCursor: z.string().nullish(),
      obfuscatedSecret: z.string().nullish(),
      secretHash: z.string().nullish(),
      secretType: z.string().nullish(),
      total: z.number().nullish(),
    })
    .transform((data) => ({
      activityFeed: data['activityFeed'],
      cursor: data['cursor'],
      limit: data['limit'],
      nextCursor: data['nextCursor'],
      obfuscatedSecret: data['obfuscatedSecret'],
      secretHash: data['secretHash'],
      secretType: data['secretType'],
      total: data['total'],
    }));
});
