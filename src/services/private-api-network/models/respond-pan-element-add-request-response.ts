// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const respondPanElementAddRequestResponse: any = z.lazy(() => {
  return z.object({
    message: z.string().optional(),
  });
});

/**
 * The response to the user's request.
 * @typedef  {RespondPanElementAddRequestResponse} respondPanElementAddRequestResponse - The response to the user's request. - The response to the user's request.
 * @property {string} - A message that details why the user's request was denied.
 */
export type RespondPanElementAddRequestResponse = z.infer<typeof respondPanElementAddRequestResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const respondPanElementAddRequestResponseResponse: any = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
    })
    .transform((data) => ({
      message: data['message'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const respondPanElementAddRequestResponseRequest: any = z.lazy(() => {
  return z.object({ message: z.string().nullish() }).transform((data) => ({
    message: data['message'],
  }));
});
