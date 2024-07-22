// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const etag: any = z.lazy(() => {
  return z.object({
    supported: z.boolean().optional(),
  });
});

/**
 * Information about the [entity tag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) (Etag) HTTP response header configuration.
 * @typedef  {Etag} etag - Information about the [entity tag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) (Etag) HTTP response header configuration. - Information about the [entity tag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) (Etag) HTTP response header configuration.
 * @property {boolean} - If true, the feature is supported.
 */
export type Etag = z.infer<typeof etag>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const etagResponse: any = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const etagRequest: any = z.lazy(() => {
  return z.object({ supported: z.boolean().nullish() }).transform((data) => ({
    supported: data['supported'],
  }));
});
