// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filesRoot = z.lazy(() => {
  return z.object({
    enabled: z.boolean().optional(),
  });
});

/**
 * Information about the schema's root file.
 * @typedef  {FilesRoot} filesRoot - Information about the schema's root file. - Information about the schema's root file.
 * @property {Enabled} - If true, tag the file as the root file. The root tag is only allowed for protobuf specifications.
 */
export type FilesRoot = z.infer<typeof filesRoot>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filesRootResponse = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filesRootRequest = z.lazy(() => {
  return z.object({ enabled: z.boolean().nullish() }).transform((data) => ({
    enabled: data['enabled'],
  }));
});
