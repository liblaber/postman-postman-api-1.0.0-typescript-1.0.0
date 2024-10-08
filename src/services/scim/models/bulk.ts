// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const bulk = z.lazy(() => {
  return z.object({
    maxOperations: z.number().optional(),
    maxPayloadSize: z.number().optional(),
    supported: z.boolean().optional(),
  });
});

/**
 * Information about bulk configuration.
 * @typedef  {Bulk} bulk - Information about bulk configuration. - Information about bulk configuration.
 * @property {number} - The total number of maximum operations allowed for bulk operations.
 * @property {number} - The maximum payload allowed for bulk operations.
 * @property {boolean} - If true, the feature is supported.
 */
export type Bulk = z.infer<typeof bulk>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bulkResponse = z.lazy(() => {
  return z
    .object({
      maxOperations: z.number().optional(),
      maxPayloadSize: z.number().optional(),
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      maxOperations: data['maxOperations'],
      maxPayloadSize: data['maxPayloadSize'],
      supported: data['supported'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bulkRequest = z.lazy(() => {
  return z
    .object({
      maxOperations: z.number().nullish(),
      maxPayloadSize: z.number().nullish(),
      supported: z.boolean().nullish(),
    })
    .transform((data) => ({
      maxOperations: data['maxOperations'],
      maxPayloadSize: data['maxPayloadSize'],
      supported: data['supported'],
    }));
});
