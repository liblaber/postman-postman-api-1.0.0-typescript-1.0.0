// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  panCreateFolderFolder,
  panCreateFolderFolderRequest,
  panCreateFolderFolderResponse,
} from './pan-create-folder-folder';

/**
 * The shape of the model inside the application code - what the users use
 */
export const panCreateFolder = z.object({
  folder: panCreateFolderFolder.optional(),
});

/**
 *
 * @typedef  {PanCreateFolder} panCreateFolder
 * @property {PanCreateFolderFolder}
 */
export type PanCreateFolder = z.infer<typeof panCreateFolder>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const panCreateFolderResponse = z
  .object({
    folder: panCreateFolderFolderResponse.optional(),
  })
  .transform((data) => ({
    folder: data['folder'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const panCreateFolderRequest = z
  .object({ folder: panCreateFolderFolderRequest.nullish() })
  .transform((data) => ({
    folder: data['folder'],
  }));
