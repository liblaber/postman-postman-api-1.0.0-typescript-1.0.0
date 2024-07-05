// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const versionSchemas = z.object({
  id: z.string().optional(),
  type_: z.string().optional(),
});

/**
 *
 * @typedef  {VersionSchemas} versionSchemas
 * @property {string} - The schema's ID.
 * @property {string} - The schema type.
 */
export type VersionSchemas = z.infer<typeof versionSchemas>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const versionSchemasResponse = z
  .object({
    id: z.string().optional(),
    type: z.string().optional(),
  })
  .transform((data) => ({
    id: data['id'],
    type_: data['type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const versionSchemasRequest = z
  .object({ id: z.string().nullish(), type_: z.string().nullish() })
  .transform((data) => ({
    id: data['id'],
    type: data['type_'],
  }));
