// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  createEnvironmentEnvironment2,
  createEnvironmentEnvironment2Request,
  createEnvironmentEnvironment2Response,
} from './create-environment-environment-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createEnvironmentOkResponse: any = z.lazy(() => {
  return z.object({
    environment: createEnvironmentEnvironment2.optional(),
  });
});

/**
 *
 * @typedef  {CreateEnvironmentOkResponse} createEnvironmentOkResponse
 * @property {CreateEnvironmentEnvironment2}
 */
export type CreateEnvironmentOkResponse = z.infer<typeof createEnvironmentOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createEnvironmentOkResponseResponse: any = z.lazy(() => {
  return z
    .object({
      environment: createEnvironmentEnvironment2Response.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createEnvironmentOkResponseRequest: any = z.lazy(() => {
  return z.object({ environment: createEnvironmentEnvironment2Request.nullish() }).transform((data) => ({
    environment: data['environment'],
  }));
});
