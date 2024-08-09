// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getAuthenticatedUserUser = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    username: z.string().optional(),
    email: z.string().optional(),
    fullName: z.string().optional(),
    avatar: z.string().optional().nullable(),
    isPublic: z.boolean().optional(),
    teamId: z.number().optional(),
    teamName: z.string().optional(),
    teamDomain: z.string().optional(),
    roles: z.array(z.string()).optional(),
  });
});

/**
 * Information about the authenticated user.
 * @typedef  {GetAuthenticatedUserUser} getAuthenticatedUserUser - Information about the authenticated user. - Information about the authenticated user.
 * @property {number} - The user's Postman ID.
 * @property {string} - The user's username.
 * @property {string} - The user's email address.
 * @property {string} - The user's full name.
 * @property {string} - The user's avatar image URL.
 * @property {boolean} - If true, the user's information is public and visible to all users.
 * @property {number} - The team ID the user is assigned to. This returns a `0` value if the user is not assigned to a team.
 * @property {string} - The name of the team the user is assigned to.
 * @property {string} - The team's Postman domain ID.
 * @property {string[]} - A list of the user's assigned [roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles).
 */
export type GetAuthenticatedUserUser = z.infer<typeof getAuthenticatedUserUser>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getAuthenticatedUserUserResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      username: z.string().optional(),
      email: z.string().optional(),
      fullName: z.string().optional(),
      avatar: z.string().optional().nullable(),
      isPublic: z.boolean().optional(),
      teamId: z.number().optional(),
      teamName: z.string().optional(),
      teamDomain: z.string().optional(),
      roles: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      username: data['username'],
      email: data['email'],
      fullName: data['fullName'],
      avatar: data['avatar'],
      isPublic: data['isPublic'],
      teamId: data['teamId'],
      teamName: data['teamName'],
      teamDomain: data['teamDomain'],
      roles: data['roles'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getAuthenticatedUserUserRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().nullish(),
      username: z.string().nullish(),
      email: z.string().nullish(),
      fullName: z.string().nullish(),
      avatar: z.string().nullish(),
      isPublic: z.boolean().nullish(),
      teamId: z.number().nullish(),
      teamName: z.string().nullish(),
      teamDomain: z.string().nullish(),
      roles: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      username: data['username'],
      email: data['email'],
      fullName: data['fullName'],
      avatar: data['avatar'],
      isPublic: data['isPublic'],
      teamId: data['teamId'],
      teamName: data['teamName'],
      teamDomain: data['teamDomain'],
      roles: data['roles'],
    }));
});
