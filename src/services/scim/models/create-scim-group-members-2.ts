// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createScimGroupMembers2 = z.object({
  value: z.string().optional(),
  display: z.string().optional(),
});

/**
 * An object containing the group's assigned SCIM members.
 * @typedef  {CreateScimGroupMembers2} createScimGroupMembers2 - An object containing the group's assigned SCIM members. - An object containing the group's assigned SCIM members.
 * @property {string} - The user's SCIM ID.
 * @property {string} - The user's display name.
 */
export type CreateScimGroupMembers2 = z.infer<typeof createScimGroupMembers2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createScimGroupMembers2Response = z
  .object({
    value: z.string().optional(),
    display: z.string().optional(),
  })
  .transform((data) => ({
    value: data['value'],
    display: data['display'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createScimGroupMembers2Request = z
  .object({ value: z.string().nullish(), display: z.string().nullish() })
  .transform((data) => ({
    value: data['value'],
    display: data['display'],
  }));
