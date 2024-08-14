// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { group, groupRequest, groupResponse } from './group';
import {
  getCollectionRolesTeam,
  getCollectionRolesTeamRequest,
  getCollectionRolesTeamResponse,
} from './get-collection-roles-team';
import {
  getCollectionRolesUser,
  getCollectionRolesUserRequest,
  getCollectionRolesUserResponse,
} from './get-collection-roles-user';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getCollectionRoles = z.lazy(() => {
  return z.object({
    group: z.array(group).optional(),
    team: z.array(getCollectionRolesTeam).optional(),
    user: z.array(getCollectionRolesUser).optional(),
  });
});

/**
 * Information about the collection's roles.
 * @typedef  {GetCollectionRoles} getCollectionRoles - Information about the collection's roles. - Information about the collection's roles.
 * @property {Group[]} - A list of the collection's group roles.
 * @property {GetCollectionRolesTeam[]} - A list of the collection's team roles.
 * @property {GetCollectionRolesUser[]} - A list of the collection's user roles.
 */
export type GetCollectionRoles = z.infer<typeof getCollectionRoles>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getCollectionRolesResponse = z.lazy(() => {
  return z
    .object({
      group: z.array(groupResponse).optional(),
      team: z.array(getCollectionRolesTeamResponse).optional(),
      user: z.array(getCollectionRolesUserResponse).optional(),
    })
    .transform((data) => ({
      group: data['group'],
      team: data['team'],
      user: data['user'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getCollectionRolesRequest = z.lazy(() => {
  return z
    .object({
      group: z.array(groupRequest).nullish(),
      team: z.array(getCollectionRolesTeamRequest).nullish(),
      user: z.array(getCollectionRolesUserRequest).nullish(),
    })
    .transform((data) => ({
      group: data['group'],
      team: data['team'],
      user: data['user'],
    }));
});
