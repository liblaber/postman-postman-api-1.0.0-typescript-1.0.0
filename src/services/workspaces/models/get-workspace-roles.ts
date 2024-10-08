// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  getWorkspaceRolesRoles,
  getWorkspaceRolesRolesRequest,
  getWorkspaceRolesRolesResponse,
} from './get-workspace-roles-roles';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getWorkspaceRoles = z.lazy(() => {
  return z.object({
    roles: getWorkspaceRolesRoles.optional(),
  });
});

/**
 *
 * @typedef  {GetWorkspaceRoles} getWorkspaceRoles
 * @property {GetWorkspaceRolesRoles} - Information about the workspace's [user roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles).
 */
export type GetWorkspaceRoles = z.infer<typeof getWorkspaceRoles>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getWorkspaceRolesResponse = z.lazy(() => {
  return z
    .object({
      roles: getWorkspaceRolesRolesResponse.optional(),
    })
    .transform((data) => ({
      roles: data['roles'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getWorkspaceRolesRequest = z.lazy(() => {
  return z.object({ roles: getWorkspaceRolesRolesRequest.nullish() }).transform((data) => ({
    roles: data['roles'],
  }));
});
