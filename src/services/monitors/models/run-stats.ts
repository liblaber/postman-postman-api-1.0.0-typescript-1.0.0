// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { statsAssertions2, statsAssertions2Request, statsAssertions2Response } from './stats-assertions-2';
import { statsRequests2, statsRequests2Request, statsRequests2Response } from './stats-requests-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const runStats = z.lazy(() => {
  return z.object({
    assertions: statsAssertions2.optional(),
    requests: statsRequests2.optional(),
  });
});

/**
 * Information about the monitor run's stats.
 * @typedef  {RunStats} runStats - Information about the monitor run's stats. - Information about the monitor run's stats.
 * @property {StatsAssertions2} - The monitor run's assertions stats.
 * @property {StatsRequests2} - The monitor run's request stats.
 */
export type RunStats = z.infer<typeof runStats>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const runStatsResponse = z.lazy(() => {
  return z
    .object({
      assertions: statsAssertions2Response.optional(),
      requests: statsRequests2Response.optional(),
    })
    .transform((data) => ({
      assertions: data['assertions'],
      requests: data['requests'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const runStatsRequest = z.lazy(() => {
  return z
    .object({ assertions: statsAssertions2Request.nullish(), requests: statsRequests2Request.nullish() })
    .transform((data) => ({
      assertions: data['assertions'],
      requests: data['requests'],
    }));
});
