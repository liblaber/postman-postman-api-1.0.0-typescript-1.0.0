// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  createEnvironmentEnvironment1,
  createEnvironmentEnvironment1Request,
  createEnvironmentEnvironment1Response,
} from './create-environment-environment-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createEnvironmentRequest: any = z.lazy(() => {
  return z.object({
    environment: createEnvironmentEnvironment1.optional(),
  });
});

/**
 *
 * @typedef  {CreateEnvironmentRequest} createEnvironmentRequest
 * @property {CreateEnvironmentEnvironment1}
 */
export type CreateEnvironmentRequest = z.infer<typeof createEnvironmentRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createEnvironmentRequestResponse: any = z.lazy(() => {
  return z
    .object({
      environment: createEnvironmentEnvironment1Response.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createEnvironmentRequestRequest: any = z.lazy(() => {
  return z.object({ environment: createEnvironmentEnvironment1Request.nullish() }).transform((data) => ({
    environment: data['environment'],
  }));
});
