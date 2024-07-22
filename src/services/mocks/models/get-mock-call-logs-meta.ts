// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getMockCallLogsMeta: any = z.lazy(() => {
  return z.object({
    nextCursor: z.string().optional().nullable(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef  {GetMockCallLogsMeta} getMockCallLogsMeta - The response's non-standard meta information. - The response's non-standard meta information.
 * @property {string} - The pagination cursor that points to the next record in the results set.
 */
export type GetMockCallLogsMeta = z.infer<typeof getMockCallLogsMeta>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getMockCallLogsMetaResponse: any = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional().nullable(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getMockCallLogsMetaRequest: any = z.lazy(() => {
  return z.object({ nextCursor: z.string().nullish() }).transform((data) => ({
    nextCursor: data['nextCursor'],
  }));
});
