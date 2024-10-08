// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { updatePanApi, updatePanApiRequest, updatePanApiResponse } from './update-pan-api';
import { updatePanCollection, updatePanCollectionRequest, updatePanCollectionResponse } from './update-pan-collection';
import { updatePanWorkspace, updatePanWorkspaceRequest, updatePanWorkspaceResponse } from './update-pan-workspace';
import { updatePanFolder, updatePanFolderRequest, updatePanFolderResponse } from './update-pan-folder';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updatePanElementOrFolderRequest = z.lazy(() => {
  return z.union([updatePanApi, updatePanCollection, updatePanWorkspace, updatePanFolder]);
});

/**
 *
 * @typedef  {UpdatePanElementOrFolderRequest} updatePanElementOrFolderRequest
 * @property {UpdatePanApi}
 * @property {UpdatePanCollection}
 * @property {UpdatePanWorkspace}
 * @property {UpdatePanFolder}
 */
export type UpdatePanElementOrFolderRequest = z.infer<typeof updatePanElementOrFolderRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updatePanElementOrFolderRequestResponse = z.lazy(() => {
  return z.union([
    updatePanApiResponse,
    updatePanCollectionResponse,
    updatePanWorkspaceResponse,
    updatePanFolderResponse,
  ]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updatePanElementOrFolderRequestRequest = z.lazy(() => {
  return z.union([updatePanApiRequest, updatePanCollectionRequest, updatePanWorkspaceRequest, updatePanFolderRequest]);
});
