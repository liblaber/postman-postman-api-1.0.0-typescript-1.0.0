// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { updateScimUserName, updateScimUserNameRequest, updateScimUserNameResponse } from './update-scim-user-name';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateScimUser = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    name: updateScimUserName.optional(),
  });
});

/**
 *
 * @typedef  {UpdateScimUser} updateScimUser
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {UpdateScimUserName} - Information about the user's name.
 */
export type UpdateScimUser = z.infer<typeof updateScimUser>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateScimUserResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      name: updateScimUserNameResponse.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateScimUserRequest = z.lazy(() => {
  return z
    .object({ schemas: z.array(z.string()).nullish(), name: updateScimUserNameRequest.nullish() })
    .transform((data) => ({
      schemas: data['schemas'],
      name: data['name'],
    }));
});
