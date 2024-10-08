// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  updatePanFolderFolder,
  updatePanFolderFolderRequest,
  updatePanFolderFolderResponse,
} from './update-pan-folder-folder';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updatePanFolder = z.lazy(() => {
  return z.object({
    folder: updatePanFolderFolder.optional(),
  });
});

/**
 *
 * @typedef  {UpdatePanFolder} updatePanFolder
 * @property {UpdatePanFolderFolder}
 */
export type UpdatePanFolder = z.infer<typeof updatePanFolder>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updatePanFolderResponse = z.lazy(() => {
  return z
    .object({
      folder: updatePanFolderFolderResponse.optional(),
    })
    .transform((data) => ({
      folder: data['folder'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updatePanFolderRequest = z.lazy(() => {
  return z.object({ folder: updatePanFolderFolderRequest.nullish() }).transform((data) => ({
    folder: data['folder'],
  }));
});
