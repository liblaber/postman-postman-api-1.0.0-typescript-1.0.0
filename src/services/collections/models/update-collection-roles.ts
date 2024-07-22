// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  updateCollectionRolesRoles,
  updateCollectionRolesRolesRequest,
  updateCollectionRolesRolesResponse,
} from './update-collection-roles-roles';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateCollectionRoles: any = z.lazy(() => {
  return z.object({
    roles: z.array(updateCollectionRolesRoles),
  });
});

/**
 *
 * @typedef  {UpdateCollectionRoles} updateCollectionRoles
 * @property {UpdateCollectionRolesRoles[]}
 */
export type UpdateCollectionRoles = z.infer<typeof updateCollectionRoles>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateCollectionRolesResponse: any = z.lazy(() => {
  return z
    .object({
      roles: z.array(updateCollectionRolesRolesResponse),
    })
    .transform((data) => ({
      roles: data['roles'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateCollectionRolesRequest: any = z.lazy(() => {
  return z.object({ roles: z.array(updateCollectionRolesRolesRequest).nullish() }).transform((data) => ({
    roles: data['roles'],
  }));
});
