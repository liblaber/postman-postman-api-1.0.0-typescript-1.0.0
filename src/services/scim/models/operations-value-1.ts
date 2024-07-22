// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const operationsValue1: any = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    displayName: z.string().optional(),
  });
});

/**
 * The performed operation's value.
 * @typedef  {OperationsValue1} operationsValue1 - The performed operation's value. - The performed operation's value.
 * @property {string} - The group's ID.
 * @property {string} - The group's name.
 */
export type OperationsValue1 = z.infer<typeof operationsValue1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const operationsValue1Response: any = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      displayName: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      displayName: data['displayName'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const operationsValue1Request: any = z.lazy(() => {
  return z.object({ id: z.string().nullish(), displayName: z.string().nullish() }).transform((data) => ({
    id: data['id'],
    displayName: data['displayName'],
  }));
});
