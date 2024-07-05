// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  CreateEnvironmentOkResponse,
  CreateEnvironmentRequest,
  DeleteEnvironment,
  ForkEnvironmentOkResponse,
  ForkEnvironmentRequest,
  GetEnvironment,
  GetEnvironmentForks,
  GetEnvironments,
  MergeEnvironmentForkOkResponse,
  MergeEnvironmentForkRequest,
  PullEnvironmentOkResponse,
  PullEnvironmentRequest,
  UpdateEnvironmentOkResponse,
  UpdateEnvironmentRequest,
  createEnvironmentOkResponseResponse,
  createEnvironmentRequestRequest,
  deleteEnvironmentResponse,
  forkEnvironmentOkResponseResponse,
  forkEnvironmentRequestRequest,
  getEnvironmentForksResponse,
  getEnvironmentResponse,
  getEnvironmentsResponse,
  mergeEnvironmentForkOkResponseResponse,
  mergeEnvironmentForkRequestRequest,
  pullEnvironmentOkResponseResponse,
  pullEnvironmentRequestRequest,
  updateEnvironmentOkResponseResponse,
  updateEnvironmentRequestRequest,
} from './models';
import {
  CreateEnvironmentParams,
  ForkEnvironmentParams,
  GetEnvironmentForksParams,
  GetEnvironmentsParams,
} from './request-params';

export class EnvironmentsService extends BaseService {
  /**
   * Gets information about all of your [environments](https://learning.postman.com/docs/sending-requests/managing-environments/).
   * @param {string} [workspace] - The workspace's ID.
   * @returns {Promise<HttpResponse<GetEnvironments>>} Successful Response
   */
  async getEnvironments(
    params?: GetEnvironmentsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetEnvironments>> {
    const path = '/environments';
    const options: any = {
      responseSchema: getEnvironmentsResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.workspace) {
      options.queryParams['workspace'] = params?.workspace;
    }
    return this.client.get(path, options);
  }

  /**
   * Creates an environment.
   * @param {string} [workspace] - The workspace's ID.
   * @returns {Promise<HttpResponse<CreateEnvironmentOkResponse>>} Successful Response
   */
  async createEnvironment(
    body: CreateEnvironmentRequest,
    params?: CreateEnvironmentParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CreateEnvironmentOkResponse>> {
    const path = '/environments';
    const options: any = {
      responseSchema: createEnvironmentOkResponseResponse,
      requestSchema: createEnvironmentRequestRequest,
      body: body as any,
      queryParams: {},
      headers: {
        'Content-Type': 'application/json',
      },
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.workspace) {
      options.queryParams['workspace'] = params?.workspace;
    }
    return this.client.post(path, options);
  }

  /**
   * Gets information about an environment.
   * @param {string} environmentId - The environment's ID.
   * @returns {Promise<HttpResponse<GetEnvironment>>} Successful Response
   */
  async getEnvironment(environmentId: string, requestConfig?: RequestConfig): Promise<HttpResponse<GetEnvironment>> {
    const path = this.client.buildPath('/environments/{environmentId}', { environmentId: environmentId });
    const options: any = {
      responseSchema: getEnvironmentResponse,
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
   * Updates an environment.
   * @param {string} environmentId - The environment's ID.
   * @returns {Promise<HttpResponse<UpdateEnvironmentOkResponse>>} Successful Response
   */
  async updateEnvironment(
    environmentId: string,
    body: UpdateEnvironmentRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<UpdateEnvironmentOkResponse>> {
    const path = this.client.buildPath('/environments/{environmentId}', { environmentId: environmentId });
    const options: any = {
      responseSchema: updateEnvironmentOkResponseResponse,
      requestSchema: updateEnvironmentRequestRequest,
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
   * Deletes an environment.
   * @param {string} environmentId - The environment's ID.
   * @returns {Promise<HttpResponse<DeleteEnvironment>>} Successful Response
   */
  async deleteEnvironment(
    environmentId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<DeleteEnvironment>> {
    const path = this.client.buildPath('/environments/{environmentId}', { environmentId: environmentId });
    const options: any = {
      responseSchema: deleteEnvironmentResponse,
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.delete(path, options);
  }

  /**
   * Gets all of an environment's forked environments.
   * @param {string} environmentId - The environment's unique ID.
   * @param {string} [cursor] - The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.
   * @param {AscDesc} [direction] - Sort results in ascending (`asc`) or descending (`desc`) order.
   * @param {number} [limit] - The maximum number of rows to return in the response.
   * @param {GetEnvironmentForksSort} [sort] - Sort the results by the date and time of creation.
   * @returns {Promise<HttpResponse<GetEnvironmentForks>>} Successful Response
   */
  async getEnvironmentForks(
    environmentId: string,
    params?: GetEnvironmentForksParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetEnvironmentForks>> {
    const path = this.client.buildPath('/environments/{environmentId}/forks', { environmentId: environmentId });
    const options: any = {
      responseSchema: getEnvironmentForksResponse,
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.cursor) {
      options.queryParams['cursor'] = params?.cursor;
    }
    if (params?.direction) {
      options.queryParams['direction'] = params?.direction;
    }
    if (params?.limit) {
      options.queryParams['limit'] = params?.limit;
    }
    if (params?.sort) {
      options.queryParams['sort'] = params?.sort;
    }
    return this.client.get(path, options);
  }

  /**
   * Creates a [fork](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/) of an existing environment.
   * @param {string} environmentId - The environment's unique ID.
   * @param {string} workspaceId - The workspace's ID.
   * @returns {Promise<HttpResponse<ForkEnvironmentOkResponse>>} Successful Response
   */
  async forkEnvironment(
    environmentId: string,
    body: ForkEnvironmentRequest,
    params: ForkEnvironmentParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ForkEnvironmentOkResponse>> {
    const path = this.client.buildPath('/environments/{environmentId}/forks', { environmentId: environmentId });
    const options: any = {
      responseSchema: forkEnvironmentOkResponseResponse,
      requestSchema: forkEnvironmentRequestRequest,
      body: body as any,
      queryParams: {},
      headers: {
        'Content-Type': 'application/json',
      },
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    if (params?.workspaceId) {
      options.queryParams['workspaceId'] = params?.workspaceId;
    }
    return this.client.post(path, options);
  }

  /**
   * [Merges](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#merge-changes-from-a-fork) a forked environment back into its parent environment.
   * @param {string} environmentId - The environment's unique ID.
   * @returns {Promise<HttpResponse<MergeEnvironmentForkOkResponse>>} Successful Response
   */
  async mergeEnvironmentFork(
    environmentId: string,
    body: MergeEnvironmentForkRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<MergeEnvironmentForkOkResponse>> {
    const path = this.client.buildPath('/environments/{environmentId}/merges', { environmentId: environmentId });
    const options: any = {
      responseSchema: mergeEnvironmentForkOkResponseResponse,
      requestSchema: mergeEnvironmentForkRequestRequest,
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
   * [Pulls](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#pull-updates-from-a-parent-element) the changes from a parent (source) environment into the forked environment.
   * @param {string} environmentId - The environment's unique ID.
   * @returns {Promise<HttpResponse<PullEnvironmentOkResponse>>} Successful Response
   */
  async pullEnvironment(
    environmentId: string,
    body: PullEnvironmentRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PullEnvironmentOkResponse>> {
    const path = this.client.buildPath('/environments/{environmentId}/pulls', { environmentId: environmentId });
    const options: any = {
      responseSchema: pullEnvironmentOkResponseResponse,
      requestSchema: pullEnvironmentRequestRequest,
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
}
