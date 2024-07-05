// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { trails, trailsRequest, trailsResponse } from './trails';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getAuditLogs = z.object({
  trails: z.array(trails).optional(),
});

/**
 *
 * @typedef  {GetAuditLogs} getAuditLogs
 * @property {Trails[]}
 */
export type GetAuditLogs = z.infer<typeof getAuditLogs>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getAuditLogsResponse = z
  .object({
    trails: z.array(trailsResponse).optional(),
  })
  .transform((data) => ({
    trails: data['trails'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getAuditLogsRequest = z.object({ trails: z.array(trailsRequest).nullish() }).transform((data) => ({
  trails: data['trails'],
}));
