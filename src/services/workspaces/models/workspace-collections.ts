// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const workspaceCollections = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the collection.
 * @typedef  {WorkspaceCollections} workspaceCollections - Information about the collection. - Information about the collection.
 * @property {string} - The collection's ID.
 * @property {string} - The collection's name.
 * @property {string} - The collection's unique ID.
 */
export type WorkspaceCollections = z.infer<typeof workspaceCollections>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const workspaceCollectionsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      uid: data['uid'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const workspaceCollectionsRequest = z.lazy(() => {
  return z
    .object({ id: z.string().nullish(), name: z.string().nullish(), uid: z.string().nullish() })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      uid: data['uid'],
    }));
});
