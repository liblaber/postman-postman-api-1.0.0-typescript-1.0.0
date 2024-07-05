// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const reviewers = z.object({
  id: z.string().optional(),
  status: z.string().optional(),
});

/**
 * 
 * @typedef  {Reviewers} reviewers   
 * @property {string} - The reviewer's user ID.
 * @property {string} - The reviewer's review status response. One of:
- `approved`
- `declined`

 */
export type Reviewers = z.infer<typeof reviewers>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const reviewersResponse = z
  .object({
    id: z.string().optional(),
    status: z.string().optional(),
  })
  .transform((data) => ({
    id: data['id'],
    status: data['status'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const reviewersRequest = z
  .object({ id: z.string().nullish(), status: z.string().nullish() })
  .transform((data) => ({
    id: data['id'],
    status: data['status'],
  }));
