// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  CommentCreateUpdate,
  CommentCreatedUpdated,
  CommentResponse,
  commentCreateUpdateRequest,
  commentCreatedUpdatedResponse,
  commentResponseResponse,
} from '../common';

export class CollectionFoldersService extends BaseService {
  /**
   * Gets all comments left by users in a folder.
   * @param {string} collectionId - The collection's unique ID.
   * @param {string} folderId - The folder's unique ID.
   * @returns {Promise<HttpResponse<CommentResponse>>} Successful Response
   */
  async getFolderComments(
    collectionId: string,
    folderId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CommentResponse>> {
    const path = this.client.buildPath('/collections/{collectionId}/folders/{folderId}/comments', {
      collectionId: collectionId,
      folderId: folderId,
    });
    const options: any = {
      responseSchema: commentResponseResponse,
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.get(path, options);
  }

  /**
 * Creates a comment on a folder.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} collectionId - The collection's unique ID.
 * @param {string} folderId - The folder's unique ID.
 * @returns {Promise<HttpResponse<CommentCreatedUpdated>>} Created
 */
  async createFolderComment(
    collectionId: string,
    folderId: string,
    body: CommentCreateUpdate,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CommentCreatedUpdated>> {
    const path = this.client.buildPath('/collections/{collectionId}/folders/{folderId}/comments', {
      collectionId: collectionId,
      folderId: folderId,
    });
    const options: any = {
      responseSchema: commentCreatedUpdatedResponse,
      requestSchema: commentCreateUpdateRequest,
      body: body as any,
      headers: {
        'Content-Type': 'application/json',
      },
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.post(path, options);
  }

  /**
 * Updates a comment on a folder.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} collectionId - The collection's unique ID.
 * @param {string} folderId - The folder's unique ID.
 * @param {number} commentId - The comment's ID.
 * @returns {Promise<HttpResponse<CommentCreatedUpdated>>} Successful Response
 */
  async updateFolderComment(
    collectionId: string,
    folderId: string,
    commentId: number,
    body: CommentCreateUpdate,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CommentCreatedUpdated>> {
    const path = this.client.buildPath('/collections/{collectionId}/folders/{folderId}/comments/{commentId}', {
      collectionId: collectionId,
      folderId: folderId,
      commentId: commentId,
    });
    const options: any = {
      responseSchema: commentCreatedUpdatedResponse,
      requestSchema: commentCreateUpdateRequest,
      body: body as any,
      headers: {
        'Content-Type': 'application/json',
      },
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.put(path, options);
  }

  /**
 * Deletes a comment from a folder. On success, this returns an HTTP `204 No Content` response
**Note:**

Deleting the first comment of a thread deletes all the comments in the thread.

 * @param {string} collectionId - The collection's unique ID.
 * @param {string} folderId - The folder's unique ID.
 * @param {number} commentId - The comment's ID.
 * @returns {Promise<HttpResponse<any>>} No Content
 */
  async deleteFolderComment(
    collectionId: string,
    folderId: string,
    commentId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const path = this.client.buildPath('/collections/{collectionId}/folders/{folderId}/comments/{commentId}', {
      collectionId: collectionId,
      folderId: folderId,
      commentId: commentId,
    });
    const options: any = {
      responseSchema: z.undefined(),
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.delete(path, options);
  }
}
