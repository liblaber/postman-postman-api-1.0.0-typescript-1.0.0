// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const commentCreatedUpdatedData: any = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    createdBy: z.number().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    body: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CommentCreatedUpdatedData} commentCreatedUpdatedData
 * @property {number} - The comment's ID.
 * @property {number} - The user ID of the user who created the comment.
 * @property {string} - The date and time at which the comment was created.
 * @property {string} - The date and time when the comment was last updated.
 * @property {string} - The contents of the comment.
 */
export type CommentCreatedUpdatedData = z.infer<typeof commentCreatedUpdatedData>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const commentCreatedUpdatedDataResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      createdBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      body: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      body: data['body'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const commentCreatedUpdatedDataRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.number().nullish(),
      createdBy: z.number().nullish(),
      createdAt: z.string().nullish(),
      updatedAt: z.string().nullish(),
      body: z.string().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      body: data['body'],
    }));
});
