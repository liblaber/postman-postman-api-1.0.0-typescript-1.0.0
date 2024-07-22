// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  deleteEnvironmentEnvironment,
  deleteEnvironmentEnvironmentRequest,
  deleteEnvironmentEnvironmentResponse,
} from './delete-environment-environment';

/**
 * The shape of the model inside the application code - what the users use
 */
export const deleteEnvironment: any = z.lazy(() => {
  return z.object({
    environment: deleteEnvironmentEnvironment.optional(),
  });
});

/**
 *
 * @typedef  {DeleteEnvironment} deleteEnvironment
 * @property {DeleteEnvironmentEnvironment}
 */
export type DeleteEnvironment = z.infer<typeof deleteEnvironment>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const deleteEnvironmentResponse: any = z.lazy(() => {
  return z
    .object({
      environment: deleteEnvironmentEnvironmentResponse.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const deleteEnvironmentRequest: any = z.lazy(() => {
  return z.object({ environment: deleteEnvironmentEnvironmentRequest.nullish() }).transform((data) => ({
    environment: data['environment'],
  }));
});
