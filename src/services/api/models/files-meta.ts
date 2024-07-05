// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filesMeta = z.object({
  nextPath: z.string().optional(),
});

/**
 *
 * @typedef  {FilesMeta} filesMeta
 * @property {string} - The URL path to the next file.
 */
export type FilesMeta = z.infer<typeof filesMeta>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filesMetaResponse = z
  .object({
    nextPath: z.string().optional(),
  })
  .transform((data) => ({
    nextPath: data['nextPath'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filesMetaRequest = z.object({ nextPath: z.string().nullish() }).transform((data) => ({
  nextPath: data['nextPath'],
}));
