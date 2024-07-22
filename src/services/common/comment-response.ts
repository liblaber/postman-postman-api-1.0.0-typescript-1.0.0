// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { commentResponseData, commentResponseDataRequest, commentResponseDataResponse } from './comment-response-data';

/**
 * The shape of the model inside the application code - what the users use
 */
export const commentResponse: any = z.lazy(() => {
  return z.object({
    data: z.array(commentResponseData).optional(),
  });
});

/**
 *
 * @typedef  {CommentResponse} commentResponse
 * @property {CommentResponseData[]}
 */
export type CommentResponse = z.infer<typeof commentResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const commentResponseResponse: any = z.lazy(() => {
  return z
    .object({
      data: z.array(commentResponseDataResponse).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const commentResponseRequest: any = z.lazy(() => {
  return z.object({ data: z.array(commentResponseDataRequest).nullish() }).transform((data) => ({
    data: data['data'],
  }));
});
