// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const panElementCreated = z.lazy(() => {
  return z.object({
    addedAt: z.string().optional(),
    addedBy: z.number().optional(),
    createdBy: z.number().optional(),
    createdAt: z.string().optional(),
    updatedBy: z.number().optional(),
    updatedAt: z.string().optional(),
    type: z.string().optional(),
    id: z.string().optional(),
    name: z.string().optional(),
    summary: z.string().optional().nullable(),
    description: z.string().optional(),
    href: z.string().optional(),
    parentFolderId: z.number().optional(),
    environments: z.array(z.string()).optional(),
  });
});

/**
 * Information about the Private API Network element.
 * @typedef  {PanElementCreated} panElementCreated - Information about the Private API Network element. - Information about the Private API Network element.
 * @property {string} - The date and time at which the element was added.
 * @property {number} - The user who added the element.
 * @property {number} - The user who created the element.
 * @property {string} - The date and time at which the element was created.
 * @property {number} - The user who last updated the element.
 * @property {string} - The date and time at which the element was last updated.
 * @property {string} - The element's type.
 * @property {string} - The element's ID or UID.
 * @property {string} - The element's name.
 * @property {string} - The element's summary.
 * @property {string} - The element's description.
 * @property {string} - The element's Postman URL.
 * @property {number} - The parent folder's ID.
 * @property {string[]} - A list of the element's environments.
 */
export type PanElementCreated = z.infer<typeof panElementCreated>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const panElementCreatedResponse = z.lazy(() => {
  return z
    .object({
      addedAt: z.string().optional(),
      addedBy: z.number().optional(),
      createdBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedBy: z.number().optional(),
      updatedAt: z.string().optional(),
      type: z.string().optional(),
      id: z.string().optional(),
      name: z.string().optional(),
      summary: z.string().optional().nullable(),
      description: z.string().optional(),
      href: z.string().optional(),
      parentFolderId: z.number().optional(),
      environments: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      addedAt: data['addedAt'],
      addedBy: data['addedBy'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      updatedBy: data['updatedBy'],
      updatedAt: data['updatedAt'],
      type: data['type'],
      id: data['id'],
      name: data['name'],
      summary: data['summary'],
      description: data['description'],
      href: data['href'],
      parentFolderId: data['parentFolderId'],
      environments: data['environments'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const panElementCreatedRequest = z.lazy(() => {
  return z
    .object({
      addedAt: z.string().nullish(),
      addedBy: z.number().nullish(),
      createdBy: z.number().nullish(),
      createdAt: z.string().nullish(),
      updatedBy: z.number().nullish(),
      updatedAt: z.string().nullish(),
      type: z.string().nullish(),
      id: z.string().nullish(),
      name: z.string().nullish(),
      summary: z.string().nullish(),
      description: z.string().nullish(),
      href: z.string().nullish(),
      parentFolderId: z.number().nullish(),
      environments: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      addedAt: data['addedAt'],
      addedBy: data['addedBy'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      updatedBy: data['updatedBy'],
      updatedAt: data['updatedAt'],
      type: data['type'],
      id: data['id'],
      name: data['name'],
      summary: data['summary'],
      description: data['description'],
      href: data['href'],
      parentFolderId: data['parentFolderId'],
      environments: data['environments'],
    }));
});
