// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const versionCollections = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    type: z.string().optional(),
  });
});

/**
 *
 * @typedef  {VersionCollections} versionCollections
 * @property {string} - The collection's ID.
 * @property {string} - The collection's name.
 */
export type VersionCollections = z.infer<typeof versionCollections>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const versionCollectionsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const versionCollectionsRequest = z.lazy(() => {
  return z.object({ id: z.string().nullish(), type: z.string().nullish() }).transform((data) => ({
    id: data['id'],
    type: data['type'],
  }));
});
