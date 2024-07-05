// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  forkEnvironmentEnvironment,
  forkEnvironmentEnvironmentRequest,
  forkEnvironmentEnvironmentResponse,
} from './fork-environment-environment';

/**
 * The shape of the model inside the application code - what the users use
 */
export const forkEnvironmentOkResponse = z.object({
  environment: forkEnvironmentEnvironment.optional(),
});

/**
 *
 * @typedef  {ForkEnvironmentOkResponse} forkEnvironmentOkResponse
 * @property {ForkEnvironmentEnvironment} - Information about the forked environment.
 */
export type ForkEnvironmentOkResponse = z.infer<typeof forkEnvironmentOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const forkEnvironmentOkResponseResponse = z
  .object({
    environment: forkEnvironmentEnvironmentResponse.optional(),
  })
  .transform((data) => ({
    environment: data['environment'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const forkEnvironmentOkResponseRequest = z
  .object({ environment: forkEnvironmentEnvironmentRequest.nullish() })
  .transform((data) => ({
    environment: data['environment'],
  }));
