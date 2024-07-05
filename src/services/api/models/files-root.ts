// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { enabled } from './enabled';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filesRoot = z.object({
  enabled: enabled.optional(),
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
export const filesRootResponse = z
  .object({
    enabled: enabled.optional(),
  })
  .transform((data) => ({
    enabled: data['enabled'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filesRootRequest = z.object({ enabled: enabled.nullish() }).transform((data) => ({
  enabled: data['enabled'],
}));
