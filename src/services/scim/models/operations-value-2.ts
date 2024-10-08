// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const operationsValue2 = z.lazy(() => {
  return z.object({
    active: z.boolean().optional(),
  });
});

/**
 * The performed operation's value.
 * @typedef  {OperationsValue2} operationsValue2 - The performed operation's value. - The performed operation's value.
 * @property {boolean} - Sets the user's `active` state:
- `true` — Activates the user. This lets them authenticate in to your Postman team.
- `false` — Removes the user from your Postman team and deactivates the account. This blocks the user from authenticating in to Postman.

 */
export type OperationsValue2 = z.infer<typeof operationsValue2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const operationsValue2Response = z.lazy(() => {
  return z
    .object({
      active: z.boolean().optional(),
    })
    .transform((data) => ({
      active: data['active'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const operationsValue2Request = z.lazy(() => {
  return z.object({ active: z.boolean().nullish() }).transform((data) => ({
    active: data['active'],
  }));
});
