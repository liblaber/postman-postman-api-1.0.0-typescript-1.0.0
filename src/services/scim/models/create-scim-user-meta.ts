// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createScimUserMeta = z.lazy(() => {
  return z.object({
    created: z.string().optional(),
    lastModified: z.string().optional(),
    resourceType: z.string().optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef  {CreateScimUserMeta} createScimUserMeta - The response's non-standard meta information. - The response's non-standard meta information.
 * @property {string} - The date and time at which the user was created.
 * @property {string} - The date and time at which the user was last modified.
 * @property {MetaResourceType} - The SCIM resource type.
 */
export type CreateScimUserMeta = z.infer<typeof createScimUserMeta>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createScimUserMetaResponse = z.lazy(() => {
  return z
    .object({
      created: z.string().optional(),
      lastModified: z.string().optional(),
      resourceType: z.string().optional(),
    })
    .transform((data) => ({
      created: data['created'],
      lastModified: data['lastModified'],
      resourceType: data['resourceType'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createScimUserMetaRequest = z.lazy(() => {
  return z
    .object({ created: z.string().nullish(), lastModified: z.string().nullish(), resourceType: z.string().nullish() })
    .transform((data) => ({
      created: data['created'],
      lastModified: data['lastModified'],
      resourceType: data['resourceType'],
    }));
});
