// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pullCollectionChangesCollection: any = z.lazy(() => {
  return z.object({
    destinationId: z.string().optional(),
    sourceId: z.string().optional(),
  });
});

/**
 * Information about the updated collection fork.
 * @typedef  {PullCollectionChangesCollection} pullCollectionChangesCollection - Information about the updated collection fork. - Information about the updated collection fork.
 * @property {string} - The ID of the forked collection the changes were pulled into.
 * @property {string} - The ID of the source collection the changes were pulled from.
 */
export type PullCollectionChangesCollection = z.infer<typeof pullCollectionChangesCollection>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pullCollectionChangesCollectionResponse: any = z.lazy(() => {
  return z
    .object({
      destinationId: z.string().optional(),
      sourceId: z.string().optional(),
    })
    .transform((data) => ({
      destinationId: data['destinationId'],
      sourceId: data['sourceId'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const pullCollectionChangesCollectionRequest: any = z.lazy(() => {
  return z.object({ destinationId: z.string().nullish(), sourceId: z.string().nullish() }).transform((data) => ({
    destinationId: data['destinationId'],
    sourceId: data['sourceId'],
  }));
});
