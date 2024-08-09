// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const transformCollectionToOpenApi = z.lazy(() => {
  return z.object({
    output: z.string().optional(),
  });
});

/**
 *
 * @typedef  {TransformCollectionToOpenApi} transformCollectionToOpenApi
 * @property {string} - The collection's transformed output, in a stringified OpenAPI format.
 */
export type TransformCollectionToOpenApi = z.infer<typeof transformCollectionToOpenApi>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const transformCollectionToOpenApiResponse = z.lazy(() => {
  return z
    .object({
      output: z.string().optional(),
    })
    .transform((data) => ({
      output: data['output'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const transformCollectionToOpenApiRequest = z.lazy(() => {
  return z.object({ output: z.string().nullish() }).transform((data) => ({
    output: data['output'],
  }));
});
