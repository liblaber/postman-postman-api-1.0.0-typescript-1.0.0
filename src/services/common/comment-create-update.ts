// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  commentCreateUpdateTags,
  commentCreateUpdateTagsRequest,
  commentCreateUpdateTagsResponse,
} from './comment-create-update-tags';

/**
 * The shape of the model inside the application code - what the users use
 */
export const commentCreateUpdate = z.lazy(() => {
  return z.object({
    body: z.string(),
    tags: commentCreateUpdateTags.optional(),
  });
});

/**
 * Information about the comment.
 * @typedef  {CommentCreateUpdate} commentCreateUpdate - Information about the comment. - Information about the comment.
 * @property {string} - The contents of the comment.
 * @property {CommentCreateUpdateTags} - Information about users tagged in the `body` comment.
 */
export type CommentCreateUpdate = z.infer<typeof commentCreateUpdate>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const commentCreateUpdateResponse = z.lazy(() => {
  return z
    .object({
      body: z.string(),
      tags: commentCreateUpdateTagsResponse.optional(),
    })
    .transform((data) => ({
      body: data['body'],
      tags: data['tags'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const commentCreateUpdateRequest = z.lazy(() => {
  return z.object({ body: z.string().nullish(), tags: commentCreateUpdateTagsRequest.nullish() }).transform((data) => ({
    body: data['body'],
    tags: data['tags'],
  }));
});
