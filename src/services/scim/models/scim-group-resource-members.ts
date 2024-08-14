// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const scimGroupResourceMembers = z.lazy(() => {
  return z.object({
    value: z.string().optional(),
    display: z.string().optional(),
  });
});

/**
 * Information about the group's members.
 * @typedef  {ScimGroupResourceMembers} scimGroupResourceMembers - Information about the group's members. - Information about the group's members.
 * @property {string} - The resource value.
 * @property {string} - The resource's display name.
 */
export type ScimGroupResourceMembers = z.infer<typeof scimGroupResourceMembers>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const scimGroupResourceMembersResponse = z.lazy(() => {
  return z
    .object({
      value: z.string().optional(),
      display: z.string().optional(),
    })
    .transform((data) => ({
      value: data['value'],
      display: data['display'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const scimGroupResourceMembersRequest = z.lazy(() => {
  return z.object({ value: z.string().nullish(), display: z.string().nullish() }).transform((data) => ({
    value: data['value'],
    display: data['display'],
  }));
});
