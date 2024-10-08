// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createWebhookWebhook1 = z.lazy(() => {
  return z.object({
    collection: z.string().optional(),
    name: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CreateWebhookWebhook1} createWebhookWebhook1
 * @property {string} - The unique ID of the collection to trigger when calling this webhook.
 * @property {string} - The webhook's name. On success, the system creates a new monitor with this name in the **Monitors** tab.
 */
export type CreateWebhookWebhook1 = z.infer<typeof createWebhookWebhook1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createWebhookWebhook1Response = z.lazy(() => {
  return z
    .object({
      collection: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createWebhookWebhook1Request = z.lazy(() => {
  return z.object({ collection: z.string().nullish(), name: z.string().nullish() }).transform((data) => ({
    collection: data['collection'],
    name: data['name'],
  }));
});
