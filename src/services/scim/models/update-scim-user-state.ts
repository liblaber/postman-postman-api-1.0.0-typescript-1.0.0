// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  updateScimUserStateOperations,
  updateScimUserStateOperationsRequest,
  updateScimUserStateOperationsResponse,
} from './update-scim-user-state-operations';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateScimUserState = z.object({
  schemas: z.array(z.string()).optional(),
  operations: z.array(updateScimUserStateOperations).optional(),
});

/**
 *
 * @typedef  {UpdateScimUserState} updateScimUserState
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {UpdateScimUserStateOperations[]} - Information about the user update operation.
 */
export type UpdateScimUserState = z.infer<typeof updateScimUserState>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateScimUserStateResponse = z
  .object({
    schemas: z.array(z.string()).optional(),
    Operations: z.array(updateScimUserStateOperationsResponse).optional(),
  })
  .transform((data) => ({
    schemas: data['schemas'],
    operations: data['Operations'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateScimUserStateRequest = z
  .object({
    schemas: z.array(z.string()).nullish(),
    operations: z.array(updateScimUserStateOperationsRequest).nullish(),
  })
  .transform((data) => ({
    schemas: data['schemas'],
    Operations: data['operations'],
  }));
