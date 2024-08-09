// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const slots = z.lazy(() => {
  return z.object({
    available: z.number().optional(),
    consumed: z.number().optional(),
    total: z.number().optional(),
    unbilled: z.number().optional(),
  });
});

/**
 * Information about the team's slots.
 * @typedef  {Slots} slots - Information about the team's slots. - Information about the team's slots.
 * @property {number} - The number of the team's available slots.
 * @property {number} - The number of currently-billed team members.
 * @property {number} - The total number of slots available to the team.
 * @property {number} - The number of unbilled slots if [auto-flex billing](https://learning.postman.com/auto-flex-policy/) is available.
 */
export type Slots = z.infer<typeof slots>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const slotsResponse = z.lazy(() => {
  return z
    .object({
      available: z.number().optional(),
      consumed: z.number().optional(),
      total: z.number().optional(),
      unbilled: z.number().optional(),
    })
    .transform((data) => ({
      available: data['available'],
      consumed: data['consumed'],
      total: data['total'],
      unbilled: data['unbilled'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const slotsRequest = z.lazy(() => {
  return z
    .object({
      available: z.number().nullish(),
      consumed: z.number().nullish(),
      total: z.number().nullish(),
      unbilled: z.number().nullish(),
    })
    .transform((data) => ({
      available: data['available'],
      consumed: data['consumed'],
      total: data['total'],
      unbilled: data['unbilled'],
    }));
});
