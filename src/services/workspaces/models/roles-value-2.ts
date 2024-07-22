// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rolesValue2: any = z.lazy(() => {
  return z.object({
    id: z.string(),
    role: z.number(),
  });
});

/**
 * Information about the updated user or user group role.
 * @typedef  {RolesValue2} rolesValue2 - Information about the updated user or user group role. - Information about the updated user or user group role.
 * @property {string} - The user or user group ID.
 * @property {ValueRole2} - The workspace role's ID:
- `1` — Viewer. Can view, fork, and export workspace resources.
- `2` — Editor. Can create and edit workspace resources.
- `3` — Admin. Can manage workspace details and members.

 */
export type RolesValue2 = z.infer<typeof rolesValue2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rolesValue2Response: any = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      role: z.number(),
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
export const rolesValue2Request: any = z.lazy(() => {
  return z.object({ id: z.string().nullish(), role: z.number().nullish() }).transform((data) => ({
    id: data['id'],
    role: data['role'],
  }));
});
