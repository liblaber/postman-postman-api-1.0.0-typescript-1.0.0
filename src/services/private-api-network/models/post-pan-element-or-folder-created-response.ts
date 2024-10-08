// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { panElementCreated, panElementCreatedRequest, panElementCreatedResponse } from './pan-element-created';
import { panFolderCreated, panFolderCreatedRequest, panFolderCreatedResponse } from './pan-folder-created';

/**
 * The shape of the model inside the application code - what the users use
 */
export const postPanElementOrFolderCreatedResponse = z.lazy(() => {
  return z.union([panElementCreated, panFolderCreated]);
});

/**
 *
 * @typedef  {PostPanElementOrFolderCreatedResponse} postPanElementOrFolderCreatedResponse
 * @property {PanElementCreated} - Information about the Private API Network element.
 * @property {PanFolderCreated} - Information about the Private API Network folder.
 */
export type PostPanElementOrFolderCreatedResponse = z.infer<typeof postPanElementOrFolderCreatedResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const postPanElementOrFolderCreatedResponseResponse = z.lazy(() => {
  return z.union([panElementCreatedResponse, panFolderCreatedResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const postPanElementOrFolderCreatedResponseRequest = z.lazy(() => {
  return z.union([panElementCreatedRequest, panFolderCreatedRequest]);
});
