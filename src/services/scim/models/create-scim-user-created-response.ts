// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  createScimUserName2,
  createScimUserName2Request,
  createScimUserName2Response,
} from './create-scim-user-name-2';
import { createScimUserMeta, createScimUserMetaRequest, createScimUserMetaResponse } from './create-scim-user-meta';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createScimUserCreatedResponse = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    id: z.string().optional(),
    userName: z.string().optional(),
    name: createScimUserName2.optional(),
    externalId: z.string().optional(),
    active: z.boolean().optional(),
    meta: createScimUserMeta.optional(),
  });
});

/**
 *
 * @typedef  {CreateScimUserCreatedResponse} createScimUserCreatedResponse
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {string} - The user's SCIM ID.
 * @property {string} - The user's username.
 * @property {CreateScimUserName2}
 * @property {string} - The user's external ID.
 * @property {boolean} - If true, the user is active.
 * @property {CreateScimUserMeta} - The response's non-standard meta information.
 */
export type CreateScimUserCreatedResponse = z.infer<typeof createScimUserCreatedResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createScimUserCreatedResponseResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      userName: z.string().optional(),
      name: createScimUserName2Response.optional(),
      externalId: z.string().optional(),
      active: z.boolean().optional(),
      meta: createScimUserMetaResponse.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      id: data['id'],
      userName: data['userName'],
      name: data['name'],
      externalId: data['externalId'],
      active: data['active'],
      meta: data['meta'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createScimUserCreatedResponseRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).nullish(),
      id: z.string().nullish(),
      userName: z.string().nullish(),
      name: createScimUserName2Request.nullish(),
      externalId: z.string().nullish(),
      active: z.boolean().nullish(),
      meta: createScimUserMetaRequest.nullish(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      id: data['id'],
      userName: data['userName'],
      name: data['name'],
      externalId: data['externalId'],
      active: data['active'],
      meta: data['meta'],
    }));
});
