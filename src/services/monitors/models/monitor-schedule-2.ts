// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const monitorSchedule2 = z.lazy(() => {
  return z.object({
    cron: z.string().optional(),
    nextRun: z.string().optional(),
    timezone: z.string().optional(),
  });
});

/**
 * Information about the monitor's schedule.
 * @typedef  {MonitorSchedule2} monitorSchedule2 - Information about the monitor's schedule. - Information about the monitor's schedule.
 * @property {string} - The monitor's cron frequency value.
 * @property {string} - The date and time of monitor's next scheduled run.
 * @property {string} - The monitor's timezone.
 */
export type MonitorSchedule2 = z.infer<typeof monitorSchedule2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const monitorSchedule2Response = z.lazy(() => {
  return z
    .object({
      cron: z.string().optional(),
      nextRun: z.string().optional(),
      timezone: z.string().optional(),
    })
    .transform((data) => ({
      cron: data['cron'],
      nextRun: data['nextRun'],
      timezone: data['timezone'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const monitorSchedule2Request = z.lazy(() => {
  return z
    .object({ cron: z.string().nullish(), nextRun: z.string().nullish(), timezone: z.string().nullish() })
    .transform((data) => ({
      cron: data['cron'],
      nextRun: data['nextRun'],
      timezone: data['timezone'],
    }));
});
