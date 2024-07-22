// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  mergeEnvironmentForkEnvironment,
  mergeEnvironmentForkEnvironmentRequest,
  mergeEnvironmentForkEnvironmentResponse,
} from './merge-environment-fork-environment';

/**
 * The shape of the model inside the application code - what the users use
 */
export const mergeEnvironmentForkOkResponse: any = z.lazy(() => {
  return z.object({
    environment: mergeEnvironmentForkEnvironment.optional(),
  });
});

/**
 *
 * @typedef  {MergeEnvironmentForkOkResponse} mergeEnvironmentForkOkResponse
 * @property {MergeEnvironmentForkEnvironment} - Information about the merged environment.
 */
export type MergeEnvironmentForkOkResponse = z.infer<typeof mergeEnvironmentForkOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const mergeEnvironmentForkOkResponseResponse: any = z.lazy(() => {
  return z
    .object({
      environment: mergeEnvironmentForkEnvironmentResponse.optional(),
    })
    .transform((data) => ({
      environment: data['environment'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const mergeEnvironmentForkOkResponseRequest: any = z.lazy(() => {
  return z.object({ environment: mergeEnvironmentForkEnvironmentRequest.nullish() }).transform((data) => ({
    environment: data['environment'],
  }));
});
