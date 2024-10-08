// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getCollectionForksData = z.lazy(() => {
  return z.object({
    createdAt: z.string().optional(),
    createdBy: z.string().optional(),
    forkId: z.string().optional(),
    forkName: z.string().optional(),
  });
});

/**
 * Information about the forked collection.
 * @typedef  {GetCollectionForksData} getCollectionForksData - Information about the forked collection. - Information about the forked collection.
 * @property {string} - The date and time at which the fork was created.
 * @property {string} - The user who created the collection fork.
 * @property {string} - The forked collection's ID.
 * @property {string} - The forked collection's label.
 */
export type GetCollectionForksData = z.infer<typeof getCollectionForksData>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getCollectionForksDataResponse = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      forkId: z.string().optional(),
      forkName: z.string().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      forkId: data['forkId'],
      forkName: data['forkName'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getCollectionForksDataRequest = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().nullish(),
      createdBy: z.string().nullish(),
      forkId: z.string().nullish(),
      forkName: z.string().nullish(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      forkId: data['forkId'],
      forkName: data['forkName'],
    }));
});
