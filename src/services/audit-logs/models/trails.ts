// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { trailsData, trailsDataRequest, trailsDataResponse } from './trails-data';

/**
 * The shape of the model inside the application code - what the users use
 */
export const trails = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    ip: z.string().optional(),
    userAgent: z.string().optional(),
    action: z.string().optional(),
    timestamp: z.string().optional(),
    message: z.string().optional(),
    data: trailsData.optional(),
  });
});

/**
 *
 * @typedef  {Trails} trails
 * @property {number} - The audit event's ID.
 * @property {string} - The IP address of the user that performed the action.
 * @property {string} - The user agent information.
 * @property {string} - The action performed by the user.
 * @property {string} - The date and time at which the event occurred.
 * @property {string} - The audit event's description.
 * @property {TrailsData}
 */
export type Trails = z.infer<typeof trails>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const trailsResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      ip: z.string().optional(),
      userAgent: z.string().optional(),
      action: z.string().optional(),
      timestamp: z.string().optional(),
      message: z.string().optional(),
      data: trailsDataResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      ip: data['ip'],
      userAgent: data['userAgent'],
      action: data['action'],
      timestamp: data['timestamp'],
      message: data['message'],
      data: data['data'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const trailsRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().nullish(),
      ip: z.string().nullish(),
      userAgent: z.string().nullish(),
      action: z.string().nullish(),
      timestamp: z.string().nullish(),
      message: z.string().nullish(),
      data: trailsDataRequest.nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      ip: data['ip'],
      userAgent: data['userAgent'],
      action: data['action'],
      timestamp: data['timestamp'],
      message: data['message'],
      data: data['data'],
    }));
});
