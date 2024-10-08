// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createApiVersion2Collections = z.lazy(() => {
  return z.object({
    filePath: z.string().optional(),
  });
});

/**
 * Information about the collection.
 * @typedef  {CreateApiVersion2Collections} createApiVersion2Collections - Information about the collection. - Information about the collection.
 * @property {string} - Path to a collection in the Git repository.
 */
export type CreateApiVersion2Collections = z.infer<typeof createApiVersion2Collections>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiVersion2CollectionsResponse = z.lazy(() => {
  return z
    .object({
      filePath: z.string().optional(),
    })
    .transform((data) => ({
      filePath: data['filePath'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiVersion2CollectionsRequest = z.lazy(() => {
  return z.object({ filePath: z.string().nullish() }).transform((data) => ({
    filePath: data['filePath'],
  }));
});
