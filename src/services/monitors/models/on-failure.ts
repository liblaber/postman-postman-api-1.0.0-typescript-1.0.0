// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const onFailure = z.object({
  email: z.string().optional(),
});

/**
 *
 * @typedef  {OnFailure} onFailure
 * @property {string} - The email address of the user to notify on monitor failure.
 */
export type OnFailure = z.infer<typeof onFailure>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const onFailureResponse = z
  .object({
    email: z.string().optional(),
  })
  .transform((data) => ({
    email: data['email'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const onFailureRequest = z.object({ email: z.string().nullish() }).transform((data) => ({
  email: data['email'],
}));
