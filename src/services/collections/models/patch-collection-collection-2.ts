// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const patchCollectionCollection2 = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
  });
});

/**
 *
 * @typedef  {PatchCollectionCollection2} patchCollectionCollection2
 * @property {string} - The collection's ID.
 * @property {string} - The collection's updated name.
 * @property {string} - The collection's updated description.
 */
export type PatchCollectionCollection2 = z.infer<typeof patchCollectionCollection2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const patchCollectionCollection2Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      description: data['description'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const patchCollectionCollection2Request = z.lazy(() => {
  return z
    .object({ id: z.string().nullish(), name: z.string().nullish(), description: z.string().nullish() })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      description: data['description'],
    }));
});
