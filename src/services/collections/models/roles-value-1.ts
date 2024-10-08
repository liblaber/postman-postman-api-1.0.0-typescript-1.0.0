// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rolesValue1 = z.lazy(() => {
  return z.object({
    id: z.number(),
    role: z.string(),
  });
});

/**
 * Information about the updated role.
 * @typedef  {RolesValue1} rolesValue1 - Information about the updated role. - Information about the updated role.
 * @property {number} - The user, group, or team's ID.
 * @property {ValueRole1} - The role type:
- `VIEWER` — Can view, fork, and export collections.
- `EDITOR` — Can edit collections directly.
 */
export type RolesValue1 = z.infer<typeof rolesValue1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rolesValue1Response = z.lazy(() => {
  return z
    .object({
      id: z.number(),
      role: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      role: data['role'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rolesValue1Request = z.lazy(() => {
  return z.object({ id: z.number().nullish(), role: z.string().nullish() }).transform((data) => ({
    id: data['id'],
    role: data['role'],
  }));
});
