// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const scimUserResourceMeta1 = z.lazy(() => {
  return z.object({
    resourceType: z.string().optional(),
    created: z.string().optional(),
    lastModified: z.string().optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef  {ScimUserResourceMeta1} scimUserResourceMeta1 - The response's non-standard meta information. - The response's non-standard meta information.
 * @property {string} - The resource type.
 * @property {string} - The date and time at which the team member was created.
 * @property {string} - The date and time at which the team member was last modified.
 */
export type ScimUserResourceMeta1 = z.infer<typeof scimUserResourceMeta1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const scimUserResourceMeta1Response = z.lazy(() => {
  return z
    .object({
      resourceType: z.string().optional(),
      created: z.string().optional(),
      lastModified: z.string().optional(),
    })
    .transform((data) => ({
      resourceType: data['resourceType'],
      created: data['created'],
      lastModified: data['lastModified'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const scimUserResourceMeta1Request = z.lazy(() => {
  return z
    .object({ resourceType: z.string().nullish(), created: z.string().nullish(), lastModified: z.string().nullish() })
    .transform((data) => ({
      resourceType: data['resourceType'],
      created: data['created'],
      lastModified: data['lastModified'],
    }));
});
