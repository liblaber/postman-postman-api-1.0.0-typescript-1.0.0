// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const importOpenApiDefinitionCollections = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  uid: z.string().optional(),
});

/**
 *
 * @typedef  {ImportOpenApiDefinitionCollections} importOpenApiDefinitionCollections
 * @property {string} - The collection's ID.
 * @property {string} - The collection's name.
 * @property {string} - The collection's unique ID.
 */
export type ImportOpenApiDefinitionCollections = z.infer<typeof importOpenApiDefinitionCollections>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const importOpenApiDefinitionCollectionsResponse = z
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

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const importOpenApiDefinitionCollectionsRequest = z
  .object({ id: z.string().nullish(), name: z.string().nullish(), uid: z.string().nullish() })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    uid: data['uid'],
  }));
