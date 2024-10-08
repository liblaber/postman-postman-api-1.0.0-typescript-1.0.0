// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { details1, details1Request, details1Response } from './details-1';
import { details2, details2Request, details2Response } from './details-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const details = z.lazy(() => {
  return z.union([details1, details2]);
});

/**
 *
 * @typedef  {Details} details
 * @property {Details1} - Information about the task's resources.
 * @property {Details2} - Information about the error that occurred during the task's processing.
 */
export type Details = z.infer<typeof details>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const detailsResponse = z.lazy(() => {
  return z.union([details1Response, details2Response]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const detailsRequest = z.lazy(() => {
  return z.union([details1Request, details2Request]);
});
