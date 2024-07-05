// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getSecretTypesMeta = z.object({
  total: z.number().optional(),
});

/**
 *
 * @typedef  {GetSecretTypesMeta} getSecretTypesMeta
 * @property {number} - The total number of supported secrets.
 */
export type GetSecretTypesMeta = z.infer<typeof getSecretTypesMeta>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getSecretTypesMetaResponse = z
  .object({
    total: z.number().optional(),
  })
  .transform((data) => ({
    total: data['total'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getSecretTypesMetaRequest = z.object({ total: z.number().nullish() }).transform((data) => ({
  total: data['total'],
}));
