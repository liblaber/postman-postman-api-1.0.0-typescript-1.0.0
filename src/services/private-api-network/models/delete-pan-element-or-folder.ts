// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  deletePanElementOrFolderElementType,
  deletePanElementOrFolderElementTypeRequest,
  deletePanElementOrFolderElementTypeResponse,
} from './delete-pan-element-or-folder-element-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const deletePanElementOrFolder = z.lazy(() => {
  return z.object({
    elementType: deletePanElementOrFolderElementType.optional(),
  });
});

/**
 *
 * @typedef  {DeletePanElementOrFolder} deletePanElementOrFolder
 * @property {DeletePanElementOrFolderElementType} - The Private API Network element type. The name of the object is the element `api`, `collection`, `workspace`, or `folder` type.
 */
export type DeletePanElementOrFolder = z.infer<typeof deletePanElementOrFolder>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const deletePanElementOrFolderResponse = z.lazy(() => {
  return z
    .object({
      elementType: deletePanElementOrFolderElementTypeResponse.optional(),
    })
    .transform((data) => ({
      elementType: data['elementType'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const deletePanElementOrFolderRequest = z.lazy(() => {
  return z.object({ elementType: deletePanElementOrFolderElementTypeRequest.nullish() }).transform((data) => ({
    elementType: data['elementType'],
  }));
});
