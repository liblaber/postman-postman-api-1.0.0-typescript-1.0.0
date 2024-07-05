// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const onError = z.object({
  email: z.string().optional(),
});

/**
 *
 * @typedef  {OnError} onError
 * @property {string} - The email address of the user to notify on monitor error.
 */
export type OnError = z.infer<typeof onError>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const onErrorResponse = z
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
export const onErrorRequest = z.object({ email: z.string().nullish() }).transform((data) => ({
  email: data['email'],
}));
