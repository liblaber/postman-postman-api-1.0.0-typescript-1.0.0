// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { rolesValue2, rolesValue2Request, rolesValue2Response } from './roles-value-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateWorkspaceRolesRoles1 = z.lazy(() => {
  return z.object({
    op: z.string(),
    path: z.string(),
    value: z.array(rolesValue2),
  });
});

/**
 *
 * @typedef  {UpdateWorkspaceRolesRoles1} updateWorkspaceRolesRoles1
 * @property {string} - The operation to perform on the path.
 * @property {RolesPath2} - The resource to perform the action on.
 * @property {RolesValue2[]}
 */
export type UpdateWorkspaceRolesRoles1 = z.infer<typeof updateWorkspaceRolesRoles1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateWorkspaceRolesRoles1Response = z.lazy(() => {
  return z
    .object({
      op: z.string(),
      path: z.string(),
      value: z.array(rolesValue2Response),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateWorkspaceRolesRoles1Request = z.lazy(() => {
  return z
    .object({ op: z.string().nullish(), path: z.string().nullish(), value: z.array(rolesValue2Request).nullish() })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});
