// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createApiVersion3Collections: any = z.lazy(() => {
  return z.object({
    filePath: z.string().optional(),
  });
});

/**
 * Information about the collection.
 * @typedef  {CreateApiVersion3Collections} createApiVersion3Collections - Information about the collection. - Information about the collection.
 * @property {string} - The path to the collection in the Git repository.
 */
export type CreateApiVersion3Collections = z.infer<typeof createApiVersion3Collections>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiVersion3CollectionsResponse: any = z.lazy(() => {
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
export const createApiVersion3CollectionsRequest: any = z.lazy(() => {
  return z.object({ filePath: z.string().nullish() }).transform((data) => ({
    filePath: data['filePath'],
  }));
});
