// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updatePanApiApi = z.object({
  parentFolderId: z.number().optional(),
});

/**
 *
 * @typedef  {UpdatePanApiApi} updatePanApiApi
 * @property {number} - The API's new parent folder ID.
 */
export type UpdatePanApiApi = z.infer<typeof updatePanApiApi>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updatePanApiApiResponse = z
  .object({
    parentFolderId: z.number().optional(),
  })
  .transform((data) => ({
    parentFolderId: data['parentFolderId'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updatePanApiApiRequest = z.object({ parentFolderId: z.number().nullish() }).transform((data) => ({
  parentFolderId: data['parentFolderId'],
}));
