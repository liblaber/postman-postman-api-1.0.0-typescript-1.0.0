// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const requestBody = z.lazy(() => {
  return z.object({
    mode: z.string().optional(),
    data: z.string().optional(),
  });
});

/**
 * The request's body information.
 * @typedef  {RequestBody} requestBody - The request's body information. - The request's body information.
 * @property {string} - The request body's media type (mode).
 * @property {string} - The request body's contents.
 */
export type RequestBody = z.infer<typeof requestBody>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const requestBodyResponse = z.lazy(() => {
  return z
    .object({
      mode: z.string().optional(),
      data: z.string().optional(),
    })
    .transform((data) => ({
      mode: data['mode'],
      data: data['data'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const requestBodyRequest = z.lazy(() => {
  return z.object({ mode: z.string().nullish(), data: z.string().nullish() }).transform((data) => ({
    mode: data['mode'],
    data: data['data'],
  }));
});
