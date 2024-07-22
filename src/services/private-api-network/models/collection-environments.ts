// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const collectionEnvironments: any = z.lazy(() => {
  return z.object({
    _add: z.array(z.string()).optional(),
    _remove: z.array(z.string()).optional(),
  });
});

/**
 * The collection's updated environments.
 * @typedef  {CollectionEnvironments} collectionEnvironments - The collection's updated environments. - The collection's updated environments.
 * @property {string[]}
 * @property {string[]}
 */
export type CollectionEnvironments = z.infer<typeof collectionEnvironments>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionEnvironmentsResponse: any = z.lazy(() => {
  return z
    .object({
      $add: z.array(z.string()).optional(),
      $remove: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      _add: data['$add'],
      _remove: data['$remove'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionEnvironmentsRequest: any = z.lazy(() => {
  return z
    .object({ _add: z.array(z.string()).nullish(), _remove: z.array(z.string()).nullish() })
    .transform((data) => ({
      $add: data['_add'],
      $remove: data['_remove'],
    }));
});
