// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const statsAssertions1: any = z.lazy(() => {
  return z.object({
    failed: z.number().optional(),
    total: z.number().optional(),
  });
});

/**
 * Information about the monitor's assertions.
 * @typedef  {StatsAssertions1} statsAssertions1 - Information about the monitor's assertions. - Information about the monitor's assertions.
 * @property {number} - The total number of test failures.
 * @property {number} - The total number of tests performed.
 */
export type StatsAssertions1 = z.infer<typeof statsAssertions1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const statsAssertions1Response: any = z.lazy(() => {
  return z
    .object({
      failed: z.number().optional(),
      total: z.number().optional(),
    })
    .transform((data) => ({
      failed: data['failed'],
      total: data['total'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const statsAssertions1Request: any = z.lazy(() => {
  return z.object({ failed: z.number().nullish(), total: z.number().nullish() }).transform((data) => ({
    failed: data['failed'],
    total: data['total'],
  }));
});
