// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { updatePanApiApi, updatePanApiApiRequest, updatePanApiApiResponse } from './update-pan-api-api';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updatePanApi = z.lazy(() => {
  return z.object({
    api: updatePanApiApi.optional(),
  });
});

/**
 *
 * @typedef  {UpdatePanApi} updatePanApi
 * @property {UpdatePanApiApi}
 */
export type UpdatePanApi = z.infer<typeof updatePanApi>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updatePanApiResponse = z.lazy(() => {
  return z
    .object({
      api: updatePanApiApiResponse.optional(),
    })
    .transform((data) => ({
      api: data['api'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updatePanApiRequest = z.lazy(() => {
  return z.object({ api: updatePanApiApiRequest.nullish() }).transform((data) => ({
    api: data['api'],
  }));
});
