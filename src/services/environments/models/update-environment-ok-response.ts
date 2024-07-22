// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  updateEnvironmentEnvironment2,
  updateEnvironmentEnvironment2Request,
  updateEnvironmentEnvironment2Response,
} from './update-environment-environment-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateEnvironmentOkResponse: any = z.lazy(() => {
  return z.object({
    environment: updateEnvironmentEnvironment2.optional(),
  });
});

/**
 *
 * @typedef  {UpdateEnvironmentOkResponse} updateEnvironmentOkResponse
 * @property {UpdateEnvironmentEnvironment2}
 */
export type UpdateEnvironmentOkResponse = z.infer<typeof updateEnvironmentOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateEnvironmentOkResponseResponse: any = z.lazy(() => {
  return z
    .object({
      environment: updateEnvironmentEnvironment2Response.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateEnvironmentOkResponseRequest: any = z.lazy(() => {
  return z.object({ environment: updateEnvironmentEnvironment2Request.nullish() }).transform((data) => ({
    environment: data['environment'],
  }));
});
