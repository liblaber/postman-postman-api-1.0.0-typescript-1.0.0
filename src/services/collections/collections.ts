// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { GetCollections, getCollectionsResponse } from './models/get-collections';
import {
  CreateCollectionForkParams,
  CreateCollectionParams,
  GetCollectionForksParams,
  GetCollectionParams,
  GetCollectionsForkedByUserParams,
  GetCollectionsParams,
  TransformCollectionToOpenApiParams,
} from './request-params';
import {
  CollectionsCreateCollectionRequest,
  collectionsCreateCollectionRequestRequest,
} from './models/collections-create-collection-request';
import { CreateCollectionOkResponse, createCollectionOkResponseResponse } from './models/create-collection-ok-response';
import {
  CreateCollectionForkRequest,
  createCollectionForkRequestRequest,
} from './models/create-collection-fork-request';
import {
  CreateCollectionForkOkResponse,
  createCollectionForkOkResponseResponse,
} from './models/create-collection-fork-ok-response';
import { MergeCollectionForkRequest, mergeCollectionForkRequestRequest } from './models/merge-collection-fork-request';
import {
  MergeCollectionForkOkResponse,
  mergeCollectionForkOkResponseResponse,
} from './models/merge-collection-fork-ok-response';
import { GetCollection, getCollectionResponse } from './models/get-collection';
import { PutCollectionRequest, putCollectionRequestRequest } from './models/put-collection-request';
import { PutCollectionOkResponse, putCollectionOkResponseResponse } from './models/put-collection-ok-response';
import { PatchCollectionRequest, patchCollectionRequestRequest } from './models/patch-collection-request';
import { PatchCollectionOkResponse, patchCollectionOkResponseResponse } from './models/patch-collection-ok-response';
import { DeleteCollection, deleteCollectionResponse } from './models/delete-collection';
import {
  GetCollectionsForkedByUser,
  getCollectionsForkedByUserResponse,
} from './models/get-collections-forked-by-user';
import { CommentResponse, commentResponseResponse } from '../common/comment-response';
import { CommentCreateUpdate, commentCreateUpdateRequest } from '../common/comment-create-update';
import { CommentCreatedUpdated, commentCreatedUpdatedResponse } from '../common/comment-created-updated';
import { GetCollectionForks, getCollectionForksResponse } from './models/get-collection-forks';
import { PullCollectionChanges, pullCollectionChangesResponse } from './models/pull-collection-changes';
import { GetCollectionPullRequests, getCollectionPullRequestsResponse } from './models/get-collection-pull-requests';
import { PullRequestCreate, pullRequestCreateRequest } from './models/pull-request-create';
import { PullRequestCreated, pullRequestCreatedResponse } from './models/pull-request-created';
import { GetCollectionRoles, getCollectionRolesResponse } from './models/get-collection-roles';
import { UpdateCollectionRoles, updateCollectionRolesRequest } from './models/update-collection-roles';
import { GetSourceCollectionStatus, getSourceCollectionStatusResponse } from './models/get-source-collection-status';
import {
  TransformCollectionToOpenApi,
  transformCollectionToOpenApiResponse,
} from './models/transform-collection-to-open-api';
import { TransferCollectionItems, transferCollectionItemsRequest } from './models/transfer-collection-items';
import {
  TransferCollectionItems200Error,
  transferCollectionItems200ErrorResponse,
} from './models/transfer-collection-items200-error';

export class CollectionsService extends BaseService {
  /**
   * Gets all of your [collections](https://www.getpostman.com/docs/collections). The response includes all of your subscribed collections.
   * @param {string} [workspace] - The workspace's ID.
   * @param {string} [name] - Filter results by collections that match the given name.
   * @returns {Promise<HttpResponse<GetCollections>>} Successful Response
   */
  async getCollections(
    params?: GetCollectionsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetCollections>> {
    const request = new Request({
      method: 'GET',
      path: '/collections',
      config: this.config,
      responseSchema: getCollectionsResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('workspace', params?.workspace);
    request.addQueryParam('name', params?.name);
    return this.client.call<GetCollections>(request);
  }

  /**
 * Creates a collection using the [Postman Collection v2 schema format](https://schema.postman.com/json/collection/v2.1.0/docs/index.html).
For more information about the Collection Format, see the [Postman Collection Format documentation](https://learning.postman.com/collection-format/getting-started/overview/).

**Note:**

- For a complete list of available property values for this endpoint, use the following references available in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json):
    - `info` object — Use the `definitions.info` entry.
    - `item` object — Use the `definitions.items` entry.
- For all other possible values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).

 * @param {string} [workspace] - The workspace's ID.
 * @returns {Promise<HttpResponse<CreateCollectionOkResponse>>} Successful Response
 */
  async createCollection(
    body: CollectionsCreateCollectionRequest,
    params?: CreateCollectionParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CreateCollectionOkResponse>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/collections',
      config: this.config,
      responseSchema: createCollectionOkResponseResponse,
      requestSchema: collectionsCreateCollectionRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('workspace', params?.workspace);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<CreateCollectionOkResponse>(request);
  }

  /**
   * Creates a [fork](https://learning.postman.com/docs/collaborating-in-postman/version-control/#creating-a-fork) from an existing collection into a workspace.
   * @param {string} collectionId - The collection's ID.
   * @param {string} workspace - The workspace ID in which to create the fork.
   * @returns {Promise<HttpResponse<CreateCollectionForkOkResponse>>} Successful Response
   */
  async createCollectionFork(
    collectionId: string,
    body: CreateCollectionForkRequest,
    params: CreateCollectionForkParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CreateCollectionForkOkResponse>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/collections/fork/{collectionId}',
      config: this.config,
      responseSchema: createCollectionForkOkResponseResponse,
      requestSchema: createCollectionForkRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    request.addQueryParam('workspace', params?.workspace);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<CreateCollectionForkOkResponse>(request);
  }

  /**
   * Merges a forked collection back into its parent collection.
   * @returns {Promise<HttpResponse<MergeCollectionForkOkResponse>>} Successful Response
   */
  async mergeCollectionFork(
    body: MergeCollectionForkRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<MergeCollectionForkOkResponse>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/collections/merge',
      config: this.config,
      responseSchema: mergeCollectionForkOkResponseResponse,
      requestSchema: mergeCollectionForkRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<MergeCollectionForkOkResponse>(request);
  }

  /**
   * Gets information about a collection. For a complete list of this endpoint's possible values, use the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).
   * @param {string} collectionId - The collection's ID.
   * @param {string} [accessKey] - A collection's read-only access key. Using this query parameter does not require an API key to call the endpoint.
   * @param {GetCollectionModel} [model] - Return a list of only the collection's root-level request (`rootLevelRequests`) and folder (`rootLevelFolders`) IDs instead of the full collection element data.
   * @returns {Promise<HttpResponse<GetCollection>>} Successful Response
   */
  async getCollection(
    collectionId: string,
    params?: GetCollectionParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetCollection>> {
    const request = new Request({
      method: 'GET',
      path: '/collections/{collectionId}',
      config: this.config,
      responseSchema: getCollectionResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    request.addQueryParam('access_key', params?.accessKey);
    request.addQueryParam('model', params?.model);
    return this.client.call<GetCollection>(request);
  }

  /**
 * Replaces the contents of a collection using the [Postman Collection v2 schema format](https://schema.postman.com/json/collection/v2.1.0/docs/index.html). Include the collection's ID values in the request body. If you do not, the endpoint removes the existing items and creates new items.
> The maximum collection size this endpoint accepts cannot exceed 20 MB.

For a complete list of available property values for this endpoint, use the following references available in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json):
- `info` object — Use `../definitions/info"`.
- `item` object — Use `../definitions/item"`.

For all other possible values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json). For more information about the Collection Format, see the [Postman Collection Format documentation](https://learning.postman.com/collection-format/getting-started/overview/).

**Note:**

To copy another collection's contents to the given collection, remove all ID values before you pass it in this endpoint. If you do not, this endpoint returns an error. These values include the `id`, `uid`, and `postman_id` values.

 * @param {string} collectionId - The collection's ID.
 * @returns {Promise<HttpResponse<PutCollectionOkResponse>>} Successful Response
 */
  async putCollection(
    collectionId: string,
    body: PutCollectionRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PutCollectionOkResponse>> {
    const request = new Request({
      method: 'PUT',
      body,
      path: '/collections/{collectionId}',
      config: this.config,
      responseSchema: putCollectionOkResponseResponse,
      requestSchema: putCollectionRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<PutCollectionOkResponse>(request);
  }

  /**
 * Updates specific collection information, such as its name, events, or its variables. For more information about the `auth`, `variables`, and `events` properties, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json):- For `variables`, refer to `../definitions/variable"`.
- For `auth`, refer to `../definitions/auth-attribute"`.
- For `events`, refer to `../definitions/event"`.

For more information about the Collection Format, see the [Postman Collection Format documentation](https://learning.postman.com/collection-format/getting-started/overview/).

 * @param {string} collectionId - The collection's ID.
 * @returns {Promise<HttpResponse<PatchCollectionOkResponse>>} Successful Response
 */
  async patchCollection(
    collectionId: string,
    body: PatchCollectionRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PatchCollectionOkResponse>> {
    const request = new Request({
      method: 'PATCH',
      body,
      path: '/collections/{collectionId}',
      config: this.config,
      responseSchema: patchCollectionOkResponseResponse,
      requestSchema: patchCollectionRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<PatchCollectionOkResponse>(request);
  }

  /**
   * Deletes a collection.
   * @param {string} collectionId - The collection's ID.
   * @returns {Promise<HttpResponse<DeleteCollection>>} Successful Response
   */
  async deleteCollection(collectionId: string, requestConfig?: RequestConfig): Promise<HttpResponse<DeleteCollection>> {
    const request = new Request({
      method: 'DELETE',
      path: '/collections/{collectionId}',
      config: this.config,
      responseSchema: deleteCollectionResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    return this.client.call<DeleteCollection>(request);
  }

  /**
   * Gets a list of all the authenticated user's forked collections.
   * @param {string} collectionId - The collection's ID.
   * @param {string} [cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {number} [limit] - The maximum number of rows to return in the response.
   * @param {AscDesc} [direction] - Sort the results by creation date in ascending (`asc`) or descending (`desc`) order.
   * @returns {Promise<HttpResponse<GetCollectionsForkedByUser>>} Successful Response
   */
  async getCollectionsForkedByUser(
    collectionId: string,
    params?: GetCollectionsForkedByUserParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetCollectionsForkedByUser>> {
    const request = new Request({
      method: 'GET',
      path: '/collections/{collectionId}/collection-forks',
      config: this.config,
      responseSchema: getCollectionsForkedByUserResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    request.addQueryParam('cursor', params?.cursor);
    request.addQueryParam('limit', params?.limit);
    request.addQueryParam('direction', params?.direction);
    return this.client.call<GetCollectionsForkedByUser>(request);
  }

  /**
   * Gets all comments left by users in a collection.
   * @param {string} collectionId - The collection's unique ID.
   * @returns {Promise<HttpResponse<CommentResponse>>} Successful Response
   */
  async getCollectionComments(
    collectionId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CommentResponse>> {
    const request = new Request({
      method: 'GET',
      path: '/collections/{collectionId}/comments',
      config: this.config,
      responseSchema: commentResponseResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    return this.client.call<CommentResponse>(request);
  }

  /**
 * Creates a comment on a collection.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} collectionId - The collection's unique ID.
 * @returns {Promise<HttpResponse<CommentCreatedUpdated>>} Created
 */
  async createCollectionComment(
    collectionId: string,
    body: CommentCreateUpdate,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CommentCreatedUpdated>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/collections/{collectionId}/comments',
      config: this.config,
      responseSchema: commentCreatedUpdatedResponse,
      requestSchema: commentCreateUpdateRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<CommentCreatedUpdated>(request);
  }

  /**
 * Updates a comment on a collection.
**Note:**

This endpoint accepts a max of 10,000 characters.

 * @param {string} collectionId - The collection's unique ID.
 * @param {number} commentId - The comment's ID.
 * @returns {Promise<HttpResponse<CommentCreatedUpdated>>} Successful Response
 */
  async updateCollectionComment(
    collectionId: string,
    commentId: number,
    body: CommentCreateUpdate,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CommentCreatedUpdated>> {
    const request = new Request({
      method: 'PUT',
      body,
      path: '/collections/{collectionId}/comments/{commentId}',
      config: this.config,
      responseSchema: commentCreatedUpdatedResponse,
      requestSchema: commentCreateUpdateRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    request.addPathParam('commentId', commentId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<CommentCreatedUpdated>(request);
  }

  /**
 * Deletes a comment from a collection. On success, this returns an HTTP `204 No Content` response
**Note:**

Deleting the first comment of a thread deletes all the comments in the thread.

 * @param {string} collectionId - The collection's unique ID.
 * @param {number} commentId - The comment's ID.
 * @returns {Promise<HttpResponse<any>>} No Content
 */
  async deleteCollectionComment(
    collectionId: string,
    commentId: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new Request({
      method: 'DELETE',
      path: '/collections/{collectionId}/comments/{commentId}',
      config: this.config,
      responseSchema: z.undefined(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    request.addPathParam('commentId', commentId);
    return this.client.call<undefined>(request);
  }

  /**
   * Gets a collection's forked collections. The response returns data for each fork, such as the fork's ID, the user who forked it, and the fork's  creation date.
   * @param {string} collectionId - The collection's ID.
   * @param {string} [cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {number} [limit] - The maximum number of rows to return in the response.
   * @param {AscDesc} [direction] - Sort the results by creation date in ascending (`asc`) or descending (`desc`) order.
   * @returns {Promise<HttpResponse<GetCollectionForks>>} Successful Response
   */
  async getCollectionForks(
    collectionId: string,
    params?: GetCollectionForksParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetCollectionForks>> {
    const request = new Request({
      method: 'GET',
      path: '/collections/{collectionId}/forks',
      config: this.config,
      responseSchema: getCollectionForksResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    request.addQueryParam('cursor', params?.cursor);
    request.addQueryParam('limit', params?.limit);
    request.addQueryParam('direction', params?.direction);
    return this.client.call<GetCollectionForks>(request);
  }

  /**
 * Pulls the changes from a parent (source) collection into the forked collection. In the endpoint's response:
- The `destinationId` is the ID of the forked collection.
- The `sourceId` is the ID of the source collection.

 * @param {string} collectionId - The collection's ID.
 * @returns {Promise<HttpResponse<PullCollectionChanges>>} Successful Response
 */
  async pullCollectionChanges(
    collectionId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PullCollectionChanges>> {
    const request = new Request({
      method: 'PUT',
      path: '/collections/{collectionId}/pulls',
      config: this.config,
      responseSchema: pullCollectionChangesResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    return this.client.call<PullCollectionChanges>(request);
  }

  /**
   * Gets information about a collection's pull requests, such as the source and destination IDs, status of the pull requests, and a URL link to the pull requests.
   * @param {string} collectionId - The collection's unique ID.
   * @returns {Promise<HttpResponse<GetCollectionPullRequests>>} Successful Response
   */
  async getCollectionPullRequests(
    collectionId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetCollectionPullRequests>> {
    const request = new Request({
      method: 'GET',
      path: '/collections/{collectionId}/pull-requests',
      config: this.config,
      responseSchema: getCollectionPullRequestsResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    return this.client.call<GetCollectionPullRequests>(request);
  }

  /**
   * Creates a pull request for a forked collection into its parent collection.
   * @param {string} collectionId - The collection's unique ID.
   * @returns {Promise<HttpResponse<PullRequestCreated>>} Successful Response
   */
  async createCollectionPullRequest(
    collectionId: string,
    body: PullRequestCreate,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PullRequestCreated>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/collections/{collectionId}/pull-requests',
      config: this.config,
      responseSchema: pullRequestCreatedResponse,
      requestSchema: pullRequestCreateRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<PullRequestCreated>(request);
  }

  /**
   * Gets information about all roles in a collection. The response returns the IDs of all users, teams, and groups with access to view or edit the collection.
   * @param {string} collectionId - The collection's ID.
   * @returns {Promise<HttpResponse<GetCollectionRoles>>} Successful Response
   */
  async getCollectionRoles(
    collectionId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetCollectionRoles>> {
    const request = new Request({
      method: 'GET',
      path: '/collections/{collectionId}/roles',
      config: this.config,
      responseSchema: getCollectionRolesResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    return this.client.call<GetCollectionRoles>(request);
  }

  /**
 * Updates the roles of users, groups, or teams in a collection. On success, this returns a `204 No Content` response.
**Note:**

- Only users assigned the EDITOR [role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) in the collection can use this endpoint.
- This endpoint does not support the external [Partner or Guest roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles).

 * @param {string} collectionId - The collection's ID.
 * @returns {Promise<HttpResponse<any>>} No Content
 */
  async updateCollectionRoles(
    collectionId: string,
    body: UpdateCollectionRoles,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new Request({
      method: 'PATCH',
      body,
      path: '/collections/{collectionId}/roles',
      config: this.config,
      responseSchema: z.undefined(),
      requestSchema: updateCollectionRolesRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<undefined>(request);
  }

  /**
 * Checks whether there is a change between the forked collection and its parent (source) collection.
If the value of the `isSourceAhead` property is `true` in the response, then there is a difference between the forked collection and its source collection.

**Note:**

This endpoint may take a few minutes to return an updated `isSourceAhead` status.

 * @param {string} collectionId - The collection's ID.
 * @returns {Promise<HttpResponse<GetSourceCollectionStatus>>} Successful Response
 */
  async getSourceCollectionStatus(
    collectionId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetSourceCollectionStatus>> {
    const request = new Request({
      method: 'GET',
      path: '/collections/{collectionId}/source-status',
      config: this.config,
      responseSchema: getSourceCollectionStatusResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    return this.client.call<GetSourceCollectionStatus>(request);
  }

  /**
 * Transforms an existing Postman Collection into a stringified OpenAPI definition.
**Note:**

This does not create an API.

 * @param {string} collectionId - The collection's ID.
 * @param {Format} [format] - Return the OpenAPI definition in the given format.
 * @returns {Promise<HttpResponse<TransformCollectionToOpenApi>>} Successful Response
 */
  async transformCollectionToOpenApi(
    collectionId: string,
    params?: TransformCollectionToOpenApiParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<TransformCollectionToOpenApi>> {
    const request = new Request({
      method: 'GET',
      path: '/collections/{collectionId}/transformations',
      config: this.config,
      responseSchema: transformCollectionToOpenApiResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('collectionId', collectionId);
    request.addQueryParam('format', params?.format);
    return this.client.call<TransformCollectionToOpenApi>(request);
  }

  /**
   * Copies or moves folders into a collection or folder.
   * @returns {Promise<HttpResponse<TransferCollectionItems200Error>>} Successful Response
   */
  async transferCollectionFolders(
    body: TransferCollectionItems,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<TransferCollectionItems200Error>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/collection-folders-transfers',
      config: this.config,
      responseSchema: transferCollectionItems200ErrorResponse,
      requestSchema: transferCollectionItemsRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<TransferCollectionItems200Error>(request);
  }

  /**
   * Copies or moves requests into a collection or folder.
   * @returns {Promise<HttpResponse<TransferCollectionItems200Error>>} Successful Response
   */
  async transferCollectionRequests(
    body: TransferCollectionItems,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<TransferCollectionItems200Error>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/collection-requests-transfers',
      config: this.config,
      responseSchema: transferCollectionItems200ErrorResponse,
      requestSchema: transferCollectionItemsRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<TransferCollectionItems200Error>(request);
  }

  /**
   * Copies or moves responses into a request.
   * @returns {Promise<HttpResponse<TransferCollectionItems200Error>>} Successful Response
   */
  async transferCollectionResponses(
    body: TransferCollectionItems,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<TransferCollectionItems200Error>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/collection-responses-transfers',
      config: this.config,
      responseSchema: transferCollectionItems200ErrorResponse,
      requestSchema: transferCollectionItemsRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<TransferCollectionItems200Error>(request);
  }
}
