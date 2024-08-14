// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createApiVersion3Schemas = z.lazy(() => {
  return z.object({
    directoryPath: z.string().optional(),
  });
});

/**
 * Information about the schema.
 * @typedef  {CreateApiVersion3Schemas} createApiVersion3Schemas - Information about the schema. - Information about the schema.
 * @property {string} - The path to the root directory where schemas are stored in the Git repository.
 */
export type CreateApiVersion3Schemas = z.infer<typeof createApiVersion3Schemas>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiVersion3SchemasResponse = z.lazy(() => {
  return z
    .object({
      directoryPath: z.string().optional(),
    })
    .transform((data) => ({
      directoryPath: data['directoryPath'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiVersion3SchemasRequest = z.lazy(() => {
  return z.object({ directoryPath: z.string().nullish() }).transform((data) => ({
    directoryPath: data['directoryPath'],
  }));
});
