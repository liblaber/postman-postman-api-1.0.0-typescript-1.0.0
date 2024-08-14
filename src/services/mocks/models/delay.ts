// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const delay = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    preset: z.string().optional(),
    duration: z.number().optional(),
  });
});

/**
 * Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings.
 * @typedef  {Delay} delay - Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings. - Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings.
 * @property {DelayType} - The type of simulated delay value:
- `fixed` — The delay value is a fixed value.

 * @property {Preset} - The simulated fixed network delay value:
- `1` — 2G (300 ms).
- `2` — 3G (100 ms).
The object does not return this value for custom delay values.

 * @property {number} - The configured delay, in milliseconds.
 */
export type Delay = z.infer<typeof delay>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const delayResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      preset: z.string().optional(),
      duration: z.number().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      preset: data['preset'],
      duration: data['duration'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const delayRequest = z.lazy(() => {
  return z
    .object({ type: z.string().nullish(), preset: z.string().nullish(), duration: z.number().nullish() })
    .transform((data) => ({
      type: data['type'],
      preset: data['preset'],
      duration: data['duration'],
    }));
});
