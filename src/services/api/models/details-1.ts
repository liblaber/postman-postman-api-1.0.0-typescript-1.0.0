// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { details1Resources, details1ResourcesRequest, details1ResourcesResponse } from './details-1-resources';

/**
 * The shape of the model inside the application code - what the users use
 */
export const details1 = z.object({
  resources: z.array(details1Resources).optional(),
});

/**
 * Information about the task's resources.
 * @typedef  {Details1} details1 - Information about the task's resources. - Information about the task's resources.
 * @property {Details1Resources[]}
 */
export type Details1 = z.infer<typeof details1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const details1Response = z
  .object({
    resources: z.array(details1ResourcesResponse).optional(),
  })
  .transform((data) => ({
    resources: data['resources'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const details1Request = z
  .object({ resources: z.array(details1ResourcesRequest).nullish() })
  .transform((data) => ({
    resources: data['resources'],
  }));
