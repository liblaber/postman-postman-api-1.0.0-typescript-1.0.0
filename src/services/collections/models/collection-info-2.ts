// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const collectionInfo2: any = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  });
});

/**
 * An object that contains the collection's updated name and description.
 * @typedef  {CollectionInfo2} collectionInfo2 - An object that contains the collection's updated name and description. - An object that contains the collection's updated name and description.
 * @property {string} - The collection's updated name.
 * @property {string} - The collection's updated description.
 */
export type CollectionInfo2 = z.infer<typeof collectionInfo2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionInfo2Response: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionInfo2Request: any = z.lazy(() => {
  return z.object({ name: z.string().nullish(), description: z.string().nullish() }).transform((data) => ({
    name: data['name'],
    description: data['description'],
  }));
});
