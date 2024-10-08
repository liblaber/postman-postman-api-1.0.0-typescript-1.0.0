// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  getScimGroupResourceMembers,
  getScimGroupResourceMembersRequest,
  getScimGroupResourceMembersResponse,
} from './get-scim-group-resource-members';
import {
  getScimGroupResourceMeta,
  getScimGroupResourceMetaRequest,
  getScimGroupResourceMetaResponse,
} from './get-scim-group-resource-meta';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getScimGroupResource = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    id: z.string().optional(),
    userName: z.string().optional(),
    members: z.array(getScimGroupResourceMembers).optional(),
    externalId: z.string().optional(),
    meta: getScimGroupResourceMeta.optional(),
  });
});

/**
 *
 * @typedef  {GetScimGroupResource} getScimGroupResource
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {string} - The group's SCIM ID.
 * @property {string} - The group's display name.
 * @property {GetScimGroupResourceMembers[]} - Information about the group's members.
 * @property {string} - The group's external ID.
 * @property {GetScimGroupResourceMeta} - The response's non-standard meta information.
 */
export type GetScimGroupResource = z.infer<typeof getScimGroupResource>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getScimGroupResourceResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      userName: z.string().optional(),
      members: z.array(getScimGroupResourceMembersResponse).optional(),
      externalId: z.string().optional(),
      meta: getScimGroupResourceMetaResponse.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      id: data['id'],
      userName: data['userName'],
      members: data['members'],
      externalId: data['externalId'],
      meta: data['meta'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getScimGroupResourceRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).nullish(),
      id: z.string().nullish(),
      userName: z.string().nullish(),
      members: z.array(getScimGroupResourceMembersRequest).nullish(),
      externalId: z.string().nullish(),
      meta: getScimGroupResourceMetaRequest.nullish(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      id: data['id'],
      userName: data['userName'],
      members: data['members'],
      externalId: data['externalId'],
      meta: data['meta'],
    }));
});
